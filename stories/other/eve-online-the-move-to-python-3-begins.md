---
title: "EVE Online: The Move to Python 3 Begins!"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
authors: []
date: "2026-08-25T22:59:30+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

EVE Online is modernizing from Python 2.7 to Python 3 after 16 years without a major upgrade—its last was in 2010. The project must migrate 2.4 million lines of code originally written for Stackless Python, addressing approximately 20,000 locations with incompatible syntax differences (e.g., 1/2 yields 0 in Python 2 but 0.5 in Python 3). The team will use automated tooling (futurize script) followed by manual review. EVE's recent successful replacement of Stackless in their Carbon engine using an open-source scheduler library demonstrates their approach.
