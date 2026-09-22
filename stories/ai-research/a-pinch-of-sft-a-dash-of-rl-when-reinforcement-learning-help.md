---
title: "A Pinch of SFT, A Dash of RL: When Reinforcement Learning Helps Long-Horizon Advertising Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22194"
authors: ["Aakash Kolekar, Sahika Genc, Bunyamin Sisman, Shahriar Shariat, Shree Vandana Kachroo, Avishek Saha, Qianli Wu, Ari Singer, Benoit Dumoulin"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.22194v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22194v1 Announce Type: new Abstract: Enterprise analytics agents solve long-horizon tool-use problems over distributed business data, requiring retrieval, reasoning, API calls, code execution, and adaptation to intermediate observations. Supervised fine-tuning (SFT) calibrates tool syntax and teacher-supported behavior, whereas reinforcement learning (RL) can explore reward-supported behaviors beyond demonstrations; applied uniformly, however, RL can perturb already-calibrated skills. We study how to balance SFT and RL under production-mirroring beta APIs. We observe that, in our controlled experiment, checkpoint trajectories retrospectively separated into three regimes: Imitation, where SFT captured reliable teacher behavior; Lift, where both stages helped; and Discovery, where useful reward-observable behavior lay outside reliable teacher support. We leverage this prospectively, using teacher support and reward-observable headroom to route features to SFT only, SFT then RL, increased RL allocation, or further environment development. Across 18 subsequent feature-specific experiments, the diagnostic predicted 15/18 observed trajectories. On GPT-OSS 120B, targeted SFT then RL produced positive point estimates on 7/8 advertiser skills relative to a frontier Control; five positive gains had paired 95% confidence intervals excluding zero, while one skill had a confidence-supported regression. The largest gain was non-disclosure (+11.27 points; 95% CI [+9.72, +12.82]). A separate SME audit surfaced that targeted RL reduces standard leakage from 11.8% to 2.9% and adversarial leakage from 22.9% to 6.8% relative to SFT while preserving actionability (86.2% to 85.7%). In a matched uniform-versus-targeted comparison with shared rewards and optimization, targeted RL improved the seven-skill mean delta from +1.62 to +3.57 while using 43% less incremental RL compute.
