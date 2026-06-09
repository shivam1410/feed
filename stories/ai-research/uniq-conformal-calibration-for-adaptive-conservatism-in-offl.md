---
title: "UNIQ: Conformal Calibration for Adaptive Conservatism in Offline Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07592"
authors: ["Aditya Upadhyay"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.07592v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07592v1 Announce Type: new Abstract: Offline reinforcement learning requires careful conservatism to mitigate distribution shift, yet most existing methods apply a fixed penalty uniformly across all states regardless of local data coverage. We present UNIQ (Uncertainty-Informed Quantile), an offline RL method that introduces state-adaptive conservatism through conformally calibrated uncertainty estimation. Built on the Implicit Q-Learning (IQL) backbone, UNIQ trains a multi-expectile value ensemble, computes distribution-free uncertainty estimates using split conformal prediction, and maps the resulting signal to a state-dependent expectile that relaxes conservatism in well-covered regions while strengthening it in uncertain regions near the data frontier. On D4RL MuJoCo benchmarks, UNIQ consistently improves over IQL, with the largest gains observed on Walker2d and replay-heavy tasks. At the same time, UNIQ operates at near-IQL memory cost (approximately 250 MB peak VRAM), providing roughly a 10x reduction compared to EDAC. Rather than pursuing overall state-of-the-art performance, we position UNIQ as a practical mechanism contribution that improves the performance-efficiency trade-off in offline reinforcement learning.
