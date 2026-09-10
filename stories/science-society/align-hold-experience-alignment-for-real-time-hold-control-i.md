---
title: "ALIGN-HOLD: Experience Alignment for Real-Time Hold Control in Large-Scale Ride-Hailing Matching at DiDi"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09685"
authors: ["Zuhao Zhang, Xu Liu, Kai Wan, Zihao Lu, Li Ma, Shuai Li"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.09685v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09685v1 Announce Type: new Abstract: Real-time hold control is a high-leverage mechanism in large-scale ride-hailing systems: by selectively deferring driver-order pairs, the platform can wait for better matching opportunities and improve end-to-end passenger-driver experience. Existing production systems such as EXHOLD learn bandit-based hold policies from handcrafted combinations of trip completion, cancellations, waiting time, and driver effort. However, designing such rewards becomes increasingly difficult as marketplace preferences are heterogeneous and observed passenger-driver behavior can be sparse, noisy, and affected by dynamic supply-demand conditions. We present ALIGN-HOLD, a production-scale experience alignment framework that learns hold policy from implicit marketplace preferences. ALIGN-HOLD constructs complementary preference pairs from order trajectories, driver trajectories, and contemporaneous local matching graphs, and trains an experience Reward Model (RM) using balanced multi-view sampling and model-adaptive hard preference sampling. During simulator-based policy learning, the frozen RM provides a dense, context-dependent reward and supports label-free filtering of low-identifiability interactions whose behavioral feedback is difficult to attribute to matching quality. We deploy ALIGN-HOLD on DiDi's ride-hailing platform and evaluate it in a 28-day randomized A/B experiment, covering approximately 100,000 passenger requests per day. Compared with the deployed production policy, ALIGN-HOLD achieves statistically significant improvements in trip completion rate and driver income, while significantly reducing passenger cancellations before and after driver acceptance. Complementary ablations, RM diagnostics, and behavioral analyses validate the contributions of the proposed components. ALIGN-HOLD has been fully ramped up and is currently serving DiDi's Brazil marketplace.
