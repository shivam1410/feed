---
title: "Firefox in WebAssembly"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything"
authors: []
date: "2026-07-16T23:34:16+00:00"
score: 50
guid: "https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything"
image: ""
generated: "2026-07-26T22:35:53+05:30"
---

Puter compiled Firefox/Gecko to WebAssembly, enabling the full browser to run inside another browser—a technically complex feat accomplished using approximately $25,000 worth of Claude Opus and Fable API tokens, though actual spending was substantially less via a Claude Max subscription. Gecko was selected for strong single-process architecture. All traffic is proxied through Puter's servers via Wisp protocol over WebSocket (browser code cannot open arbitrary network connections). The project supports end-to-end encryption for HTTPS traffic while routing HTTP cleartext through the proxy. This achievement demonstrates modern AI's capability in assisting complex systems programming and challenges conventional assumptions about browser isolation and platform boundaries.
