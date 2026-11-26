---
title: "Fusion Gains Depend on the Implementation and the Calibration Target: An 18-Task Study of Prediction Intervals with a Single-Source Fallback"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31333"
authors: ["Liwei Deng, Lu Wang"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.31333v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

A fused model can benefit from an extra learning stage as well as from a second data source. We compare four fusion implementations with matched single-source learners on 18 regression tasks with prediction intervals. Across ten refits under group-wise calibration, linear stacking improved the interval score by 6.0% against a source model without a second stage and by 0.1% against its matched single source. The four implementations agreed on 3 of 18 tasks and gave opposite clear verdicts on 12, including 8 of the 10 tasks with naturally distinct sources. With pointwise calibration, they agreed on 5 tasks and gave opposite clear verdicts on 9. A development-set selector with a matched single-source fallback improved ten-refit task-averaged scores by 2.2--6.3% in every implementation under both calibrations. Adding fused arms to the pool of single-source candidates improved the mean relative score by about 5 percentage points. Under group-wise calibration, the gradient-boosted selector met the criterion frozen before evaluation on eight held-out tasks. In post-opening refits, selectors lost to the matched single source in 4.4--6.1% of task-level runs under group-wise calibration. Under signed pointwise calibration, three implementations lost in 19--23% of runs. Fusion evaluations should compare matched candidates on held-out data and report how often the selector loses alongside its average gain.
