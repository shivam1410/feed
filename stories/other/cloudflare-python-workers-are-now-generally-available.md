---
title: "Cloudflare Python Workers are now generally available"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/21/cloudflare-python-worker/"
authors: []
date: "2026-09-21T22:25:44+00:00"
score: 30
guid: "https://simonwillison.net/2026/Sep/21/cloudflare-python-worker/"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Cloudflare just made Python a fully supported language on its Workers platform, after a two year preview. They run Python compiled to WebAssembly through Pyodide in their V8 runtime. The local development tool is about 123MB and simulates the full stack. Threading and multiprocessing don't work in the WebAssembly VM, but this still opens Cloudflare's edge computing to Python developers.
