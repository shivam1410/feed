---
title: "Learning Mixtures of Plackett-Luce Models for Multi-Objective Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25200"
authors: ["Dongyue Li, Ziniu Zhang, Lu Wang, Hongyang R. Zhang"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.25200v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25200v1 Announce Type: new Abstract: We consider the problem of learning a mixture of $k$ Plackett-Luce models given multi-way ranking responses from annotators that may represent heterogeneous underlying preferences. This problem has many applications in AI alignment and preference optimization. Prior work has studied mixtures of Bradley-Terry models from pairwise comparisons. However, uncovering mixture models is theoretically unidentifiable when $k$ exceeds $m/2$, where $m$ is the length of a ranking. We propose an efficient implementation to address this limitation, which involves first augmenting the rankings to a larger size by generating new responses from a base language model, followed by a gradient-based estimation to reduce inference cost in the input embedding space. Based on this procedure, we then design an expectation-maximization algorithm with these two steps to fit a mixture of Plackett-Luce models, called MoPLEx. Extensive experiments are conducted to verify this approach. First, we show that the gradient-based approximation estimates true probabilities with less than 5% error on models with up to 34 billion parameters. Second, we show that MoPLEx improves clustering and ranking accuracy by an average of 43.7% and 15.2% over baselines using single ranking and mixtures of Bradley-Terry models, on preference optimization datasets. These results demonstrate the effectiveness of MoPLEx for tackling multi-way rankings from heterogeneous preferences through measuring alignment between gradients.
