# 📰 FeedParser RSS News Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/frontend)
![HA](https://img.shields.io/badge/Home%20Assistant-2026.5+-green)
![license](https://img.shields.io/badge/license-MIT-lightgrey)

My fork of [https://github.com/suxlala/rss-news-card](https://github.com/suxlala/rss-news-card), credits go to **suxlala** for originally making this card.

A RSS newsfeed reader card specifically for use with FeedParser sensors. Works with multiple feeds, has a visual editor and allows filtering unwanted news tags / categories.

![Overview](https://github.com/xorinzor/feedparser-rss-news-card/blob/main/cardoverview.png)

## Features

- Multiple RSS sources using FeedParser sensors in a single card, sorted by datetime
- Filter out unwanted news items by tags directly from the UI
- Automatic language & date format detection from Home Assistant settings, including 12/24-hour time format
- Visual editor with color picker, toggle switches, and font size controls
- Community localization support (English, Hungarian, German included)
- Flexible layout: toggle images, descriptions, source names and dates; set sizes and colors
- Clicking an article opens it in a popup window, or in the external browser when using the Companion app. Opened articles are greyed out until the page reloads.
- Diagnostics panel when a configured sensor does not exist
- Feed content renders as plain text, and only `http(s)` links and images load, so a malicious feed cannot inject scripts

## Requirements

- You will need to have [FeedParser](https://github.com/custom-components/feedparser) installed

## Installation (using HACS)

[![Open HACS Repository](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xorinzor&repository=feedparser-rss-news-card&category=plugin)

> If the button doesn't work, add manually:

1. Go to the HACS store 
2. Click on the 3 dots in the upper right corner
3. Select Custom repos and add the url `https://github.com/xorinzor/feedparser-rss-news-card` 
4. Choose Dashboard as a type

HACS Will automatically add the JS resource to your dashboard and refresh it when updated.
You will need to refresh the browser page for updates to work.

## Configuration

### Feedparser sensor in 'configuration.yaml'

The card reads these entry fields: `title`, `link`, `summary`, `image`, `published` and `tags`. Add each one you need to `inclusions`.

*Note: Use `summary`, not `description`. The Python feedparser library stores the RSS `<description>` element as `summary`.*

*Note: Include `tags` if you plan to use the category filtering feature. The Python feedparser library standardizes `<category>` XML tags into the `tags` array.*

```yaml
sensor:
  - platform: feedparser
    name: "rss_nu_nl_feed"
    feed_url: 'https://www.nu.nl/rss/Algemeen'
    date_format: '%a, %d %b %Y %H:%M:%S %z'
    scan_interval:
      minutes: 30
    show_topn: 20
    inclusions:
      - title
      - link
      - summary
      - image
      - published
      - tags

```

### Card options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `sources` | list | **required** | FeedParser sensors to show. Each item takes `entity` (required), `name` and `color`. |
| `title` | string | `''` | Card title. Hidden when empty. |
| `max_articles` | number | `10` | Maximum number of articles across all sources. |
| `card_height` | number | `400` | Height of the scrollable article list in px. |
| `exclude_categories` | string | `''` | Comma-separated tags to hide. Matching ignores case. |
| `show_source` | boolean | `true` | Show the source name. |
| `show_date` | boolean | `true` | Show the publish date. |
| `show_description` | boolean | `true` | Show the article summary. |
| `show_images` | boolean | `true` | Show article images. |
| `keep_image_space` | boolean | `false` | Reserve image space when an article has no image, keeping titles aligned. |
| `image_width` | number | `100` | Image width in px. |
| `image_height` | number | `70` | Image height in px. |
| `title_font_size` | number | `15` | Article title font size in px. |
| `desc_font_size` | number | `14` | Description font size in px. |
| `card_title_color` | string | theme | Card title color. |
| `article_title_color` | string | theme | Article title color. |
| `desc_color` | string | theme | Description color. |

Each source `color` defaults to the theme primary color. Colors accept hex, named colors, `rgb()`/`hsl()` and CSS variables such as `var(--accent-color)`.

### Card config example

```yaml
type: custom:feedparser-rss-news-card
title: Latest News
card_height: 400
max_articles: 20
show_description: true
show_source: true
show_date: true
show_images: true
keep_image_space: false
image_width: 100
image_height: 70
title_font_size: 15
desc_font_size: 14
exclude_categories: formule-1, voetbal
sources:
  - entity: sensor.rss_nu_nl_feed
    name: NU.nl Algemeen
    color: "#e63946"
  - entity: sensor.rss_another_feed
    name: Tech News
    color: "#0077cc"

```

## Development

To test changes locally, you can use the [File Editor](https://github.com/home-assistant/addons/blob/master/configurator/README.md) app.
1. Navigate to `homeassistant/www/community/feedparser-rss-news-card/`
2. Remove the `feedparser-rss-news-card.js.gz` file, if you don't do this, changes you'll be making will not become visible.
3. Edit the `feedparser-rss-news-card.js` file, apply your changes here.
4. Save the changes and reload your browser, make sure to empty the cache.
