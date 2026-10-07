---
title: "Using Parseable with Datasette for OpenTelemetry traces"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/6/datasette-parseable-opentelemetry/"
authors: []
date: "2026-10-06T19:07:31+00:00"
score: 25
guid: "https://simonwillison.net/2026/Oct/6/datasette-parseable-opentelemetry/"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

TIL: Using Parseable with Datasette for OpenTelemetry traces I saw Parseable in a Show HN today - it's a new observability platform with both an open source (AGPL) Rust implementation (a single ~180MB binary), an "Enterprise" version with extra features and a cloud hosted option. Since Datasette 1.0a41 added OpenTelemetry support (thanks, Alex Garcia), I decided to fire up Codex and have it figure out how to run Parseable and feed it traces from Datasette. Here's my (human-written) TIL showing the patterns that worked, and here's a screenshot of a Datasette trace displayed within the Parseable localhost web application: Tags: datasette , observability , alex-garcia , opentelemetry
