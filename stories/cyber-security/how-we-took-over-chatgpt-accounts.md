---
title: "How We Took Over ChatGPT Accounts"
category: "Cyber Security"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/"
authors: []
date: "2026-10-31T23:15:22+00:00"
score: 70
guid: "https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Parameter Labs found a way to take over ChatGPT accounts. It was a chain of small flaws. The MathLive library used for graph support has a virtual keyboard. Any sandboxed frame could trigger it with postMessage, and its handler used innerHTML. That let untrusted code inject an unsandboxed iframe. OpenAI's content rules allowed YouTube scripts, and the YouTube oEmbed endpoint could reflect JavaScript back. Once the code ran, it could fetch private user data from APIs. Sandboxes exist to keep untrusted code away from that data.
