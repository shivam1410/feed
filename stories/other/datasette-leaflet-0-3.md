---
title: "datasette-leaflet 0.3"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Nov/13/datasette-leaflet/"
authors: []
date: "2026-11-13T22:30:54+00:00"
score: ""
guid: "https://simonwillison.net/2026/Nov/13/datasette-leaflet/"
image: ""
generated: "2026-11-14T19:35:57+05:30"
---

Release: datasette-leaflet 0.3 OpenStreetMap have a very reasonable policy that hits to their hosted tile server should send a referrer header . Datasette table pages used the Referrer-Policy: no-referrer HTTP header, causing plugins that loaded tiles from OpenStreetMap to violate that policy. datasette-leaflet is the plugin that loads a bundled Leaflet so other Datasette plugins can depend on it. It now sets the referrer policy on the tile requests themselves to strict-origin-when-cross-origin , passing the host but not the full path to the page. Tags: leaflet , datasette , openstreetmap
