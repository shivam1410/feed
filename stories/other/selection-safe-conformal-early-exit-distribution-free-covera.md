---
title: "Selection-Safe Conformal Early Exit: Distribution-Free Coverage under Adaptive Depth"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20773"
authors: ["Adria Binte Habib, Ibne Farabi Shihab"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20773v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Calibrating a conformal prediction set at each early exit does not preserve coverage once a data-dependent exit is selected. We construct one terminal path score from prefix maxima, calibrate a single split-conformal quantile, and return nested prefix sets that all contain the valid terminal set. The guarantee is selection-safe without an alpha/L correction and holds simultaneously for every post-calibration label-free stopping policy that preserves terminal-set containment. We also bound the efficiency cost of the path maximum by the empirical tail of the early-over-terminal score excess. Across eight encoder task-backbone cells, pathwise selection attains macro coverage 0.901 versus 0.814 for naive layerwise selection, with average set size 1.41 and latency fraction 0.71. On CIFAR-100 with a 24-exit ViT-L/16 (n_cal=500), first-eligible stopping at budget b=4 attains coverage 0.902, set size 2.76, and latency fraction 0.57, and the same calibration supports deployment-time budget changes without refitting. In a joint exit-count/calibration-size sweep at n=100, pathwise set size moves only from 3.02 to 3.11 as exits increase from 4 to 24, while Bonferroni degenerates to the full label space for 12 or more exits. Paired comparison against MinSE valid selection at (n,L)=(100,24) gives a set-size difference of 0.80 [0.47, 1.13]. Full-vocabulary decoder experiments remain a negative boundary, with sets of 7,162-9,620 tokens. Pathwise calibration is most useful when candidate exits are many relative to calibration size, when budgets change after calibration, and when shallow heads return actionable sets.
