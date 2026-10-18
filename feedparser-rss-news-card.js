const RSS_LOCALES = {
  en: {
    no_articles: 'No articles to display.',
    diag_title: '⚠️ Sensor diagnostics',
    diag_footer: 'Missing sensors must be created using the <b>feedparser</b> custom component.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Missing entity ID in configuration.' },
      not_found:             { icon: '❌', text: 'Entity does not exist in Home Assistant.' },
      unavailable:           { icon: '🔌', text: 'Entity is unavailable or in unknown state.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Entity has no "entries" attribute (check feedparser configuration).' },
      empty:                 { icon: '📭', text: 'Entity is reachable but contains no articles yet.' },
    },
    cmd_hint: 'Ensure feedparser is configured correctly:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published, tags',
    ed: {
      card_title:        'Card title',
      card_title_color:  'Card title color',
      article_title_color: 'Article title color',
      desc_color:        'Description color',
      sources:           'Sources (entity · name · color)',
      add_source:        '+ Add source',
      exclude_categories: 'Exclude categories',
      exclude_placeholder: 'Add category, press Enter',
      max_articles:      'Max articles',
      card_height:       'Card height (px)',
      img_width:         'Image width (px)',
      img_height:        'Image height (px)',
      show_source:       'Show source name',
      show_date:         'Show date',
      show_desc:         'Show description',
      show_images:       'Show images',
      keep_image_space:  'Keep space if image missing',
      title_size:        'Article title font size (px)',
      desc_size:         'Description font size (px)',
      color_hint:        'Leave empty for theme default',
    },
  },
  hu: {
    no_articles: 'Nincs megjeleníthető cikk.',
    diag_title: '⚠️ Szenzor diagnosztika',
    diag_footer: 'A hiányzó szenzorokat a <b>feedparser</b> integrációval kell létrehozni.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Hiányzó entitás azonosító a konfigurációban.' },
      not_found:             { icon: '❌', text: 'Az entitás nem létezik a Home Assistantban.' },
      unavailable:           { icon: '🔌', text: 'Az entitás elérhetetlen vagy ismeretlen állapotban van.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Az entitásnak nincs "entries" attribútuma (ellenőrizd a feedparser beállítást).' },
      empty:                 { icon: '📭', text: 'Az entitás elérhető, de még nincs benne cikk.' },
    },
    cmd_hint: 'Feedparser beállítás szükséges:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published, tags',
    ed: {
      card_title:          'Kártya cime',
      card_title_color:    'Kártya cím színe',
      article_title_color: 'Cikkek cím színe',
      desc_color:          'Leírás színe',
      sources:             'Források (entitás · név · szín)',
      add_source:          '+ Forrás hozzáadása',
      exclude_categories:  'Kizárt kategóriák',
      exclude_placeholder: 'Kategória hozzáadása, majd Enter',
      max_articles:        'Max cikkek száma',
      card_height:         'Kártya magassága (px)',
      img_width:           'Kép szélessége (px)',
      img_height:          'Kép magassága (px)',
      show_source:         'Forrás neve látható',
      show_date:           'Dátum látható',
      show_desc:           'Leírás látható',
      show_images:         'Képek megjelenítése',
      keep_image_space:    'Hely megtartása hiányzó képnél',
      title_size:          'Cím betűmérete (px)',
      desc_size:           'Leírás betűmérete (px)',
      color_hint:          'Üresen hagyva a téma alapszínét használja',
    },
  },
  de: {
    no_articles: 'Keine Artikel zum Anzeigen.',
    diag_title: '⚠️ Sensor-Diagnose',
    diag_footer: 'Fehlende Sensoren müssen mit der <b>feedparser</b>-Integration erstellt werden.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Fehlende Entitäts-ID in der Konfiguration.' },
      not_found:             { icon: '❌', text: 'Entität existiert nicht in Home Assistant.' },
      unavailable:           { icon: '🔌', text: 'Entität ist nicht verfügbar oder in unbekanntem Zustand.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Entität hat kein "entries"-Attribut (feedparser Konfiguration prüfen).' },
      empty:                 { icon: '📭', text: 'Entität ist erreichbar, enthält aber noch keine Artikel.' },
    },
    cmd_hint: 'feedparser Konfiguration erforderlich:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published, tags',
    ed: {
      card_title:          'Kartentitel',
      card_title_color:    'Farbe Kartentitel',
      article_title_color: 'Farbe Artikeltitel',
      desc_color:          'Farbe Beschreibung',
      sources:             'Quellen (Entität · Name · Farbe)',
      add_source:          '+ Quelle hinzufügen',
      exclude_categories:  'Kategorien ausschließen',
      exclude_placeholder: 'Kategorie hinzufügen, Enter drücken',
      max_articles:        'Max. Artikel',
      card_height:         'Kartenhöhe (px)',
      img_width:           'Bildbreite (px)',
      img_height:          'Bildhöhe (px)',
      show_source:         'Quellenname anzeigen',
      show_date:           'Datum anzeigen',
      show_desc:           'Beschreibung anzeigen',
      show_images:         'Bilder anzeigen',
      keep_image_space:    'Platz freihalten wenn Bild fehlt',
      title_size:          'Schriftgröße Artikeltitel (px)',
      desc_size:           'Schriftgröße Beschreibung (px)',
      color_hint:          'Leer lassen für Themenstandardfarbe',
    },
  },
};

const HA_LANG_TO_DATE_LOCALE = {
  hu: 'hu-HU', en: 'en-US', de: 'de-DE', fr: 'fr-FR',
  es: 'es-ES', it: 'it-IT', pl: 'pl-PL', nl: 'nl-NL',
  pt: 'pt-PT', ru: 'ru-RU', cs: 'cs-CZ', sk: 'sk-SK',
  ro: 'ro-RO', sv: 'sv-SE', nb: 'nb-NO', da: 'da-DK',
  fi: 'fi-FI', tr: 'tr-TR', zh: 'zh-CN', ja: 'ja-JP',
  ko: 'ko-KR',
};

function getLocale(lang) {
  return RSS_LOCALES[lang] || RSS_LOCALES['en'];
}

function detectHaLanguage(hass) {
  try {
    return hass?.locale?.language || hass?.language || 'en';
  } catch { return 'en'; }
}

// ─── Date parsing ─────────────────────────────────────────────────────────────
const MONTH_MAP = {
  jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
  jul:6, aug:7, sep:8, oct:9, nov:10, dec:11,
};

function parsePublishedDate(str) {
  if (!str) return 0;

  // Strip only a weekday prefix; a generic word match would also strip a leading month name.
  const cleaned = str.replace(/^(mon|tue|wed|thu|fri|sat|sun)[a-z]*\.?,?\s+/i, '').trim();
  const m12 = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  const m24 = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{2}):(\d{2})$/);
  const dm12 = cleaned.match(/^(\d{1,2})\s+([A-Za-z]+),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  const dm24 = cleaned.match(/^(\d{1,2})\s+([A-Za-z]+),?\s+(\d{2}):(\d{2})$/);

  let monthStr, dayStr, hourStr, minStr, ampm = null;

  if (m12)       { [, monthStr, dayStr, hourStr, minStr, ampm] = m12; }
  else if (m24)  { [, monthStr, dayStr, hourStr, minStr]       = m24; }
  else if (dm12) { [, dayStr, monthStr, hourStr, minStr, ampm] = dm12; }
  else if (dm24) { [, dayStr, monthStr, hourStr, minStr]       = dm24; }

  if (monthStr) {
    const monthIdx = MONTH_MAP[monthStr.toLowerCase().slice(0, 3)];
    if (monthIdx !== undefined) {
      let hour = parseInt(hourStr, 10);
      const min = parseInt(minStr, 10);
      const day = parseInt(dayStr, 10);
      if (ampm) {
        if (ampm.toUpperCase() === 'PM' && hour !== 12) hour += 12;
        if (ampm.toUpperCase() === 'AM' && hour === 12) hour  =  0;
      }
      const now = new Date();
      let d = new Date(now.getFullYear(), monthIdx, day, hour, min);
      if (d.getTime() - now.getTime() > 7 * 24 * 3600 * 1000) {
        d = new Date(now.getFullYear() - 1, monthIdx, day, hour, min);
      }
      return d.getTime();
    }
  }

  const native = new Date(str);
  return isNaN(native.getTime()) ? 0 : native.getTime();
}

// ─── Safe rendering helpers ──────────────────────────────────────────────────
// Feed entries are third-party content and must never reach innerHTML.

const SAFE_URL_PROTOCOLS = new Set(['http:', 'https:']);

/** Returns the URL if it is an absolute http(s) URL, otherwise ''. */
function sanitizeUrl(value) {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  try {
    const url = new URL(trimmed);
    return SAFE_URL_PROTOCOLS.has(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

/** Converts (possibly HTML) feed text to plain text without executing anything. */
function feedTextToPlain(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (!/[<&]/.test(str)) return str;
  try {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    doc.querySelectorAll('script, style, template').forEach(n => n.remove());
    return (doc.body ? doc.body.textContent : '') || '';
  } catch {
    return str;
  }
}

/** Only allow simple CSS colour values (named, hex, rgb()/hsl(), CSS vars). */
function sanitizeCssColor(value, fallback) {
  if (typeof value !== 'string') return fallback;
  const v = value.trim();
  if (/^(#[0-9a-fA-F]{3,8}|[a-zA-Z]+|(rgb|rgba|hsl|hsla)\([0-9.,%\s]+\)|var\(--[a-zA-Z0-9-]+\))$/.test(v)) return v;
  return fallback;
}

/** Normalizes exclude_categories (comma-separated string or list) to unique, trimmed names. */
function parseCategories(value) {
  const seen = new Set();
  return [].concat(value || [])
    .flatMap(c => String(c).split(','))
    .map(c => c.trim())
    .filter(c => {
      const key = c.toLowerCase();
      if (!c || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
class FeedparserRssNewsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._lastStateKey = '';
    this._initialized = false;
  }

  static getConfigElement() {
    return document.createElement('feedparser-rss-news-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'News',
      sources: [{ entity: 'sensor.feedparser_news', name: 'Feedparser Source', color: '#e63946' }],
      exclude_categories: [],
      max_articles: 10,
      card_height: 400,
      show_description: true,
      show_source: true,
      show_date: true,
      show_images: true,
      keep_image_space: false,
      image_width: 100,
      image_height: 70,
      title_font_size: 15,
      desc_font_size: 14,
      card_title_color: '',
      article_title_color: '',
      desc_color: '',
    };
  }

  setConfig(config) {
    if (!config.sources || !Array.isArray(config.sources) || config.sources.length === 0) {
      throw new Error('At least one source must be defined in the "sources" list.');
    }
    this._config = {
      title:            config.title || '',
      sources:          config.sources,
      exclude_categories: config.exclude_categories || '',
      max_articles:     config.max_articles || 10,
      card_height:      config.card_height || 400,
      show_description: config.show_description !== false,
      show_source:      config.show_source !== false,
      show_date:        config.show_date !== false,
      show_images:      config.show_images !== false,
      keep_image_space: config.keep_image_space === true,
      image_width:      config.image_width || 100,
      image_height:     config.image_height || 70,
      title_font_size:  config.title_font_size || 15,
      desc_font_size:   config.desc_font_size || 14,
      card_title_color: config.card_title_color || '',
      article_title_color: config.article_title_color || '',
      desc_color:       config.desc_color || '',
    };
    this._initialized = false;
    this._lastStateKey = '';
    this._render();
    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    const stateKey = this._config.sources.map(s => {
      const st = hass.states[s.entity];
      return st ? (s.entity + ':' + st.state + ':' + st.last_updated) : s.entity;
    }).join('|');
    if (stateKey === this._lastStateKey && this._initialized) return;
    this._lastStateKey = stateKey;
    this._updateContent(this._getArticles(), this._validateSources());
  }

  _getLang() {
    const haLang = detectHaLanguage(this._hass);
    return haLang.split('-')[0].toLowerCase();
  }

  _getDateLocale() {
    const haLang = detectHaLanguage(this._hass);
    const shortLang = haLang.split('-')[0].toLowerCase();
    return HA_LANG_TO_DATE_LOCALE[shortLang] || haLang || 'en-US';
  }

  _t() { return getLocale(this._getLang()); }

  _validateSources() {
    if (!this._hass) return [];
    const issues = [];
    for (const source of this._config.sources) {
      if (!source.entity) { issues.push({ entity: '(empty)', name: source.name || '?', problem: 'missing_entity' }); continue; }
      const state = this._hass.states[source.entity];
      if (!state) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'not_found' }); continue; }
      if (state.state === 'unavailable' || state.state === 'unknown') { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'unavailable' }); continue; }
      const entries = state.attributes.entries;
      if (!Array.isArray(entries)) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'no_entries_attribute' }); continue; }
      if (entries.length === 0) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'empty' }); }
    }
    return issues;
  }

  _renderDiagnostics(issues) {
    const t = this._t();
    const panel = el('div', 'diagnostics-panel');
    panel.appendChild(el('strong', '', t.diag_title));
    const ul = document.createElement('ul');
    issues.forEach(issue => {
      const problem = t.problems[issue.problem];
      const label = issue.name === issue.entity ? issue.entity : `${issue.name} (${issue.entity})`;
      ul.appendChild(el('li', '', `${problem.icon} ${label}: ${problem.text}`));
    });
    panel.appendChild(ul);
    // Locale strings are trusted constants with inline markup; entity names above stay textContent.
    const footer = el('div', 'diagnostics-footer');
    footer.innerHTML = t.diag_footer;
    const hint = el('div', 'diagnostics-footer');
    hint.innerHTML = t.cmd_hint;
    panel.append(footer, hint);
    return panel;
  }

  _getArticles() {
    if (!this._hass) return [];
    let all = [];
    
    const excludeList = parseCategories(this._config.exclude_categories).map(c => c.toLowerCase());
    
    for (const source of this._config.sources) {
      const state = this._hass.states[source.entity];
      if (!state) continue;
      
      const entries = state.attributes.entries;
      if (!Array.isArray(entries)) continue;
      
      entries.forEach(a => {
        if (excludeList.length > 0 && Array.isArray(a.tags)) {
          const isExcluded = a.tags.some(tag => 
            tag && tag.term && excludeList.includes(tag.term.trim().toLowerCase())
          );
          if (isExcluded) return; 
        }

        all.push({ 
          ...a, 
          _sourceName: source.name || source.entity, 
          _sourceColor: source.color || 'var(--primary-color)' 
        });
      });
    }

    all.sort((a, b) => parsePublishedDate(b.published) - parsePublishedDate(a.published));
    return all.slice(0, this._config.max_articles);
  }

  _formatDate(dateStr) {
    try {
      const ts = parsePublishedDate(dateStr);
      if (!ts) return dateStr;
      
      const dateObj = new Date(ts);
      const userLangLocale = this._hass?.locale?.language || this._getDateLocale();
      
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      };

      if (this._hass?.locale?.time_format) {
        if (this._hass.locale.time_format === '12') options.hour12 = true;
        if (this._hass.locale.time_format === '24') options.hour12 = false;
      }

      return new Intl.DateTimeFormat(userLangLocale, options).format(dateObj);
    } catch { return dateStr; }
  }

  _getVisited() {
    if (!window._feedparserRssNewsCardVisited) window._feedparserRssNewsCardVisited = new Set();
    return window._feedparserRssNewsCardVisited;
  }

  _markVisited(url) {
    this._getVisited().add(url);
  }

  _isVisited(url) {
    return this._getVisited().has(url);
  }

  _buildArticleNodes(articles) {
    const { show_source, show_date, show_description, image_width, image_height, title_font_size, desc_font_size, article_title_color, desc_color, show_images, keep_image_space } = this._config;
    const t = this._t();
    const frag = document.createDocumentFragment();
    if (articles.length === 0) {
      frag.appendChild(el('div', 'no-articles', t.no_articles));
      return frag;
    }

    const imgW = parseInt(image_width, 10) || 100;
    const imgH = parseInt(image_height, 10) || 70;
    const titleSize = parseInt(title_font_size, 10) || 15;
    const descSize = parseInt(desc_font_size, 10) || 14;
    const titleColor = sanitizeCssColor(article_title_color, 'var(--primary-text-color)');
    const descColor = sanitizeCssColor(desc_color, 'var(--secondary-text-color)');

    articles.forEach(a => {
      const link = sanitizeUrl(a.link);
      const title = feedTextToPlain(a.title);
      const desc = feedTextToPlain(a.summary);
      const pubDate = typeof a.published === 'string' ? a.published : '';

      const row = el('div', 'article-row');
      if (link) row.dataset.rssUrl = link;

      if (show_images) {
        const image = sanitizeUrl(a.image);
        if (image) {
          const img = el('img', 'article-image');
          img.src = image;
          img.alt = '';
          img.referrerPolicy = 'no-referrer';
          img.style.cssText = `width:${imgW}px;min-width:${imgW}px;height:${imgH}px;`;
          img.addEventListener('error', () => {
            if (keep_image_space) img.style.visibility = 'hidden';
            else img.style.display = 'none';
          });
          row.appendChild(img);
        } else if (keep_image_space) {
          const placeholder = document.createElement('div');
          placeholder.style.cssText = `width:${imgW}px;min-width:${imgW}px;height:${imgH}px;flex-shrink:0;`;
          row.appendChild(placeholder);
        }
      }

      const content = el('div', 'article-content');

      const titleEl = el('div', 'article-title', title);
      titleEl.style.fontSize = `${titleSize}px`;
      titleEl.style.color = (link && this._isVisited(link)) ? 'var(--disabled-text-color)' : titleColor;
      content.appendChild(titleEl);

      if (show_source || show_date) {
        const meta = el('div', 'article-meta');
        if (show_source) {
          const src = el('span', 'article-source', String(a._sourceName ?? ''));
          src.style.color = sanitizeCssColor(a._sourceColor, 'var(--primary-color)');
          meta.appendChild(src);
        }
        if (show_source && show_date) meta.appendChild(el('span', 'article-meta-separator', '·'));
        if (show_date && pubDate) meta.appendChild(el('span', '', this._formatDate(pubDate)));
        content.appendChild(meta);
      }

      if (show_description && desc) {
        const descEl = el('div', 'article-description', desc);
        descEl.style.fontSize = `${descSize}px`;
        descEl.style.color = descColor;
        content.appendChild(descEl);
      }

      row.appendChild(content);
      frag.appendChild(row);
    });
    return frag;
  }

  _handleLinkClick(url) {
    if (window.externalApp?.openExternalUrl) {
      window.externalApp.openExternalUrl(url);
      return;
    }
    const w = Math.min(window.screen.width, 520);
    const h = Math.min(window.screen.height, 900);
    const left = Math.round((window.screen.width - w) / 2);
    const top  = Math.round((window.screen.height - h) / 2);
    window.open(
      url, 'rss_article',
      `width=${w},height=${h},left=${left},top=${top},` +
      'toolbar=no,menubar=no,scrollbars=yes,resizable=yes,noopener,noreferrer'
    );
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        .card-body { padding: 12px 16px; }
        .card-title { font-size: 24px; font-weight: 400; margin-bottom: 8px; }
        .scroll-container { overflow-y: scroll; overflow-x: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; touch-action: pan-y; scrollbar-width: thin; scrollbar-color: var(--divider-color) transparent; }
        .no-articles { padding: 20px; color: var(--secondary-text-color); text-align: center; }
        .article-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--divider-color); cursor: pointer; -webkit-tap-highlight-color: transparent; }
        .article-content { flex: 1; min-width: 0; text-align: left; }
        .article-title { font-weight: 600; line-height: 1.4; white-space: normal; word-break: break-word; margin-bottom: 4px; }
        .article-meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 4px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
        .article-source { font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; }
        .article-meta-separator { opacity: 0.4; }
        .article-description { line-height: 1.4; white-space: normal; word-break: break-word; }
        .article-image { object-fit: cover; border-radius: 6px; flex-shrink: 0; }
        .diagnostics-panel { background: var(--error-color, #ffcccc); padding: 12px; margin-bottom: 8px; border-radius: 4px; }
        .diagnostics-panel ul { margin: 8px 0; padding-left: 20px; }
        .diagnostics-footer { font-size: 12px; margin-top: 6px; }
      </style>
      <ha-card>
        <div class="card-body">
          <div class="card-title"></div>
          <div class="diagnostics"></div>
          <div class="scroll-container"><div class="article-list"></div></div>
        </div>
      </ha-card>`;
    this._initialized = true;
  }

  _updateContent(articles, issues) {
    if (!this._initialized) this._render();
    const { title, card_height, card_title_color } = this._config;

    const titleEl = this.shadowRoot.querySelector('.card-title');
    if (titleEl) {
      titleEl.style.display = title ? '' : 'none';
      titleEl.style.color = sanitizeCssColor(card_title_color, 'var(--primary-text-color)');
      titleEl.textContent = title || '';
    }

    const scrollEl = this.shadowRoot.querySelector('.scroll-container');
    if (scrollEl) scrollEl.style.height = (parseInt(card_height, 10) || 400) + 'px';

    const diagEl = this.shadowRoot.querySelector('.diagnostics');
    const artEl = this.shadowRoot.querySelector('.article-list');
    if (diagEl) {
      const panel = issues.length > 0 ? this._renderDiagnostics(issues) : null;
      diagEl.replaceChildren(...(panel ? [panel] : []));
    }
    if (artEl) {
      artEl.replaceChildren(this._buildArticleNodes(articles));
      artEl.querySelectorAll('.article-row').forEach(row => {
        row.addEventListener('click', () => {
          const url = sanitizeUrl(row.dataset.rssUrl);
          if (!url) return;
          this._markVisited(url);
          const rowTitle = row.querySelector('.article-title');
          if (rowTitle) rowTitle.style.color = 'var(--disabled-text-color)';
          this._handleLinkClick(url);
        });
      });
    }
  }

  getCardSize() { return 5; }
}

// ─── Editor ───────────────────────────────────────────────────────────────────
class FeedparserRssNewsCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._rendered = false;
  }

  setConfig(config) {
    const prevSourceCount = (this._config.sources || []).length;
    this._config = { ...config };
    if (!this._rendered) {
      this._renderShell();
    } else {
      this._syncFields();
      const newSourceCount = (this._config.sources || []).length;
      if (newSourceCount !== prevSourceCount) {
        this._renderSources();
      }
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this._renderShell();
    else this._renderCategorySuggestions();
  }

  _getLang() {
    try {
      const haLang = this._hass?.locale?.language || this._hass?.language || 'en';
      return haLang.split('-')[0].toLowerCase();
    } catch { return 'en'; }
  }

  _t() { return getLocale(this._getLang()); }

  _renderShell() {
    this._rendered = true;
    const t = this._t();

    this.shadowRoot.innerHTML = `
      <style>
        .editor { padding: 12px; }
        .editor label { display: block; font-size: 12px; color: var(--secondary-text-color); margin: 10px 0 4px; }
        .editor input[type=text], .editor input[type=number] { width: 100%; padding: 4px 8px; box-sizing: border-box; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--card-background-color); color: var(--primary-text-color); }
        .source-row { display: flex; gap: 8px; align-items: center; margin-bottom: 6px; }
        .source-row input { width: auto !important; }
        .source-entity-input { flex: 1; min-width: 0; }
        .source-name-input { width: 80px; flex-shrink: 0; }
        .btn-add { margin-top: 6px; padding: 4px 12px; cursor: pointer; background: var(--primary-color); color: white; border: none; border-radius: 4px; }
        .btn-delete { padding: 2px 8px; cursor: pointer; border: 1px solid var(--divider-color); border-radius: 4px; background: transparent; color: var(--primary-text-color); }
        .btn-delete:disabled { opacity: 0.4; cursor: default; }
        .chip-list { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
        .chip-list:empty { display: none; }
        .chip { display: inline-flex; align-items: center; gap: 2px; padding: 2px 2px 2px 10px; border-radius: 14px; border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); font-size: 13px; }
        .chip-remove { border: none; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 6px; font-size: 11px; line-height: 1; border-radius: 50%; }
        .chip-remove:hover { color: var(--error-color); }
        .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--divider-color); }
        .toggle-row label { margin: 0; font-size: 13px; color: var(--primary-text-color); }
        .toggle { position: relative; width: 36px; height: 20px; flex-shrink: 0; }
        .toggle input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; inset: 0; background: var(--disabled-color, #ccc); border-radius: 20px; transition: .2s; }
        .slider:before { content: ''; position: absolute; height: 14px; width: 14px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: .2s; }
        input:checked + .slider { background: var(--primary-color); }
        input:checked + .slider:before { transform: translateX(16px); }
        .color-field { display: flex; gap: 8px; align-items: center; }
        .color-swatch-label { position: relative; width: 32px; height: 28px; flex-shrink: 0; cursor: pointer; border-radius: 4px; overflow: hidden; border: 1px solid var(--divider-color); }
        .color-swatch { position: absolute; inset: 0; pointer-events: none; }
        .color-picker-input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }
        .toggle-section { margin-top: 12px; }
        .color-hint { opacity: 0.6; }
      </style>
      <div class="editor">
        <label>${t.ed.card_title}</label>
        <input type="text" id="ed-title"/>

        <label>${t.ed.sources}</label>
        <div id="ed-sources"></div>
        <button class="btn-add" id="ed-add">${t.ed.add_source}</button>

        <label>${t.ed.exclude_categories}</label>
        <div class="chip-list" id="ed-exclude-chips"></div>
        <input type="text" id="ed-exclude-input" list="ed-exclude-suggestions" placeholder="${t.ed.exclude_placeholder}"/>
        <datalist id="ed-exclude-suggestions"></datalist>

        <label>${t.ed.max_articles}</label>
        <input type="number" id="ed-max" min="1" max="50"/>

        <label>${t.ed.card_height}</label>
        <input type="number" id="ed-height" min="100" max="2000"/>

        <label>${t.ed.img_width}</label>
        <input type="number" id="ed-imgw" min="50" max="300"/>

        <label>${t.ed.img_height}</label>
        <input type="number" id="ed-imgh" min="50" max="300"/>

        <label>${t.ed.title_size}</label>
        <input type="number" id="ed-titlesize" min="10" max="30"/>

        <label>${t.ed.desc_size}</label>
        <input type="number" id="ed-descsize" min="10" max="24"/>

        <label>${t.ed.card_title_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-card-title-color" class="color-swatch"></div>
            <input type="color" id="ed-card-title-color" class="color-picker-input"/>
          </label>
          <input type="text" id="ed-card-title-color-text" placeholder="e.g. #ff0000 or empty"/>
        </div>

        <label>${t.ed.article_title_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-article-title-color" class="color-swatch"></div>
            <input type="color" id="ed-article-title-color" class="color-picker-input"/>
          </label>
          <input type="text" id="ed-article-title-color-text" placeholder="e.g. #ff0000 or empty"/>
        </div>

        <label>${t.ed.desc_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-desc-color" class="color-swatch"></div>
            <input type="color" id="ed-desc-color" class="color-picker-input"/>
          </label>
          <input type="text" id="ed-desc-color-text" placeholder="e.g. #ff0000 or empty"/>
        </div>

        <div class="toggle-section">
          <div class="toggle-row">
            <label for="tog-source">${t.ed.show_source}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-source"/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-date">${t.ed.show_date}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-date"/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-desc">${t.ed.show_desc}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-desc"/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-images">${t.ed.show_images}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-images"/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row" id="row-image-space">
            <label for="tog-image-space">${t.ed.keep_image_space}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-image-space"/>
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>`;

    this._syncFields();
    this._renderSources();
    this._attachListeners();
    requestAnimationFrame(() => this._syncColorPreviews());
  }

  _syncColorPreviews() {
    const syncPreview = (previewId, configVal, cssVar) => {
      const preview = this.shadowRoot.querySelector(previewId);
      if (!preview) return;
      const color = configVal || (this.isConnected ? getComputedStyle(this).getPropertyValue(cssVar).trim() : '');
      if (color) {
        preview.style.backgroundImage = 'none';
        preview.style.background = color;
      } else {
        preview.style.background = 'transparent';
        preview.style.backgroundImage = 'repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%)';
        preview.style.backgroundSize = '6px 6px';
      }
    };
    const c = this._config || {};
    syncPreview('#prev-card-title-color',    c.card_title_color,    '--primary-text-color');
    syncPreview('#prev-article-title-color', c.article_title_color, '--primary-text-color');
    syncPreview('#prev-desc-color',          c.desc_color,          '--secondary-text-color');
  }

  _renderSources() {
    const container = this.shadowRoot.querySelector('#ed-sources');
    if (!container) return;
    const sources = this._config.sources || [];
    const rows = sources.map((s, idx) => {
      const row = el('div', 'source-row');

      const input = (type, className, field, value) => {
        const node = el('input', className);
        node.type = type;
        node.value = value;
        node.addEventListener('input', () => {
          const updated = [...(this._config.sources || [])];
          updated[idx] = { ...updated[idx], [field]: node.value };
          this._upd('sources', updated);
          if (field === 'color') preview.style.background = node.value;
        });
        return node;
      };

      const entityInput = input('text', 'source-entity-input', 'entity', s.entity || '');
      entityInput.placeholder = 'sensor.feedparser_news';
      const nameInput = input('text', 'source-name-input', 'name', s.name || '');
      nameInput.placeholder = 'Name';

      const swatch = el('label', 'color-swatch-label');
      const preview = el('div', 'color-swatch');
      preview.style.background = s.color || '#0077cc';
      swatch.append(preview, input('color', 'color-picker-input', 'color', s.color || '#0077cc'));

      // The card requires at least one source, so the last one cannot be removed.
      const deleteBtn = el('button', 'btn-delete', '✕');
      deleteBtn.disabled = sources.length <= 1;
      deleteBtn.addEventListener('click', () => {
        this._upd('sources', (this._config.sources || []).filter((_, i) => i !== idx));
        this._renderSources();
      });

      row.append(entityInput, nameInput, swatch, deleteBtn);
      return row;
    });
    container.replaceChildren(...rows);
  }

  _attachListeners() {
    const bind = (id, key, transform) => {
      const el = this.shadowRoot.querySelector(id);
      if (!el) return;
      el.addEventListener('input', e => this._upd(key, transform ? transform(e.target.value) : e.target.value));
    };
    const bindChk = (id, key) => {
      const el = this.shadowRoot.querySelector(id);
      if (!el) return;
      el.addEventListener('change', e => this._upd(key, e.target.checked));
    };

    bind('#ed-title',    'title');
    bind('#ed-max',      'max_articles',    v => parseInt(v) || 10);
    bind('#ed-height',   'card_height',     v => parseInt(v) || 400);
    bind('#ed-imgw',     'image_width',     v => parseInt(v) || 100);
    bind('#ed-imgh',     'image_height',    v => parseInt(v) || 70);
    bind('#ed-titlesize','title_font_size', v => parseInt(v) || 15);
    bind('#ed-descsize', 'desc_font_size',  v => parseInt(v) || 14);
    bind('#ed-card-title-color-text',    'card_title_color');
    bind('#ed-article-title-color-text', 'article_title_color');
    bind('#ed-desc-color-text',          'desc_color');

    const bindColorPicker = (pickerId, textId, previewId, key) => {
      const picker = this.shadowRoot.querySelector(pickerId);
      const text   = this.shadowRoot.querySelector(textId);
      const preview = this.shadowRoot.querySelector(previewId);
      if (!picker) return;
      picker.addEventListener('input', e => {
        const val = e.target.value;
        if (text) text.value = val;
        if (preview) preview.style.background = val;
        this._upd(key, val);
      });
      if (text) {
        text.addEventListener('input', e => {
          const val = e.target.value;
          if (val === '' || /^#[0-9a-fA-F]{6}$/.test(val)) picker.value = val || '#ffffff';
          this._syncColorPreviews();
        });
      }
    };
    bindColorPicker('#ed-card-title-color',    '#ed-card-title-color-text',    '#prev-card-title-color',    'card_title_color');
    bindColorPicker('#ed-article-title-color', '#ed-article-title-color-text', '#prev-article-title-color', 'article_title_color');
    bindColorPicker('#ed-desc-color',          '#ed-desc-color-text',          '#prev-desc-color',          'desc_color');

    bindChk('#tog-source', 'show_source');
    bindChk('#tog-date',   'show_date');
    bindChk('#tog-desc',   'show_description');
    bindChk('#tog-images', 'show_images');
    bindChk('#tog-image-space', 'keep_image_space');

    const togImages = this.shadowRoot.querySelector('#tog-images');
    const rowImageSpace = this.shadowRoot.querySelector('#row-image-space');
    if (togImages && rowImageSpace) {
      togImages.addEventListener('change', e => {
        rowImageSpace.style.display = e.target.checked ? '' : 'none';
      });
    }

    const categoryInput = this.shadowRoot.querySelector('#ed-exclude-input');
    if (categoryInput) {
      const commitCategory = () => {
        if (categoryInput.value.trim()) this._setCategories([...this._categories(), categoryInput.value]);
        categoryInput.value = '';
      };
      categoryInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          e.stopPropagation();
          commitCategory();
        } else if (e.key === 'Backspace' && !categoryInput.value) {
          this._setCategories(this._categories().slice(0, -1));
        }
      });
      // Picking a suggestion fires an input event without a typing inputType (Chrome: insertReplacementText, Firefox: none).
      categoryInput.addEventListener('input', e => {
        if (!e.inputType || e.inputType === 'insertReplacementText') commitCategory();
      });
      categoryInput.addEventListener('change', commitCategory);
    }

    const addBtn = this.shadowRoot.querySelector('#ed-add');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const sources = [...(this._config.sources || []), { entity: '', name: '', color: '#0077cc' }];
        this._upd('sources', sources);
        this._renderSources();
      });
    }
  }

  _syncFields() {
    const c = this._config;
    const set = (id, val) => { const el = this.shadowRoot.querySelector(id); if (el && document.activeElement !== el) el.value = val ?? ''; };
    const setChk = (id, val) => { const el = this.shadowRoot.querySelector(id); if (el) el.checked = !!val; };
    
    set('#ed-title',     c.title);
    this._renderCategories();
    set('#ed-max',       c.max_articles);
    set('#ed-height',    c.card_height);
    set('#ed-imgw',      c.image_width);
    set('#ed-imgh',      c.image_height);
    set('#ed-titlesize', c.title_font_size);
    set('#ed-descsize',  c.desc_font_size);
    set('#ed-card-title-color-text',    c.card_title_color);
    set('#ed-article-title-color-text', c.article_title_color);
    set('#ed-desc-color-text',          c.desc_color);
    set('#ed-card-title-color',    c.card_title_color || '#ffffff');
    set('#ed-article-title-color', c.article_title_color || '#ffffff');
    set('#ed-desc-color',          c.desc_color || '#ffffff');
    setChk('#tog-source', c.show_source !== false);
    setChk('#tog-date',   c.show_date !== false);
    setChk('#tog-desc',   c.show_description !== false);
    setChk('#tog-images', c.show_images !== false);
    setChk('#tog-image-space', c.keep_image_space === true);

    const rowImageSpace = this.shadowRoot.querySelector('#row-image-space');
    if (rowImageSpace) {
      rowImageSpace.style.display = c.show_images !== false ? '' : 'none';
    }
  }

  _categories() {
    return parseCategories(this._config.exclude_categories);
  }

  _setCategories(categories) {
    this._upd('exclude_categories', parseCategories(categories));
    this._renderCategories();
  }

  _renderCategories() {
    const container = this.shadowRoot.querySelector('#ed-exclude-chips');
    if (!container) return;
    const categories = this._categories();
    container.replaceChildren(...categories.map(category => {
      const chip = el('span', 'chip', category);
      const remove = el('button', 'chip-remove', '✕');
      remove.type = 'button';
      remove.addEventListener('click', () => this._setCategories(categories.filter(c => c !== category)));
      chip.appendChild(remove);
      return chip;
    }));
    this._renderCategorySuggestions();
  }

  /** Suggests tag terms found in the configured sources that are not excluded yet. */
  _renderCategorySuggestions() {
    const datalist = this.shadowRoot.querySelector('#ed-exclude-suggestions');
    if (!datalist || !this._hass) return;
    const excluded = new Set(this._categories().map(c => c.toLowerCase()));
    const terms = new Map();
    for (const source of this._config.sources || []) {
      const entries = this._hass.states[source.entity]?.attributes?.entries;
      if (!Array.isArray(entries)) continue;
      entries.forEach(a => (Array.isArray(a.tags) ? a.tags : []).forEach(tag => {
        const term = typeof tag?.term === 'string' ? tag.term.trim() : '';
        if (term && !excluded.has(term.toLowerCase())) terms.set(term.toLowerCase(), term);
      }));
    }
    const suggestions = [...terms.values()].sort((a, b) => a.localeCompare(b));
    const key = suggestions.join('\n');
    if (key === this._suggestionKey) return;
    this._suggestionKey = key;
    datalist.replaceChildren(...suggestions.map(term => {
      const option = document.createElement('option');
      option.value = term;
      return option;
    }));
  }

  _upd(key, value) {
    this._config = { ...this._config, [key]: value };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
  }
}

customElements.define('feedparser-rss-news-card', FeedparserRssNewsCard);
customElements.define('feedparser-rss-news-card-editor', FeedparserRssNewsCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'feedparser-rss-news-card',
  name: 'Feedparser RSS News Card',
  description: 'Scrollable RSS news card specifically mapped for the feedparser integration.',
  preview: true,
});
