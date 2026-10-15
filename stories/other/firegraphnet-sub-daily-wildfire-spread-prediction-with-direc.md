---
title: "FireGraphNet: Sub-daily wildfire spread prediction with directed graph neural networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19191"
authors: ["Aiyshwariya Paulvannan Kanmani, Miguel Esparza, Ali Mostafavi"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19191v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Wildfire decisions are made in hours, yet most learned spread models predict daily on targets including burned area. We propose FireGraphNet which formulates 12-hour growth as node classification on directed H3 graphs, with candidates ahead of the front and wind alignment, terrain, fuel continuity and barriers on edges. On satellite perimeters it achieves average precision 1.7-1.9x the strongest distance baseline on test California fires and 1.62x out of state. We show this skill comes from message passing rather than cell features or the aggregator, is highest on young fires in state, is carried deep along the wind by its edges, and is hidden by pooling. A convolutional network matches this ranking once trained on new growth, at worse calibration, so candidate construction, target definition, and aggregation shape conclusions about model skill. Editing fuel and barrier attributes reduces predicted spread more under guided than random placement, extending FireGraphNet to operational intervention analysis.
