---
title: "MGUP: A Momentum-Gradient Alignment Update Policy for Stochastic Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17526"
authors: ["Da Chang, Ganzhao Yuan"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.17526v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17526v1 Announce Type: new Abstract: Efficient optimization is essential for training large language models. Although intra-layer selective updates have been explored, a general mechanism that enables fine-grained control while ensuring convergence guarantees is still lacking. To bridge this gap, we propose \textbf{MGUP}, a novel mechanism for selective updates. \textbf{MGUP} augments standard momentum-based optimizers by applying larger step-sizes to a selected fixed proportion of parameters in each iteration, while applying smaller, non-zero step-sizes to the rest. As a nearly {plug-and-play} module, \textbf{MGUP} seamlessly integrates with optimizers such as AdamW, Lion, and Muon. This yields powerful variants such as \textbf{MGUP-AdamW}, \textbf{MGUP-Lion}, and \textbf{MGUP-Muon}. Under standard assumptions, we provide theoretical convergence guarantees for \textbf{MGUP-AdamW} (without weight decay) in stochastic optimization. Extensive experiments across diverse tasks, including MAE pretraining, LLM pretraining, and downstream fine-tuning, demonstrate that our \textbf{MGUP}-enhanced optimizers achieve superior or more stable performance compared to their original base optimizers. We offer a principled, versatile, and theoretically grounded strategy for efficient intra-layer selective updates, accelerating and stabilizing the training of large-scale models. The code is publicly available at https://github.com/MaeChd/MGUP.
