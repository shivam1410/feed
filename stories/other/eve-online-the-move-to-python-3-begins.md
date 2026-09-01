---
title: "EVE Online: The Move to Python 3 Begins!"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
authors: []
date: "2026-08-25T22:59:30+00:00"
score: 38
guid: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

EVE Online, a 20-year-old MMO with 2.4 million lines of code, is migrating from Stackless Python 2.7 to Python 3 after 16 years on the previous version. The migration requires the futurize script plus manual review of approximately 20,000 locations where Python 2 and 3 behavior differs—such as integer division (1/2 = 0 vs 0.5). The studio previously demonstrated a Stackless replacement in newer game EVE Frontier.
