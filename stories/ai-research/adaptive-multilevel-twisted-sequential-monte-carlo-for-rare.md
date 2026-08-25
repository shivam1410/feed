---
title: "Adaptive Multilevel Twisted Sequential Monte Carlo for Rare Events Estimation in Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21736"
authors: ["Zixuan Liu, Fangzheng Wu, Brian Summa, Zizhan Zheng"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.21736v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21736v1 Announce Type: new Abstract: Rare unsafe behaviors in large language models can remain practically significant even when their probability is extremely small, particularly at deployment scales involving millions or billions of interactions. Twisted Sequential Monte Carlo (SMC) provides a principled framework for rare-event probability estimation by learning twist functions that guide generation toward a target event. However, the standard twist learning framework relies on positive samples from the rare-event target distribution, which may be nearly absent before an informative twist has been learned, resulting in unreliable rare-event estimation. We propose Adaptive Multilevel Twisted SMC, which learns the rare-event twist through a sequence of progressively rarer intermediate events. At each level, the learned twist provides more informative positive examples for learning the next twist, ultimately leading to a more accurate final twist for the target rare event. Experiments across diverse tasks and model scales show that the proposed method produces more accurate rare-event probability estimates. By enabling more reliable discovery of hard-to-observe unsafe behaviors, our method provides a practical tool for strengthening the evaluation and safety alignment of deployed language models.
