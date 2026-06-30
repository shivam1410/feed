---
title: "Temporary Cloudflare Accounts for AI agents"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything"
authors: []
date: "2026-06-21T22:01:04+00:00"
score: 34
guid: "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

Cloudflare Workers now supports ephemeral project deployments without account creation—developers run `npx wrangler deploy --temporary` to spin up auto-expiring applications that remain live for exactly 60 minutes before automatic deletion. Post-deployment projects can optionally be claimed to extend persistence. A test deployment building a URL-redirect-following tool confirmed full functionality. While positioned as a convenience feature for AI agents, the capability delivers value to any rapid prototyping or experimental workflow. Single-command zero-account deployment removes barriers from temporary services, quick validation loops, and spontaneous infrastructure exploration without account friction.
