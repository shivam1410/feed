---
title: "Sample Complexity of Multicalibration for Multilevel Properties"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.04288"
authors: ["Jiuyao Lu, Krishnakumar Balasubramanian, Aleksandr Podkopaev, Shiva Prasad Kasiviswanathan"]
date: "Thu, 06 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.04288v1"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

arXiv:2608.04288v1 Announce Type: new Abstract: Calibration requires a predictor to be unbiased after conditioning on its own predictions. Multicalibration asks for this guarantee simultaneously across a collection of groups. Many prediction tasks ask for several related features of the same conditional outcome distribution: variance is defined relative to the mean, skewness relative to both mean and variance, and conditional value at risk relative to a quantile. We study multicalibration for a sequence of $k$ properties in which each property is identifiable once the preceding properties are fixed. This framework includes Bayes pairs but does not require the properties to arise from a single loss. For every fixed $k\ge2$, we establish matching upper and lower sample-complexity bounds up to logarithmic factors under regularity conditions. Even with only polylogarithmically many binary groups, achieving multicalibration error $\varepsilon$ requires $\widetilde{\Omega}(\varepsilon^{-(k+2)})$ samples. Conversely, for any finite group family $\mathcal G$, we give a randomized learner using $O(\varepsilon^{-(k+2)}+\varepsilon^{-2}\log|\mathcal G|)$ samples. Thus the sample complexity is $\widetilde{\Theta}(\varepsilon^{-(k+2)})$ for polynomial-size group families. We instantiate the theory for three canonical examples.
