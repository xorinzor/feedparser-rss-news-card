const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { loadCard, makeHass, feedState, mountCard, articleTitles, diagnostics } = require('./helpers');

const nuEntries = [
  { title: 'Older NU', link: 'https://nu.example/1', summary: 'one', published: 'Fri, 17 Oct 2025 08:00:00 +0000', tags: [{ term: 'Voetbal' }] },
  { title: 'Newest NU', link: 'https://nu.example/2', summary: 'two', published: 'Sat, 18 Oct 2025 12:00:00 +0000', tags: [{ term: 'Politiek' }] },
];
const techEntries = [
  { title: 'Middle Tech', link: 'https://tech.example/1', summary: 'three', published: 'Sat, 18 Oct 2025 09:00:00 +0000', tags: [{ term: 'sport' }] },
];

const sources = [{ entity: 'sensor.nu', name: 'NU.nl', color: '#e63946' }, { entity: 'sensor.tech' }];

function hassWith(states = {}, options = {}) {
  return makeHass({ states: { 'sensor.nu': feedState(nuEntries), 'sensor.tech': feedState(techEntries), ...states }, ...options });
}

let window;
beforeEach(() => { window = loadCard(); });

describe('config', () => {
  it('requires at least one source', () => {
    const card = window.document.createElement('feedparser-rss-news-card');
    for (const config of [{}, { sources: [] }, { sources: 'sensor.nu' }]) {
      assert.throws(() => card.setConfig(config), /At least one source/);
    }
  });

  it('accepts the stub config', () => {
    const Card = window.customElements.get('feedparser-rss-news-card');
    assert.doesNotThrow(() => mountCard(window, Card.getStubConfig(), makeHass()));
  });

  it('registers the card for the card picker', () => {
    assert.ok(window.customCards.some(c => c.type === 'feedparser-rss-news-card'));
    assert.equal(window.customElements.get('feedparser-rss-news-card').getConfigElement().localName, 'feedparser-rss-news-card-editor');
  });

  it('applies title and card height', () => {
    const card = mountCard(window, { sources, title: 'News', card_height: 250 }, hassWith());
    assert.equal(card.shadowRoot.querySelector('.card-title').textContent, 'News');
    assert.equal(card.shadowRoot.querySelector('.scroll-container').style.height, '250px');
  });

  it('hides the title when empty', () => {
    const card = mountCard(window, { sources }, hassWith());
    assert.equal(card.shadowRoot.querySelector('.card-title').style.display, 'none');
  });
});

describe('articles', () => {
  it('merges all sources, newest first', () => {
    const card = mountCard(window, { sources }, hassWith());
    assert.deepEqual(articleTitles(card), ['Newest NU', 'Middle Tech', 'Older NU']);
  });

  it('labels articles with the source name, or the entity ID without one', () => {
    const card = mountCard(window, { sources }, hassWith());
    const labels = [...card.shadowRoot.querySelectorAll('.article-source')].map(n => n.textContent);
    assert.deepEqual(labels, ['NU.nl', 'sensor.tech', 'NU.nl']);
  });

  it('limits the list to max_articles', () => {
    const card = mountCard(window, { sources, max_articles: 2 }, hassWith());
    assert.deepEqual(articleTitles(card), ['Newest NU', 'Middle Tech']);
  });

  it('shows a message when there are no articles', () => {
    const card = mountCard(window, { sources: [{ entity: 'sensor.empty' }] }, makeHass({ states: { 'sensor.empty': feedState([]) } }));
    assert.equal(card.shadowRoot.querySelector('.no-articles').textContent, 'No articles to display.');
  });

  for (const [label, exclude] of [['comma-separated string', 'voetbal, SPORT'], ['list', ['Voetbal', 'sport']]]) {
    it(`excludes categories given as a ${label}, ignoring case`, () => {
      const card = mountCard(window, { sources, exclude_categories: exclude }, hassWith());
      assert.deepEqual(articleTitles(card), ['Newest NU']);
    });
  }

  it('applies config changes without waiting for new sensor data', () => {
    const card = mountCard(window, { sources }, hassWith());
    card.setConfig({ sources, exclude_categories: ['politiek'], max_articles: 1 });
    assert.deepEqual(articleTitles(card), ['Middle Tech']);
  });

  it('skips re-rendering when sensor state is unchanged', () => {
    const hass = hassWith();
    const card = mountCard(window, { sources }, hass);
    const firstRow = card.shadowRoot.querySelector('.article-row');
    card.hass = { ...hass };
    assert.equal(card.shadowRoot.querySelector('.article-row'), firstRow);
  });

  it('re-renders when a sensor updates', () => {
    const card = mountCard(window, { sources }, hassWith());
    const updated = [...techEntries, { title: 'Breaking', published: 'Sun, 19 Oct 2025 07:00:00 +0000' }];
    card.hass = hassWith({ 'sensor.tech': feedState(updated, { lastUpdated: '2' }) });
    assert.equal(articleTitles(card)[0], 'Breaking');
  });
});

describe('display options', () => {
  const entry = { title: 'T', link: 'https://x.example/', summary: 'Summary', published: 'Sat, 18 Oct 2025 12:00:00 +0000' };
  const render = (options, entries = [entry]) =>
    mountCard(window, { sources: [{ entity: 'sensor.a', name: 'A' }], ...options }, makeHass({ states: { 'sensor.a': feedState(entries) } }));
  const q = (card, selector) => card.shadowRoot.querySelector(selector);

  it('shows source, date and description by default', () => {
    const card = render({});
    assert.equal(q(card, '.article-source').textContent, 'A');
    assert.match(q(card, '.article-meta').textContent, /2025/);
    assert.equal(q(card, '.article-description').textContent, 'Summary');
  });

  it('hides source, date and description when turned off', () => {
    const card = render({ show_source: false, show_date: false, show_description: false });
    assert.equal(q(card, '.article-meta'), null);
    assert.equal(q(card, '.article-description'), null);
  });

  it('applies font sizes', () => {
    const card = render({ title_font_size: 20, desc_font_size: 11 });
    assert.equal(q(card, '.article-title').style.fontSize, '20px');
    assert.equal(q(card, '.article-description').style.fontSize, '11px');
  });

  it('renders images at the configured size', () => {
    const card = render({ image_width: 120, image_height: 80 }, [{ ...entry, image: 'https://x.example/a.jpg' }]);
    const img = q(card, 'img.article-image');
    assert.equal(img.src, 'https://x.example/a.jpg');
    assert.equal(img.style.width, '120px');
    assert.equal(img.style.height, '80px');
  });

  it('hides images when show_images is off', () => {
    const card = render({ show_images: false }, [{ ...entry, image: 'https://x.example/a.jpg' }]);
    assert.equal(q(card, 'img'), null);
  });

  it('reserves image space only when keep_image_space is on', () => {
    assert.equal(q(render({}), '.article-row').children.length, 1);
    assert.equal(q(render({ keep_image_space: true }), '.article-row').children.length, 2);
  });

  it('keeps the space of a broken image when keep_image_space is on', () => {
    const withImage = [{ ...entry, image: 'https://x.example/broken.jpg' }];
    const kept = q(render({ keep_image_space: true }, withImage), 'img');
    kept.dispatchEvent(new window.Event('error'));
    assert.equal(kept.style.visibility, 'hidden');

    const dropped = q(render({}, withImage), 'img');
    dropped.dispatchEvent(new window.Event('error'));
    assert.equal(dropped.style.display, 'none');
  });

  it('shows an unparseable date as-is', () => {
    const card = render({}, [{ ...entry, published: 'sometime yesterday' }]);
    assert.match(q(card, '.article-meta').textContent, /sometime yesterday/);
  });

  for (const [format, pattern] of [['12', /PM/], ['24', /12:00/]]) {
    it(`formats dates using the ${format}-hour clock setting`, () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.a' }] },
        makeHass({ states: { 'sensor.a': feedState([entry]) }, timeFormat: format }));
      const date = q(card, '.article-meta').textContent;
      assert.match(date, pattern);
      if (format === '24') assert.doesNotMatch(date, /AM|PM/);
    });
  }
});

describe('feed content safety', () => {
  const render = entries => mountCard(window, { sources: [{ entity: 'sensor.a' }] }, makeHass({ states: { 'sensor.a': feedState(entries) } }));

  it('renders HTML in titles and summaries as text', () => {
    const card = render([{ title: '<img src=x onerror="window.pwned=1">Hello', summary: '<script>window.pwned=1</script><b>Bold</b>' }]);
    assert.equal(card.shadowRoot.querySelector('.article-title').textContent, 'Hello');
    assert.equal(card.shadowRoot.querySelector('.article-description').textContent, 'Bold');
    assert.equal(card.shadowRoot.querySelector('img, script, b'), null);
    assert.equal(window.pwned, undefined);
  });

  it('ignores non-http links and images', () => {
    const card = render([{ title: 'Bad', link: 'javascript:alert(1)', image: 'javascript:alert(1)' }]);
    const row = card.shadowRoot.querySelector('.article-row');
    assert.equal(row.dataset.rssUrl, undefined);
    assert.equal(card.shadowRoot.querySelector('img'), null);
    row.click();
    assert.equal(window.openCalls.length, 0);
  });
});

describe('opening articles', () => {
  const entries = [{ title: 'Story', link: 'https://news.example/story' }];
  const render = () => mountCard(window, { sources: [{ entity: 'sensor.a' }] }, makeHass({ states: { 'sensor.a': feedState(entries) } }));

  it('opens the article in a popup without access to the dashboard tab', () => {
    render().shadowRoot.querySelector('.article-row').click();
    assert.equal(window.openCalls.length, 1);
    const [url, target, features] = window.openCalls[0];
    assert.equal(url, 'https://news.example/story');
    assert.equal(target, 'rss_article');
    assert.match(features, /noopener/);
    assert.match(features, /noreferrer/);
  });

  it('uses the Companion app browser when available', () => {
    const opened = [];
    window.externalApp = { openExternalUrl: url => opened.push(url) };
    render().shadowRoot.querySelector('.article-row').click();
    assert.deepEqual(opened, ['https://news.example/story']);
    assert.equal(window.openCalls.length, 0);
  });

  it('greys out visited articles, also after re-rendering', () => {
    const card = render();
    card.shadowRoot.querySelector('.article-row').click();
    assert.equal(card.shadowRoot.querySelector('.article-title').style.color, 'var(--disabled-text-color)');
    card.setConfig({ sources: [{ entity: 'sensor.a' }], title: 'Re-rendered' });
    assert.equal(card.shadowRoot.querySelector('.article-title').style.color, 'var(--disabled-text-color)');
  });
});

describe('diagnostics', () => {
  it('shows no panel when every source is healthy', () => {
    const card = mountCard(window, { sources }, hassWith());
    assert.equal(card.shadowRoot.querySelector('.diagnostics-panel'), null);
  });

  it('reports every kind of source problem', () => {
    const card = mountCard(window, {
      sources: [
        { entity: '', name: 'Blank' },
        { entity: 'sensor.missing' },
        { entity: 'sensor.down', name: 'Down' },
        { entity: 'sensor.plain' },
        { entity: 'sensor.empty' },
      ],
    }, makeHass({ states: {
      'sensor.down': { state: 'unavailable', attributes: {} },
      'sensor.plain': { state: '3', attributes: {} },
      'sensor.empty': feedState([]),
    } }));
    assert.deepEqual(diagnostics(card), [
      'Blank: No feed selected. Pick one in the card editor.',
      'sensor.missing: Entity does not exist in Home Assistant.',
      'Down (sensor.down): Entity is unavailable or in unknown state.',
      'sensor.plain: Entity has no "entries" attribute (check feedparser configuration).',
      'sensor.empty: Entity is reachable but contains no articles yet.',
    ]);
    assert.match(card.shadowRoot.querySelector('.diagnostics-panel').textContent, /inclusions:.*tags/);
  });

  it('names an unnamed source without a feed by its position', () => {
    const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }, { entity: '', name: '' }] }, hassWith());
    assert.deepEqual(diagnostics(card), ['Source 2: No feed selected. Pick one in the card editor.']);
  });

  it('renders when the only source has no feed yet', () => {
    const card = mountCard(window, { sources: [{ entity: '' }] }, makeHass());
    assert.equal(diagnostics(card).length, 1);
    assert.ok(card.shadowRoot.querySelector('.no-articles'));
  });

  it('translates the label of a source without a feed', () => {
    const card = mountCard(window, { sources: [{ entity: '' }] }, makeHass({ language: 'de' }));
    assert.deepEqual(diagnostics(card), ['Quelle 1: Kein Feed ausgewählt. Wähle einen im Karteneditor aus.']);
  });

  it('uses the Home Assistant language', () => {
    const card = mountCard(window, { sources: [{ entity: 'sensor.missing' }] }, makeHass({ language: 'de' }));
    assert.match(card.shadowRoot.querySelector('.diagnostics-panel strong').textContent, /Sensor/);
    assert.deepEqual(diagnostics(card), ['sensor.missing: Entität existiert nicht in Home Assistant.']);
  });

  it('renders source names as text', () => {
    const card = mountCard(window, { sources: [{ entity: 'sensor.missing', name: '<img src=x>' }] }, makeHass());
    assert.equal(card.shadowRoot.querySelector('.diagnostics li img'), null);
    assert.match(diagnostics(card)[0], /<img src=x>/);
  });

  it('clears the panel once the problem is fixed', () => {
    const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] }, makeHass());
    assert.equal(diagnostics(card).length, 1);
    card.hass = hassWith();
    assert.equal(card.shadowRoot.querySelector('.diagnostics-panel'), null);
  });

  describe('feedparser integration', () => {
    const missing = makeHass({ states: { 'sensor.nu': feedState(nuEntries) }, components: ['sensor', 'mqtt'] });

    it('warns when feedparser is not loaded, with a link to the integration', () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] }, missing);
      assert.match(diagnostics(card)[0], /^The feedparser integration is not installed/);
      const link = card.shadowRoot.querySelector('.diagnostics li a');
      assert.equal(link.href, 'https://github.com/custom-components/feedparser');
      assert.equal(link.target, '_blank');
      assert.equal(link.rel, 'noopener noreferrer');
    });

    it('lists the integration warning before source problems', () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.missing' }] }, makeHass({ components: [] }));
      assert.equal(diagnostics(card).length, 2);
      assert.match(diagnostics(card)[0], /^The feedparser integration/);
      assert.match(diagnostics(card)[1], /^sensor.missing/);
    });

    for (const components of [['feedparser'], ['feedparser.sensor'], ['sensor.feedparser']]) {
      it(`detects feedparser from ${JSON.stringify(components)}`, () => {
        const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] },
          makeHass({ states: { 'sensor.nu': feedState(nuEntries) }, components }));
        assert.equal(card.shadowRoot.querySelector('.diagnostics-panel'), null);
      });
    }

    it('does not match other integrations with a similar name', () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] },
        makeHass({ states: { 'sensor.nu': feedState(nuEntries) }, components: ['feedparser_extra', 'myfeedparser.sensor'] }));
      assert.match(diagnostics(card)[0], /^The feedparser integration/);
    });

    it('does not warn when Home Assistant does not expose its components', () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] },
        makeHass({ states: { 'sensor.nu': feedState(nuEntries) }, components: null }));
      assert.equal(card.shadowRoot.querySelector('.diagnostics-panel'), null);
    });

    it('translates the warning', () => {
      const card = mountCard(window, { sources: [{ entity: 'sensor.nu' }] }, makeHass({ components: [], language: 'de' }));
      assert.match(diagnostics(card)[0], /Die feedparser-Integration ist nicht installiert/);
    });
  });
});
