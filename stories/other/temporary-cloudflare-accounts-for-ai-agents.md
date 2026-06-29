---
title: "Temporary Cloudflare Accounts for AI agents"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything"
authors: []
date: "2026-06-21T22:01:04+00:00"
score: 45
guid: "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

Cloudflare Workers now allows deploying applications without creating an account using `npx wrangler deploy --temporary`. Deployments automatically live for 60 minutes on ephemeral projects, with the option to claim and persist them afterward. A test application using GPT-5.5 demonstrated the feature working as advertised. This lowers friction for experimenting with serverless code and supports one-off deployments for AI agents and temporary workloads.
