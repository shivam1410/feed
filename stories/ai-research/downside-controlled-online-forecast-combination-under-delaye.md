---
title: "Downside-Controlled Online Forecast Combination under Delayed and Revised Outcomes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29096"
authors: ["Minkyoung Kim, Hyunjung Byun, Yohan Lee, Beakcheol Jang"]
date: "Sat, 26 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.29096v1"
image: ""
generated: "2026-09-26T20:22:03+05:30"
---

Post-hoc correction adjusts a forecaster that cannot be retrained, such as a foundation model, but a correction fitted where errors are stable can hurt where they shift. We aim for downside control: not much worse than the starting forecast. We combine the frozen forecaster, a static corrector and an online corrector on the simplex, using only losses that mature after the horizon. Across seven benchmarks and four base models, two of them foundation models, the worst deterioration over 28 pairs at the main horizon is 0.15% and gains reach 11.5%. On day-ahead load for seven European bidding zones it lowers mean MSE in all seven zones, while single correctors raise mean MSE by up to 102% where the published forecast is most accurate. Three empirical conditions on expert speed, stream length and outcome alignment, each fixed by a documented failure, delimit its scope. Learning from the provisional outcome improves four zones on the settled one; learning on the settled outcome restores all seven.
