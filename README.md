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
- Automatic language & date format detection from Home Assistant settings
- Visual editor with color picker, toggle switches, and font size controls
- Community localization support (English, Hungarian, German included)
- Flexible layout

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

*Note: Ensure you include `tags` in your inclusions list if you plan to use the category filtering feature. The Python feedparser library standardizes `<category>` XML tags into the `tags` array!*

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
      - description
      - image
      - published
      - tags

```

### Card config example

```yaml
type: custom:feedparser-rss-news-card
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

## Development

To test changes locally, you can use the [File Editor](https://github.com/home-assistant/addons/blob/master/configurator/README.md) app.
1. Navigate to `homeassistant/www/community/feedparser-rss-news-card/`
2. Remove the `feedparser-rss-news-card.js.gz` file, if you don't do this, changes you'll be making will not become visible.
3. Edit the `feedparser-rss-news-card.js` file, apply your changes here.
4. Save the changes and reload your browser, make sure to empty the cache.
