---
title: "We just shipped support for the ugliest part of HTTP: Vary"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/23/hn-49823961/"
authors: []
date: "2026-09-23T23:14:57+00:00"
score: 8
guid: "https://simonwillison.net/2026/Sep/23/hn-49823961/"
image: ""
generated: "2026-10-04T19:07:43+05:30"
---

My comment on We just shipped support for the ugliest part of HTTP: Vary — Hacker News. I've been wanting this from Cloudflare for years . The classic problem here is if you do that thing where user agents that send "accept: text/html" get HTML, while user agents that don't get JSON or some other format. This used to be impossible to deploy behind Cloudflare caching, because they ignored the Vary header on anything other than images - so you risked caching the JSON version and then serving it up to someone who was expecting HTML. (Independent of the Cloudflare feature I ended up deciding never to use that pattern, because I prefer having URL that predictably returns HTML or JSON - I add a .json suffix to my apps to serve JSON instead.) Tags: http , cloudflare
