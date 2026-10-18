const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { loadCard, makeHass, feedState, mountEditor } = require('./helpers');

const feedStates = {
  'sensor.nu': feedState([{ tags: [{ term: 'Sport' }, { term: 'News' }] }, { tags: [{ term: 'sport' }] }], { friendlyName: 'NU.nl' }),
  'sensor.tech': feedState([{ tags: [{ term: 'Tech' }] }], { friendlyName: 'Tech News' }),
  'sensor.registered': { state: 'unknown', attributes: { friendly_name: 'Registered Feed' } },
  'sensor.temperature': { state: '21', attributes: { friendly_name: 'Temperature' } },
  'light.lamp': { state: 'on', attributes: { friendly_name: 'Lamp', entries: [] } },
};
const entities = { 'sensor.registered': { platform: 'feedparser' }, 'sensor.temperature': { platform: 'mqtt' } };
const hass = (extra = {}, language = 'en') => makeHass({ states: { ...feedStates, ...extra }, entities, language });

let window;
beforeEach(() => { window = loadCard(); });

const q = (editor, selector) => editor.shadowRoot.querySelector(selector);
const qa = (editor, selector) => [...editor.shadowRoot.querySelectorAll(selector)];
const type = (input, value) => {
  input.value = value;
  input.dispatchEvent(new input.ownerDocument.defaultView.Event('input'));
};
const toggle = (checkbox, checked) => {
  checkbox.checked = checked;
  checkbox.dispatchEvent(new checkbox.ownerDocument.defaultView.Event('change'));
};

describe('fields', () => {
  it('loads config values into the form', () => {
    const { editor } = mountEditor(window, {
      sources: [{ entity: 'sensor.nu' }], title: 'News', max_articles: 15, card_height: 300,
      image_width: 90, image_height: 60, title_font_size: 16, desc_font_size: 12,
      card_title_color: '#ff0000', show_source: false, keep_image_space: true,
    }, hass());
    assert.equal(q(editor, '#ed-title').value, 'News');
    assert.equal(q(editor, '#ed-max').value, '15');
    assert.equal(q(editor, '#ed-height').value, '300');
    assert.equal(q(editor, '#ed-imgw').value, '90');
    assert.equal(q(editor, '#ed-imgh').value, '60');
    assert.equal(q(editor, '#ed-titlesize').value, '16');
    assert.equal(q(editor, '#ed-descsize').value, '12');
    assert.equal(q(editor, '#ed-card-title-color-text').value, '#ff0000');
    assert.equal(q(editor, '#ed-card-title-color').value, '#ff0000');
    assert.equal(q(editor, '#tog-source').checked, false);
    assert.equal(q(editor, '#tog-date').checked, true);
    assert.equal(q(editor, '#tog-image-space').checked, true);
  });

  it('keeps quotes and markup in values as plain text', () => {
    const title = 'Say "hi" <img src=x onerror="window.pwned=1">';
    const { editor } = mountEditor(window, { title, sources: [{ entity: 'sensor.nu', name: '"><b>x</b>' }] }, hass());
    assert.equal(q(editor, '#ed-title').value, title);
    assert.equal(q(editor, '.source-name-input').value, '"><b>x</b>');
    assert.equal(q(editor, '.editor img, .editor b'), null);
    assert.equal(window.pwned, undefined);
  });

  it('updates the config while typing', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    type(q(editor, '#ed-title'), 'Headlines');
    assert.equal(lastConfig().title, 'Headlines');
  });

  it('stores numbers as numbers and falls back to defaults for invalid input', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    type(q(editor, '#ed-max'), '25');
    assert.equal(lastConfig().max_articles, 25);
    for (const [id, key, fallback] of [['#ed-max', 'max_articles', 10], ['#ed-height', 'card_height', 400], ['#ed-imgw', 'image_width', 100],
      ['#ed-imgh', 'image_height', 70], ['#ed-titlesize', 'title_font_size', 15], ['#ed-descsize', 'desc_font_size', 14]]) {
      type(q(editor, id), '');
      assert.equal(lastConfig()[key], fallback, key);
    }
  });

  it('only shows the keep-image-space toggle while images are on', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }], show_images: false }, hass());
    assert.equal(q(editor, '#row-image-space').style.display, 'none');
    toggle(q(editor, '#tog-images'), true);
    assert.equal(lastConfig().show_images, true);
    assert.equal(q(editor, '#row-image-space').style.display, '');
  });

  it('syncs the color picker, text field and config', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    type(q(editor, '#ed-desc-color'), '#00ff00');
    assert.equal(q(editor, '#ed-desc-color-text').value, '#00ff00');
    assert.equal(lastConfig().desc_color, '#00ff00');

    type(q(editor, '#ed-desc-color-text'), '#0000ff');
    assert.equal(q(editor, '#ed-desc-color').value, '#0000ff');
    assert.equal(lastConfig().desc_color, '#0000ff');
    assert.match(q(editor, '#prev-desc-color').style.background, /rgb\(0, 0, 255\)|#0000ff/);

    type(q(editor, '#ed-desc-color-text'), 'var(--accent-color)');
    assert.equal(lastConfig().desc_color, 'var(--accent-color)');
  });

  it('uses the Home Assistant language', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass({}, 'de'));
    assert.equal(q(editor, '#ed-add').textContent, '+ Quelle hinzufügen');
  });
});

describe('sources', () => {
  const options = select => [...select.options].map(o => o.textContent);

  it('lists only feed sensors, sorted by name', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    assert.deepEqual(options(q(editor, '.source-entity-select')), [
      'NU.nl (sensor.nu)', 'Registered Feed (sensor.registered)', 'Tech News (sensor.tech)',
    ]);
    assert.equal(q(editor, '.source-entity-select').value, 'sensor.nu');
  });

  it('keeps a configured entity that no longer exists', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.gone' }] }, hass());
    const select = q(editor, '.source-entity-select');
    assert.equal(select.value, 'sensor.gone');
    assert.equal(options(select)[0], 'sensor.gone (not found)');
  });

  it('fills the options once hass arrives after the config', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] });
    assert.deepEqual(options(q(editor, '.source-entity-select')), ['sensor.nu (not found)']);
    editor.hass = hass();
    assert.equal(options(q(editor, '.source-entity-select')).length, 3);
    assert.equal(q(editor, '.source-entity-select').value, 'sensor.nu');
  });

  it('adds a source with a placeholder selected', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    q(editor, '#ed-add').click();
    assert.equal(lastConfig().sources.length, 2);
    const select = qa(editor, '.source-entity-select')[1];
    assert.equal(select.value, '');
    assert.equal(select.options[0].textContent, 'Select a feed…');
    assert.equal(select.options[0].disabled, true);
  });

  it('fills an empty name with the friendly name when a feed is picked', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: '', name: '' }] }, hass());
    const select = q(editor, '.source-entity-select');
    select.value = 'sensor.tech';
    select.dispatchEvent(new window.Event('change'));
    assert.deepEqual(lastConfig().sources[0], { entity: 'sensor.tech', name: 'Tech News' });
    assert.equal(q(editor, '.source-name-input').value, 'Tech News');
    assert.ok(!options(select).includes('Select a feed…'));
  });

  it('keeps a custom name when another feed is picked', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.gone', name: 'Mine' }] }, hass());
    const select = q(editor, '.source-entity-select');
    select.value = 'sensor.nu';
    select.dispatchEvent(new window.Event('change'));
    assert.deepEqual(lastConfig().sources[0], { entity: 'sensor.nu', name: 'Mine' });
    assert.ok(!options(select).some(o => o.includes('not found')));
  });

  it('updates name and color', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu', color: '#000000' }] }, hass());
    type(q(editor, '.source-name-input'), 'NU');
    type(q(editor, '.source-row .color-picker-input'), '#123456');
    assert.deepEqual(lastConfig().sources[0], { entity: 'sensor.nu', name: 'NU', color: '#123456' });
    assert.match(q(editor, '.source-row .color-swatch').style.background, /rgb\(18, 52, 86\)|#123456/);
  });

  it('refreshes the list when a new feed appears, without rebuilding the rows', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    const nameInput = q(editor, '.source-name-input');
    editor.hass = hass({ 'sensor.bbc': feedState([], { friendlyName: 'BBC' }) });
    assert.equal(options(q(editor, '.source-entity-select'))[0], 'BBC (sensor.bbc)');
    assert.equal(q(editor, '.source-name-input'), nameInput);
  });

  it('cannot delete the last source', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    assert.equal(q(editor, '.btn-delete').disabled, true);
  });

  it('deletes a source', () => {
    const { editor, lastConfig } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }, { entity: 'sensor.tech' }] }, hass());
    const buttons = qa(editor, '.btn-delete');
    assert.deepEqual(buttons.map(b => b.disabled), [false, false]);
    buttons[0].click();
    assert.deepEqual(lastConfig().sources, [{ entity: 'sensor.tech' }]);
    assert.equal(qa(editor, '.source-row').length, 1);
    assert.equal(q(editor, '.btn-delete').disabled, true);
  });
});

describe('exclude categories', () => {
  const chips = editor => qa(editor, '.chip').map(chip => chip.firstChild.textContent);
  const suggestions = editor => qa(editor, '#ed-exclude-suggestions option').map(o => o.value);
  const key = (input, name) => input.dispatchEvent(new input.ownerDocument.defaultView.KeyboardEvent('keydown', { key: name, cancelable: true }));
  const setup = (exclude_categories = []) =>
    mountEditor(window, { sources: [{ entity: 'sensor.nu' }, { entity: 'sensor.tech' }], exclude_categories }, hass());

  it('shows a comma-separated string as chips', () => {
    const { editor } = setup('politics, Sport');
    assert.deepEqual(chips(editor), ['politics', 'Sport']);
  });

  it('adds a category on Enter or comma and stores a list', () => {
    const { editor, lastConfig } = setup('politics');
    const input = q(editor, '#ed-exclude-input');
    input.value = 'weather';
    key(input, 'Enter');
    input.value = 'traffic';
    key(input, ',');
    assert.deepEqual(chips(editor), ['politics', 'weather', 'traffic']);
    assert.deepEqual(lastConfig().exclude_categories, ['politics', 'weather', 'traffic']);
    assert.equal(input.value, '');
  });

  it('ignores blank input and duplicates in any case', () => {
    const { editor, changes } = setup(['weather']);
    const input = q(editor, '#ed-exclude-input');
    input.value = '   ';
    key(input, 'Enter');
    input.value = 'WEATHER';
    key(input, 'Enter');
    assert.deepEqual(chips(editor), ['weather']);
    assert.ok(changes.every(c => c.exclude_categories.length === 1));
  });

  it('adds a category when the field loses focus', () => {
    const { editor } = setup();
    const input = q(editor, '#ed-exclude-input');
    input.value = 'weather';
    input.dispatchEvent(new window.Event('change'));
    assert.deepEqual(chips(editor), ['weather']);
  });

  it('adds a picked suggestion immediately, but not typed text', () => {
    const { editor } = setup();
    const input = q(editor, '#ed-exclude-input');
    input.value = 'Te';
    input.dispatchEvent(new window.InputEvent('input', { inputType: 'insertText' }));
    assert.deepEqual(chips(editor), []);
    input.value = 'Tech';
    input.dispatchEvent(new window.InputEvent('input', { inputType: 'insertReplacementText' }));
    assert.deepEqual(chips(editor), ['Tech']);
  });

  it('removes a chip with its button', () => {
    const { editor, lastConfig } = setup(['a', 'b', 'c']);
    qa(editor, '.chip-remove')[1].click();
    assert.deepEqual(chips(editor), ['a', 'c']);
    assert.deepEqual(lastConfig().exclude_categories, ['a', 'c']);
  });

  it('removes the last chip on Backspace in an empty field only', () => {
    const { editor } = setup(['a', 'b']);
    const input = q(editor, '#ed-exclude-input');
    input.value = 'x';
    key(input, 'Backspace');
    assert.deepEqual(chips(editor), ['a', 'b']);
    input.value = '';
    key(input, 'Backspace');
    assert.deepEqual(chips(editor), ['a']);
  });

  it('suggests tags from the configured feeds that are not excluded yet', () => {
    const { editor } = setup(['news']);
    assert.deepEqual(suggestions(editor), ['Sport', 'Tech']);
    qa(editor, '.chip-remove')[0].click();
    assert.deepEqual(suggestions(editor), ['News', 'Sport', 'Tech']);
  });
});

describe('feedparser integration warning', () => {
  const warning = editor => q(editor, '#ed-integration-warning .integration-warning');
  const withComponents = components => makeHass({ states: feedStates, entities, components });

  it('is hidden when feedparser is loaded', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, hass());
    assert.equal(warning(editor), null);
  });

  it('shows when feedparser is not loaded, with a link to the integration', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, withComponents(['sensor']));
    assert.match(warning(editor).textContent, /feedparser integration is not installed/);
    assert.equal(warning(editor).querySelector('a').href, 'https://github.com/custom-components/feedparser');
  });

  it('updates when hass changes', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] });
    assert.equal(warning(editor), null);
    editor.hass = withComponents([]);
    assert.ok(warning(editor));
    editor.hass = hass();
    assert.equal(warning(editor), null);
  });

  it('does not warn when Home Assistant does not expose its components', () => {
    const { editor } = mountEditor(window, { sources: [{ entity: 'sensor.nu' }] }, withComponents(null));
    assert.equal(warning(editor), null);
  });
});
