# RSS News Card

Scrollable RSS news card for Home Assistant with multi-source support, automatic language detection, category filtering, and a full visual editor, specifically mapped for the `feedparser` integration.

## Features

* 📰 Multiple RSS sources in a single card, sorted by datetime
* 🚫 Filter out unwanted news items by category/tag directly from the UI
* 🌍 Automatic language & date format detection from Home Assistant settings
* 📱 iOS-compatible scrolling
* 🎨 Visual editor with color picker, toggle switches, and font size controls
* ⚠️ Built-in sensor diagnostics to catch missing or misconfigured sensors
* 🌐 Community localization support (English, Hungarian, German included)

## Requirements

* The [Feedparser](https://github.com/custom-components/sensor.feedparser) custom component installed via HACS.

## Quick start

### Feedparser sensor in 'configuration.yaml'

*Note: Ensure you include `tags` in your inclusions list if you plan to use the category filtering feature. The Python feedparser library standardizes `<category>` XML tags into the `tags` array!*

```yaml
sensor:
  - platform: feedparser
    name: "rss_nu_nl_feed"
    feed_url: 'https://www.nu.nl/rss/Algemeen'
    date_format: '%a, %d %b %Y %H:%M:%S %z'
    scan_interval:
      minutes: 5
    show_topn: 20
    inclusions:
      - title
      - link
      - description
      - image # optional, not shown if not present
      - published
      - tags

```

### Card config example

```yaml
type: custom:rss-news-card
title: Latest News
card_height: 400
max_articles: 20
show_description: true
show_source: true
show_date: true
image_width: 100
image_height: 70
exclude_categories: formule-1, voetbal
sources:
  - entity: sensor.rss_nu_nl_feed
    name: NU.nl Algemeen
    color: "#e63946"
  - entity: sensor.rss_another_feed
    name: Tech News
    color: "#0077cc"

```
