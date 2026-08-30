---
title: "EVE Online: The Move to Python 3 Begins!"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
authors: []
date: "2026-08-25T22:59:30+00:00"
score: 45
guid: "https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/"
image: ""
generated: "2026-08-31T03:16:07+05:30"
---

EVE Online is beginning its migration from Stackless Python 2.7 to Python 3 after remaining on that version for sixteen years since 2010. The upgrade process will apply automated tools to 2.4 million lines of code, followed by careful manual review of approximately 20,000 locations where Python 2 and 3 behavior differs fundamentally—such as integer division (1/2 yields 0 in Python 2 but 0.5 in Python 3). While the announcement does not detail how they will replace Stackless Python itself, EVE's developers previously outlined their modernization strategy through their newer game EVE Frontier, where they successfully replaced Stackless using their now open-source carbonengine scheduler library.
