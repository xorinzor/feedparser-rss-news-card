const { describe, it, before } = require('node:test');
const assert = require('node:assert/strict');
const { loadCard, plain } = require('./helpers');

let window;
before(() => { window = loadCard(); });

describe('parsePublishedDate', () => {
  const iso = ts => new Date(ts).toISOString();

  it('parses RFC 2822 dates with a year', () => {
    assert.equal(iso(window.parsePublishedDate('Sat, 18 Oct 2025 10:00:00 +0200')), '2025-10-18T08:00:00.000Z');
  });

  it('parses ISO 8601 dates', () => {
    assert.equal(iso(window.parsePublishedDate('2025-10-18T10:00:00+02:00')), '2025-10-18T08:00:00.000Z');
  });

  it('returns 0 for empty or unparseable input', () => {
    assert.equal(window.parsePublishedDate(''), 0);
    assert.equal(window.parsePublishedDate(undefined), 0);
    assert.equal(window.parsePublishedDate('not a date'), 0);
  });

  describe('feedparser date_format without a year', () => {
    // Pick a day safely in the past so the year-rollback rule does not apply.
    const past = new Date(Date.now() - 3 * 24 * 3600 * 1000);
    const month = past.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const day = past.getUTCDate();
    const expected = Date.UTC(past.getUTCFullYear(), past.getUTCMonth(), day, 22, 5);

    for (const format of [
      `Sat, ${month} ${day} 10:05 PM`,
      `Saturday ${month} ${day} 10:05 PM`,
      `${month} ${day} 10:05 PM`,
      `${month} ${day}, 10:05 PM`,
      `${month} ${day} 22:05`,
      `${day} ${month} 10:05 PM`,
      `${day} ${month} 22:05`,
    ]) {
      it(`parses "${format}" in the current year`, () => {
        assert.equal(window.parsePublishedDate(format), expected);
      });
    }

    it('handles 12 AM and 12 PM', () => {
      assert.equal(window.parsePublishedDate(`${month} ${day} 12:00 AM`), Date.UTC(past.getUTCFullYear(), past.getUTCMonth(), day, 0, 0));
      assert.equal(window.parsePublishedDate(`${month} ${day} 12:00 PM`), Date.UTC(past.getUTCFullYear(), past.getUTCMonth(), day, 12, 0));
    });

    it('moves dates more than a week in the future to last year', () => {
      const future = new Date(Date.now() + 30 * 24 * 3600 * 1000);
      const label = future.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
      const ts = window.parsePublishedDate(`${label} ${future.getUTCDate()} 10:00 AM`);
      assert.equal(new Date(ts).getUTCFullYear(), future.getUTCFullYear() - 1);
    });
  });
});

describe('sanitizeUrl', () => {
  it('keeps absolute http and https URLs', () => {
    assert.equal(window.sanitizeUrl('https://example.com/a?b=1'), 'https://example.com/a?b=1');
    assert.equal(window.sanitizeUrl('  http://example.com  '), 'http://example.com/');
  });

  it('rejects other protocols, relative URLs and non-strings', () => {
    assert.equal(window.sanitizeUrl('javascript:alert(1)'), '');
    assert.equal(window.sanitizeUrl('data:text/html,<script>alert(1)</script>'), '');
    assert.equal(window.sanitizeUrl('/relative/path'), '');
    assert.equal(window.sanitizeUrl(''), '');
    assert.equal(window.sanitizeUrl(null), '');
    assert.equal(window.sanitizeUrl({ href: 'https://example.com' }), '');
  });
});

describe('feedTextToPlain', () => {
  it('returns plain text unchanged', () => {
    assert.equal(window.feedTextToPlain('Plain title'), 'Plain title');
  });

  it('strips tags and decodes entities', () => {
    assert.equal(window.feedTextToPlain('<p>Hello <b>world</b> &amp; more</p>'), 'Hello world & more');
  });

  it('drops script and style content', () => {
    assert.equal(window.feedTextToPlain('a<script>alert(1)</script><style>p{}</style>b'), 'ab');
  });

  it('returns an empty string for null and undefined', () => {
    assert.equal(window.feedTextToPlain(null), '');
    assert.equal(window.feedTextToPlain(undefined), '');
  });
});

describe('sanitizeCssColor', () => {
  it('accepts hex, named, rgb/hsl and CSS variables', () => {
    for (const color of ['#fff', '#ff0000', '#ff000080', 'red', 'rgb(1, 2, 3)', 'hsla(10, 50%, 50%, 0.5)', 'var(--accent-color)']) {
      assert.equal(window.sanitizeCssColor(color, 'fallback'), color);
    }
  });

  it('falls back for anything that could inject CSS', () => {
    for (const color of ['red; background: url(x)', 'url(https://x)', 'expression(alert(1))', '', null]) {
      assert.equal(window.sanitizeCssColor(color, 'fallback'), 'fallback');
    }
  });
});

describe('parseCategories', () => {
  it('splits a comma-separated string', () => {
    assert.deepEqual(plain(window.parseCategories(' politics, sports ,,')), ['politics', 'sports']);
  });

  it('accepts a list, including items with commas', () => {
    assert.deepEqual(plain(window.parseCategories(['a', 'b, c'])), ['a', 'b', 'c']);
  });

  it('drops duplicates regardless of case and keeps the first spelling', () => {
    assert.deepEqual(plain(window.parseCategories(['Sport', 'sport', 'SPORT'])), ['Sport']);
  });

  it('returns an empty list for empty values', () => {
    for (const value of [undefined, null, '', []]) {
      assert.deepEqual(plain(window.parseCategories(value)), []);
    }
  });
});

describe('locales', () => {
  const keyPaths = (obj, prefix = '') => Object.entries(obj).flatMap(([key, value]) =>
    value && typeof value === 'object' ? keyPaths(value, `${prefix}${key}.`) : [`${prefix}${key}`]).sort();

  it('every locale has the same keys as English', () => {
    const locales = plain(window.RSS_LOCALES);
    const english = keyPaths(locales.en);
    for (const [lang, strings] of Object.entries(locales)) {
      assert.deepEqual(keyPaths(strings), english, `locale "${lang}" is out of sync with "en"`);
    }
  });

  it('falls back to English for unknown languages', () => {
    assert.equal(window.getLocale('xx').no_articles, window.getLocale('en').no_articles);
  });
});
