---
title: "Online State-Representation Adaptation under Synthetic Interaction-Cue Remapping"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23836"
authors: ["Bin Yin"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23836v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

When cues change what they predict, continuing to update a learned mapping may help an agent choose the appropriate action. We tested this in a one-step synthetic task by comparing a logistic state predictor that continued to learn from state labels with the same predictor frozen at transfer. We evaluated ten conditions in six held-out environments, with 1,296 paired runs per condition and 1,296,000 transfer records in total. Late action accuracy was 93.39% with online updates and 64.63% with frozen coefficients, a paired difference of 28.76 [8.73, 53.19] percentage points (95% environment-bootstrap interval). A direct policy reached 95.65% using the same predictions with a different action threshold. A contextual bandit reached 94.23% and earned more cumulative utility than the adaptive predictor. The bandit used the reward of its chosen action, which in this task reveals the true state when combined with that action. Weights based on development history lowered cumulative utility relative to neutral weights (difference -3.45 [-4.48, -2.43]). The adaptive predictor outperformed its frozen counterpart in late accuracy in each of the six test environments. The other comparisons show how the choice of action threshold and the information available in feedback affect what can be attributed to online adaptation.
