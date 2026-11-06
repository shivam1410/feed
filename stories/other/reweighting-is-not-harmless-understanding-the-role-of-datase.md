---
title: "Reweighting is not Harmless: Understanding the Role of Dataset Characteristics"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07258"
authors: ["Amalia Ionescu, Jose G. Hernandez, Emily F. Wong, Anil K. Saini, Jason H. Moore, Tiffani J. Bright"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07258v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Reweighting is a widely used pre-processing method for promoting discrimination-free model behavior by assigning different weights to data points during model training. While it is often credited with improving fairness, particularly by mitigating systematic underestimation for underrepresented groups, it can also introduce unintended harms under certain data conditions. Using controlled simulations that vary group size and baseline event prevalence, we show how reweighting can yield misleading improvements in fairness by reducing underestimation for one group while introducing it for another. Across 3,000 simulated datasets with event prevalence of 7-14%, reweighting improved parity in positive classification and false negative rates (FNR) between groups, but did so partly by decreasing positive classifications and increasing FNR for the group with higher baseline prevalence. These effects were most pronounced when that group was a minority: its FNR rose by 6 percentage points, approximately 82 additional missed cases per 10,000 group members, and roughly three-quarters of the improvement in FNR parity came from this increase rather than from gains for the other group. The pattern held across six classifiers, from logistic regression to neural networks, while overall accuracy was essentially unchanged, leaving the shift invisible in aggregate performance metrics. These findings mirror patterns reported in real-world applications and underscore the critical role of data characteristics in shaping the impact of this fairness intervention. While reweighting may create desirable outcomes in some applications, practitioners should critically evaluate it relative to their problem area and goals. Specifically, when the goal is to reduce underestimation in one group without introducing underestimation in another, reweighting may not be the appropriate approach.
