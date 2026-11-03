---
title: "On the Limits of Test-Time Compute for Self-Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00350"
authors: ["Anirudh Buvanesh, Khaled Rouissi, Sujin Yun, Johan Obando-Ceron, Morgane M Moss, Samuel Lavoie, Michael Noukhovitch, Laurent Charlin, Aaron Courville"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00350v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Self-verification and aggregation have emerged as popular approaches for bridging the gap between pass@1 and pass@N. However, increasing the number of candidates does not consistently narrow the gap between final-answer accuracy and pass@N. To understand this limitation, we use ranking error to measure how reliably models distinguish their correct generations from incorrect ones. We show that ranking error admits a bias-variance decomposition, with both components shaped by algorithmic design choices and inference compute. Across our experiments, additional compute reduces variance, while bias initially decreases before approaching a plateau. Guided by this analysis, we introduce Scorpio, a simple and general method that jointly scores randomly grouped candidates. Across math, code, and puzzle benchmarks, Scorpio improves verification, tree search, and aggregation. For verification, Scorpio improves accuracy over the strongest baseline by up to 7 percentage points while matching or exceeding that baseline's peak accuracy with 17-42% lower inference cost. For tree search, using Scorpio to score partial solutions and select the final answer improves accuracy by up to 10 percentage points over prior methods. Finally, Scorpio improves the scaling of aggregation-based methods by 11 percentage points on coding tasks.
