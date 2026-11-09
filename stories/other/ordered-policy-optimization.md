---
title: "Ordered Policy Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08936"
authors: ["Dongkyu Derek Cho, Pan Xu"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08936v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Proximal Policy Optimization (PPO) stabilizes policy updates by clipping the importance ratio between the new policy and the data-collecting policy. The standard rule uses one fixed clipping range for all samples. While this choice offers simplicity and effectiveness, it fails to distinguish statistically harmful extreme ratio values from large, yet tolerable changes. We study how to adapt the clipping radius to the reliability of the induced importance ratio distribution. Our case study demonstrates that reliable updates require controlling these extreme ratios, rather than merely verifying that individual ratios fall within a fixed interval. Motivated by this observation, we propose Ordered Policy Optimization (\textsc{OPO}). In each minibatch, \textsc{OPO} sorts the importance ratios, selects the extreme ratios that potentially have the largest effect on the update, and assigns them adaptive sample-wise radii instead of using the fixed clipping radius. These radii are derived from a prescribed tail profile, which specifies desired target values for the selected extreme ratios. The resulting objective remains first-order and requires only minibatch sorting and a modified policy loss. Experiments conducted on MuJoCo and Atari benchmarks demonstrate that this simple modification achieves strong performance relative to established baselines.
