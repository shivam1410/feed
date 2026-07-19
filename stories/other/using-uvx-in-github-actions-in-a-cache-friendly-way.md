---
title: "Using uvx in GitHub Actions in a cache-friendly way"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/14/uvx-github-actions-cache/#atom-everything"
authors: []
date: "2026-07-14T00:56:20+00:00"
score: ""
guid: "https://simonwillison.net/2026/Jul/14/uvx-github-actions-cache/#atom-everything"
image: ""
generated: "2026-07-19T19:52:10+05:30"
---

TIL: Using uvx in GitHub Actions in a cache-friendly way I finally found a cache-friendly recipe for using uvx tool-name in GitHub Actions workflows that I like. The trick is setting a UV_EXCLUDE_NEWER: "2026-07-12" environment variable at the start of the workflow and then using that as part of the GitHub Actions cache key. This means any uvx tool-name commands will resolve to the most recent version as-of that date, and you can bust the cache and upgrade the tools by bumping the date in the future. My goal here is to use Python tools in GitHub Actions without every run of the workflow hitting PyPI to download a fresh copy of the tool and its dependencies. Update : Here's an existing issue against the astral-sh/setup-uv repository requesting that they switch the default to cache rather than purge wheels from PyPI. Tags: packaging , pypi , python , github-actions , uv
