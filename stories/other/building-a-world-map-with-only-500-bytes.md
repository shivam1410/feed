---
title: "Building a World Map with only 500 bytes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/4/building-a-world-map-with-only-500-bytes/#atom-everything"
authors: []
date: "2026-07-04T23:09:02+00:00"
score: 35
guid: "https://simonwillison.net/2026/Jul/4/building-a-world-map-with-only-500-bytes/#atom-everything"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

A developer created a full ASCII world map representation using just 445 bytes of compressed data. The approach combines deflate compression with a clever JavaScript technique employing the fetch() method to access data: URIs, then decompresses the payload through DecompressionStream and renders it as displayable HTML. The resulting map shows recognizable continents and geography in clean ASCII art. This achievement showcases extraordinary data efficiency in cartographic visualization—compressing a globally-detailed geographic representation to roughly the size of a modest email attachment—and demonstrates the remarkable power of modern compression standards and browser decompression APIs for minimizing resource consumption while maintaining full usability.
