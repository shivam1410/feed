---
title: "Cloudflare CAPTCHA on at least one ampersand"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything"
authors: []
date: "2026-06-16T00:21:36+00:00"
score: 25
guid: "https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

Cloudflare's Web Application Firewall can challenge even simple database searches with CAPTCHA, frustrating users. A refined approach uses custom rules targeting only complex queries: triggering challenges only for searches with multiple ampersands, indicating advanced multi-parameter searches. Simple queries like `/search/?q=lemur` proceed without friction while complex ones with multiple parameters face challenges. This selective rule balances crawler prevention with user experience, reducing friction on basic interactions. The adjustment demonstrates how precise rule configuration matching actual risk patterns enables effective rate-limiting without degrading legitimate workflows.
