---
title: "Bellman-Consistent Trajectory RL for LLM Arithmetic Reasoning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.21060"
authors: ["Lianfa Li"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.21060v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

To address sparse terminal rewards in LLM arithmetic reasoning, we propose a Bellman-consistent trajectory RL method. Our framework introduces Trajectory Bellman Residual Minimization (TBRM) to transform sparse rewards into dense token-level signals. We integrate a Reinforce Leave-One-Out (RLOO) group strategy to reduce gradient variance of Bellman residuals and use hindsight goal relabeling to accelerate intermediate learning. Evaluated on the Countdown task, our method alleviates optimization bottlenecks and stabilizes gradient variance significantly better than GRPO. The TBRM-RLOO framework boosts Pass@1 to 0.55--0.64 and achieves a state-of-the-art Pass@16 accuracy of 76.0--84.0\%, outperforming the SFT, IPO/DPO, and RLOO baselines. Our approach demonstrates exceptional single-sample efficiency and successfully circumvents standard performance plateaus via test-time scaling.
