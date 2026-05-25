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
    cmd_hint: 'Ensure feedparser is configured correctly:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:        'Card title',
      card_title_color:  'Card title color',
      article_title_color: 'Article title color',
      desc_color:        'Description color',
      sources:           'Sources (entity · name · color)',
      add_source:        '+ Add source',
      exclude_categories: 'Exclude categories (comma-separated)',
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
    cmd_hint: 'Feedparser beállítás szükséges:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:          'Kártya cime',
      card_title_color:    'Kártya cím színe',
      article_title_color: 'Cikkek cím színe',
      desc_color:          'Leírás színe',
      sources:             'Források (entitás · név · szín)',
      add_source:          '+ Forrás hozzáadása',
      exclude_categories:  'Kizárt kategóriák (vesszővel elválasztva)',
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
    cmd_hint: 'feedparser Konfiguration erforderlich:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:          'Kartentitel',
      card_title_color:    'Farbe Kartentitel',
      article_title_color: 'Farbe Artikeltitel',
      desc_color:          'Farbe Beschreibung',
      sources:             'Quellen (Entität · Name · Farbe)',
      add_source:          '+ Quelle hinzufügen',
      exclude_categories:  'Kategorien ausschließen (kommagetrennt)',
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

  const cleaned = str.replace(/^[A-Za-z]+,?\s+/, '').trim();
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

// ─── Card ─────────────────────────────────────────────────────────────────────
class FeedparserRssNewsCard extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._articles = [];
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
      exclude_categories: '',
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
    this._render();
    if (this._hass) {
      this._updateContent(this._articles || [], JSON.parse(this._lastIssuesJson || '[]'));
    }
  }

  set hass(hass) {
    this._hass = hass;
    const stateKey = this._config.sources.map(s => {
      const st = hass.states[s.entity];
      return st ? (s.entity + ':' + st.state + ':' + st.last_updated) : s.entity;
    }).join('|');
    if (stateKey === this._lastStateKey && this._initialized) return;
    this._lastStateKey = stateKey;
    const newArticles = this._getArticles();
    const newIssues = this._validateSources();
    this._articles = newArticles;
    this._lastIssuesJson = JSON.stringify(newIssues);
    this._updateContent(newArticles, newIssues);
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

  _renderDiagnostics() {
    if (!this._hass || !this._config) return '';
    
    let issues = [];
    for (const source of this._config.sources) {
      const state = this._hass.states[source.entity];
      if (!state) {
        issues.push(`Entity not found: ${source.entity}`);
      }
    }

    if (issues.length === 0) return ''; 

    return `
      <div style="background: var(--error-color, #ffcccc); padding: 12px; margin-bottom: 8px; border-radius: 4px;">
        <strong>⚠️ Sensor diagnostics</strong>
        <ul style="margin: 8px 0; padding-left: 20px;">
          ${issues.map(issue => `<li>${issue}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  _getArticles() {
    if (!this._hass) return [];
    let all = [];
    
    const excludeString = this._config.exclude_categories || '';
    const excludeList = excludeString.split(',').map(c => c.trim().toLowerCase()).filter(c => c.length > 0);
    
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

  _buildArticlesHtml(articles) {
    const { show_source, show_date, show_description, image_width, image_height, title_font_size, desc_font_size, article_title_color, desc_color, show_images, keep_image_space } = this._config;
    const t = this._t();
    if (articles.length === 0) return `<div style="padding:20px;color:var(--secondary-text-color);text-align:center;">${t.no_articles}</div>`;
    
    return articles.map(a => {
      const desc = a.summary;
      const pubDate = a.published;

      let imageHtml = '';
      if (show_images) {
        const hasImage = a.image && a.image.trim() !== '';
        if (hasImage) {
          imageHtml = `<img src="${a.image}" style="width:${image_width}px;min-width:${image_width}px;height:${image_height}px;object-fit:cover;border-radius:6px;flex-shrink:0;" onerror="${keep_image_space ? "this.style.visibility='hidden'" : "this.style.display='none'"}"/ >`;
        } else if (keep_image_space) {
          imageHtml = `<div style="width:${image_width}px;min-width:${image_width}px;height:${image_height}px;flex-shrink:0;"></div>`;
        }
      }
      
      return `
      <div class="feedparser-rss-article-row" data-rss-url="${a.link}"
        style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--divider-color);cursor:pointer;-webkit-tap-highlight-color:transparent;">
        ${imageHtml}
        <div style="flex:1;min-width:0;text-align:left;">
          <div class="feedparser-rss-atitle" style="font-size:${title_font_size}px;font-weight:600;line-height:1.4;color:${this._isVisited(a.link) ? 'var(--disabled-text-color)' : (article_title_color || 'var(--primary-text-color)')};white-space:normal;word-break:break-word;margin-bottom:4px;">${a.title}</div>
          ${(show_source || show_date) ? `
            <div style="font-size:11px;color:var(--secondary-text-color);margin-bottom:4px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
              ${show_source ? `<span style="font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:${a._sourceColor};">${a._sourceName}</span>` : ''}
              ${(show_source && show_date) ? `<span style="opacity:0.4;">·</span>` : ''}
              ${show_date && pubDate ? `<span>${this._formatDate(pubDate)}</span>` : ''}
            </div>` : ''}
          ${show_description && desc ? `<div style="font-size:${desc_font_size}px;color:${desc_color || 'var(--secondary-text-color)'};line-height:1.4;white-space:normal;word-break:break-word;">${desc}</div>` : ''}
        </div>
      </div>`;
    }).join('');
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
      'toolbar=no,menubar=no,scrollbars=yes,resizable=yes'
    );
  }

  _render() {
    this.innerHTML = `
      <ha-card>
        <style>
          .feedparser-rss-inner{padding:12px 16px;}
          .feedparser-rss-title{font-size:24px;font-weight:400;margin-bottom:8px;}
          .feedparser-rss-scroll{overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;touch-action:pan-y;scrollbar-width:thin;scrollbar-color:var(--divider-color) transparent;}
        </style>
        <div class="feedparser-rss-inner">
          <div class="feedparser-rss-title-el"></div>
          <div class="feedparser-rss-diag"></div>
          <div class="feedparser-rss-scroll"><div class="feedparser-rss-articles"></div></div>
        </div>
      </ha-card>`;
    this._initialized = true;
  }

  _updateContent(articles, issues) {
    if (!this._initialized) this._render();
    const { title, card_height, card_title_color } = this._config;

    const titleEl = this.querySelector('.feedparser-rss-title-el');
    if (titleEl) {
      titleEl.className = title ? 'feedparser-rss-title-el feedparser-rss-title' : 'feedparser-rss-title-el';
      titleEl.style.color = card_title_color || 'var(--primary-text-color)';
      titleEl.textContent = title || '';
    }

    const scrollEl = this.querySelector('.feedparser-rss-scroll');
    if (scrollEl) scrollEl.style.height = (card_height || 400) + 'px';

    const diagEl = this.querySelector('.feedparser-rss-diag');
    const artEl = this.querySelector('.feedparser-rss-articles');
    if (diagEl) diagEl.innerHTML = issues.length > 0 ? this._renderDiagnostics(issues) : '';
    if (artEl) {
      artEl.innerHTML = this._buildArticlesHtml(articles);
      artEl.querySelectorAll('.feedparser-rss-article-row').forEach(row => {
        row.addEventListener('click', () => {
          const url = row.dataset.rssUrl;
          if (!url) return;
          this._markVisited(url);
          const titleEl = row.querySelector('.feedparser-rss-atitle');
          if (titleEl) titleEl.style.color = 'var(--disabled-text-color)';
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
    const c = this._config || {};
    const t = this._t();

    this.innerHTML = `
      <style>
        .feedparser-rss-ed{padding:12px;}
        .feedparser-rss-ed label{display:block;font-size:12px;color:var(--secondary-text-color);margin:10px 0 4px;}
        .feedparser-rss-ed input[type=text],.feedparser-rss-ed input[type=number]{width:100%;padding:4px 8px;box-sizing:border-box;border:1px solid var(--divider-color);border-radius:4px;background:var(--card-background-color);color:var(--primary-text-color);}
        .feedparser-rss-src-row{display:flex;gap:8px;align-items:center;margin-bottom:6px;}
        .feedparser-rss-src-row input{width:auto!important;}
        .feedparser-rss-add{margin-top:6px;padding:4px 12px;cursor:pointer;background:var(--primary-color);color:white;border:none;border-radius:4px;}
        .feedparser-rss-del{padding:2px 8px;cursor:pointer;border:1px solid var(--divider-color);border-radius:4px;background:transparent;color:var(--primary-text-color);}
        .feedparser-rss-toggle-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--divider-color);}
        .feedparser-rss-toggle-row label{margin:0;font-size:13px;color:var(--primary-text-color);}
        .feedparser-rss-toggle{position:relative;width:36px;height:20px;flex-shrink:0;}
        .feedparser-rss-toggle input{opacity:0;width:0;height:0;}
        .feedparser-rss-slider{position:absolute;cursor:pointer;inset:0;background:var(--disabled-color,#ccc);border-radius:20px;transition:.2s;}
        .feedparser-rss-slider:before{content:'';position:absolute;height:14px;width:14px;left:3px;bottom:3px;background:white;border-radius:50%;transition:.2s;}
        input:checked + .feedparser-rss-slider{background:var(--primary-color);}
        input:checked + .feedparser-rss-slider:before{transform:translateX(16px);}
      </style>
      <div class="feedparser-rss-ed">
        <label>${t.ed.card_title}</label>
        <input type="text" id="ed-title" value="${c.title || ''}"/>

        <label>${t.ed.sources}</label>
        <div id="ed-sources"></div>
        <button class="feedparser-rss-add" id="ed-add">${t.ed.add_source}</button>

        <label>${t.ed.exclude_categories}</label>
        <input type="text" id="ed-exclude-cats" placeholder="e.g. politics, sports" value="${c.exclude_categories || ''}"/>

        <label>${t.ed.max_articles}</label>
        <input type="number" id="ed-max" min="1" max="50" value="${c.max_articles || 10}"/>

        <label>${t.ed.card_height}</label>
        <input type="number" id="ed-height" min="100" max="2000" value="${c.card_height || 400}"/>

        <label>${t.ed.img_width}</label>
        <input type="number" id="ed-imgw" min="50" max="300" value="${c.image_width || 100}"/>

        <label>${t.ed.img_height}</label>
        <input type="number" id="ed-imgh" min="50" max="300" value="${c.image_height || 70}"/>

        <label>${t.ed.title_size}</label>
        <input type="number" id="ed-titlesize" min="10" max="30" value="${c.title_font_size || 15}"/>

        <label>${t.ed.desc_size}</label>
        <input type="number" id="ed-descsize" min="10" max="24" value="${c.desc_font_size || 14}"/>

        <label>${t.ed.card_title_color} <small style="opacity:0.6;">(${t.ed.color_hint})</small></label>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="position:relative;width:32px;height:28px;flex-shrink:0;cursor:pointer;border-radius:4px;overflow:hidden;border:1px solid var(--divider-color);">
            <div id="prev-card-title-color" style="position:absolute;inset:0;background:${c.card_title_color || 'transparent'};pointer-events:none;${!c.card_title_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-card-title-color" value="${c.card_title_color || '#ffffff'}" style="position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;"/>
          </label>
          <input type="text" id="ed-card-title-color-text" placeholder="e.g. #ff0000 or empty" value="${c.card_title_color || ''}"/>
        </div>

        <label>${t.ed.article_title_color} <small style="opacity:0.6;">(${t.ed.color_hint})</small></label>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="position:relative;width:32px;height:28px;flex-shrink:0;cursor:pointer;border-radius:4px;overflow:hidden;border:1px solid var(--divider-color);">
            <div id="prev-article-title-color" style="position:absolute;inset:0;background:${c.article_title_color || 'transparent'};pointer-events:none;${!c.article_title_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-article-title-color" value="${c.article_title_color || '#ffffff'}" style="position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;"/>
          </label>
          <input type="text" id="ed-article-title-color-text" placeholder="e.g. #ff0000 or empty" value="${c.article_title_color || ''}"/>
        </div>

        <label>${t.ed.desc_color} <small style="opacity:0.6;">(${t.ed.color_hint})</small></label>
        <div style="display:flex;gap:8px;align-items:center;">
          <label style="position:relative;width:32px;height:28px;flex-shrink:0;cursor:pointer;border-radius:4px;overflow:hidden;border:1px solid var(--divider-color);">
            <div id="prev-desc-color" style="position:absolute;inset:0;background:${c.desc_color || 'transparent'};pointer-events:none;${!c.desc_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-desc-color" value="${c.desc_color || '#ffffff'}" style="position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;"/>
          </label>
          <input type="text" id="ed-desc-color-text" placeholder="e.g. #ff0000 or empty" value="${c.desc_color || ''}"/>
        </div>

        <div style="margin-top:12px;">
          <div class="feedparser-rss-toggle-row">
            <label for="tog-source">${t.ed.show_source}</label>
            <label class="feedparser-rss-toggle">
              <input type="checkbox" id="tog-source" ${c.show_source !== false ? 'checked' : ''}/>
              <span class="feedparser-rss-slider"></span>
            </label>
          </div>
          <div class="feedparser-rss-toggle-row">
            <label for="tog-date">${t.ed.show_date}</label>
            <label class="feedparser-rss-toggle">
              <input type="checkbox" id="tog-date" ${c.show_date !== false ? 'checked' : ''}/>
              <span class="feedparser-rss-slider"></span>
            </label>
          </div>
          <div class="feedparser-rss-toggle-row">
            <label for="tog-desc">${t.ed.show_desc}</label>
            <label class="feedparser-rss-toggle">
              <input type="checkbox" id="tog-desc" ${c.show_description !== false ? 'checked' : ''}/>
              <span class="feedparser-rss-slider"></span>
            </label>
          </div>
          <div class="feedparser-rss-toggle-row">
            <label for="tog-images">${t.ed.show_images}</label>
            <label class="feedparser-rss-toggle">
              <input type="checkbox" id="tog-images" ${c.show_images !== false ? 'checked' : ''}/>
              <span class="feedparser-rss-slider"></span>
            </label>
          </div>
          <div class="feedparser-rss-toggle-row" id="row-image-space" style="${c.show_images !== false ? '' : 'display:none;'}">
            <label for="tog-image-space">${t.ed.keep_image_space}</label>
            <label class="feedparser-rss-toggle">
              <input type="checkbox" id="tog-image-space" ${c.keep_image_space === true ? 'checked' : ''}/>
              <span class="feedparser-rss-slider"></span>
            </label>
          </div>
        </div>
      </div>`;

    this._renderSources();
    this._attachListeners();
    requestAnimationFrame(() => this._syncColorPreviews());
  }

  _syncColorPreviews() {
    const card = this.closest('ha-card') || document.querySelector('feedparser-rss-news-card');
    const syncPreview = (previewId, configVal, cssVar) => {
      const preview = this.querySelector(previewId);
      if (!preview) return;
      if (configVal) {
        preview.style.backgroundImage = 'none';
        preview.style.background = configVal;
      } else {
        if (card) {
          const computed = getComputedStyle(card).getPropertyValue(cssVar).trim();
          if (computed) {
            preview.style.backgroundImage = 'none';
            preview.style.background = computed;
            return;
          }
        }
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
    const container = this.querySelector('#ed-sources');
    if (!container) return;
    const sources = this._config.sources || [];
    container.innerHTML = sources.map((s, i) => `
      <div class="feedparser-rss-src-row" data-idx="${i}">
        <input type="text" style="flex:1;min-width:0;" placeholder="sensor.feedparser_news" data-field="entity" value="${s.entity || ''}"/>
        <input type="text" style="width:80px;flex-shrink:0;" placeholder="Name" data-field="name" value="${s.name || ''}"/>
        <label style="position:relative;width:32px;height:28px;flex-shrink:0;cursor:pointer;border-radius:4px;overflow:hidden;border:1px solid var(--divider-color);">
          <div style="position:absolute;inset:0;background:${s.color || '#0077cc'};pointer-events:none;" class="feedparser-rss-color-preview-${i}"></div>
          <input type="color" data-field="color" value="${s.color || '#0077cc'}" style="position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;"/>
        </label>
        <button class="feedparser-rss-del" data-idx="${i}">✕</button>
      </div>`).join('');

    container.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        const row = input.closest('.feedparser-rss-src-row');
        const idx = parseInt(row.dataset.idx);
        const field = input.dataset.field;
        const sources = [...(this._config.sources || [])];
        sources[idx] = { ...sources[idx], [field]: input.value };
        this._upd('sources', sources);
        if (field === 'color') {
          const preview = row.querySelector('.feedparser-rss-color-preview-' + idx);
          if (preview) preview.style.background = input.value;
        }
      });
    });

    container.querySelectorAll('.feedparser-rss-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const sources = (this._config.sources || []).filter((_, i) => i !== idx);
        this._upd('sources', sources);
        this._renderSources();
      });
    });
  }

  _attachListeners() {
    const bind = (id, key, transform) => {
      const el = this.querySelector(id);
      if (!el) return;
      el.addEventListener('input', e => this._upd(key, transform ? transform(e.target.value) : e.target.value));
    };
    const bindChk = (id, key) => {
      const el = this.querySelector(id);
      if (!el) return;
      el.addEventListener('change', e => this._upd(key, e.target.checked));
    };

    bind('#ed-title',    'title');
    bind('#ed-exclude-cats', 'exclude_categories');
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
      const picker = this.querySelector(pickerId);
      const text   = this.querySelector(textId);
      const preview = this.querySelector(previewId);
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
          if (preview && (val === '' || /^#[0-9a-fA-F]{3,6}$/.test(val))) {
            preview.style.background = val || '#ffffff';
            if (picker) picker.value = val || '#ffffff';
          }
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

    const togImages = this.querySelector('#tog-images');
    const rowImageSpace = this.querySelector('#row-image-space');
    if (togImages && rowImageSpace) {
      togImages.addEventListener('change', e => {
        rowImageSpace.style.display = e.target.checked ? '' : 'none';
      });
    }

    const addBtn = this.querySelector('#ed-add');
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
    const set = (id, val) => { const el = this.querySelector(id); if (el && document.activeElement !== el) el.value = val ?? ''; };
    const setChk = (id, val) => { const el = this.querySelector(id); if (el) el.checked = !!val; };
    
    set('#ed-title',     c.title);
    set('#ed-exclude-cats', c.exclude_categories);
    set('#ed-max',       c.max_articles);
    set('#ed-height',    c.card_height);
    set('#ed-imgw',      c.image_width);
    set('#ed-imgh',      c.image_height);
    set('#ed-titlesize', c.title_font_size);
    set('#ed-descsize',  c.desc_font_size);
    set('#ed-card-title-color-text',    c.card_title_color);
    set('#ed-article-title-color-text', c.article_title_color);
    set('#ed-desc-color-text',          c.desc_color);
    setChk('#tog-source', c.show_source !== false);
    setChk('#tog-date',   c.show_date !== false);
    setChk('#tog-desc',   c.show_description !== false);
    setChk('#tog-images', c.show_images !== false);
    setChk('#tog-image-space', c.keep_image_space === true);

    const rowImageSpace = this.querySelector('#row-image-space');
    if (rowImageSpace) {
      rowImageSpace.style.display = c.show_images !== false ? '' : 'none';
    }
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
