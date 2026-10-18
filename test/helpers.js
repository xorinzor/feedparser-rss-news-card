const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

// Dates without a timezone are parsed as local time; pin it so results match on every machine.
process.env.TZ = 'UTC';

const CARD_SOURCE = fs.readFileSync(path.join(__dirname, '..', 'feedparser-rss-news-card.js'), 'utf8');

/** Loads the card script into a fresh window, the way Home Assistant loads a dashboard resource. */
function loadCard() {
  const dom = new JSDOM('<!doctype html><body></body>', { runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom;
  window.openCalls = [];
  window.open = (...args) => { window.openCalls.push(args); return null; };
  // Top-level const bindings stay script-local, so expose the locale table for the locale tests.
  window.eval(`${CARD_SOURCE}\nwindow.RSS_LOCALES = RSS_LOCALES;`);
  return window;
}

/** Copies a value out of the jsdom realm so assert.deepStrictEqual compares plain objects. */
function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

/** Pass components: null to simulate a frontend that does not expose the loaded components. */
function makeHass({ states = {}, entities, language = 'en', timeFormat, components = ['feedparser', 'feedparser.sensor'] } = {}) {
  const config = components ? { components } : undefined;
  return { language, locale: { language, time_format: timeFormat }, states, entities, config };
}

function feedState(entries, { friendlyName, state = 'ok', lastUpdated = '1' } = {}) {
  const attributes = { entries };
  if (friendlyName) attributes.friendly_name = friendlyName;
  return { state, last_updated: lastUpdated, attributes };
}

function mountCard(window, config, hass) {
  const card = window.document.createElement('feedparser-rss-news-card');
  window.document.body.appendChild(card);
  card.setConfig(config);
  if (hass) card.hass = hass;
  return card;
}

/** Mounts the editor and echoes every config-changed event back into setConfig, as Home Assistant does. */
function mountEditor(window, config, hass) {
  const editor = window.document.createElement('feedparser-rss-news-card-editor');
  window.document.body.appendChild(editor);
  const changes = [];
  editor.addEventListener('config-changed', e => {
    changes.push(e.detail.config);
    editor.setConfig(e.detail.config);
  });
  if (hass) editor.hass = hass;
  editor.setConfig(config);
  return { editor, changes, lastConfig: () => plain(changes[changes.length - 1]) };
}

function articleTitles(card) {
  return [...card.shadowRoot.querySelectorAll('.article-title')].map(n => n.textContent);
}

function diagnostics(card) {
  return [...card.shadowRoot.querySelectorAll('.diagnostics li')].map(n => n.textContent);
}

module.exports = { loadCard, plain, makeHass, feedState, mountCard, mountEditor, articleTitles, diagnostics };
