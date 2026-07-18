---
title: "shot-scraper 1.11"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/12/shot-scraper/#atom-everything"
authors: []
date: "2026-07-12T23:46:52+00:00"
score: ""
guid: "https://simonwillison.net/2026/Jul/12/shot-scraper/#atom-everything"
image: ""
generated: "2026-07-18T21:58:10+05:30"
---

Release: shot-scraper 1.11 Some minor improvements, mainly around command option consistency and making the server: mechanism used by both shot-scraper video and shot-scraper multi work if the server takes longer than a second to start serving traffic. server: processes used by shot-scraper multi and shot-scraper video now wait up to 30 seconds for the target URL to accept connections, polling for port availability and replacing the previous fixed one-second delay. #197 The shot-scraper , pdf , html , accessibility and har commands now have a --js-file option for loading JavaScript from a local file, standard input or gh:username/script , as an alternative to --javascript which accepts the string of JavaScript directly as an argument. #192 shot-scraper multi supports the equivalent js_file: YAML key. The shot-scraper javascript and shot-scraper html commands now have a --timeout option for consistency with other commands. #118 Tags: shot-scraper
