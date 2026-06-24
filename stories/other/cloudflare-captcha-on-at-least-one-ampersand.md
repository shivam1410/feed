---
title: "Cloudflare CAPTCHA on at least one ampersand"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything"
authors: []
date: "2026-06-16T00:21:36+00:00"
score: ""
guid: "https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

TIL: Cloudflare CAPTCHA on at least one ampersand I'm using Cloudflare's CAPTCHA (they call it a "Web Application Firewall > Custom rules > Managed Challenge" these days) to prevent crawlers from aggresively spidering my faceted search engine on this site, but I got fed up of even simple ?q=term searches triggering the challenge. After some mucking around with Claude Code it turns out you can register the following rule instead, so the CAPTCHA only kicks in for search URLs containing at least one ampersand: (http.request.uri.path wildcard r"/search/*" and http.request.uri.query contains "&") And now /search/?q=lemur works without triggering a CAPTCHA! Also included: notes on trying out the Cloudflare MCP with Claude Code , though it turned out not to be able to edit the rules in question so I had Claude Code switch to the Cloudflare API instead. Tags: captchas , cloudflare , model-context-protocol , claude-code
