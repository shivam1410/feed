---
title: "Data-DPO: Direct Preference Optimization for Target Model Data Selection in LLM Post-Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.16926"
authors: ["Peng Sun, Yi Yang, Antong Zhang, Chunxiao Li, Yanbo Wang, Dianbo Liu, xin chen, Kai Yu, Lu Chen, Tianfan Fu"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.16926v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.16926v1 Announce Type: new Abstract: Data selection in supervised fine-tuning aims to select a small set of effective samples from large-scale candidate data, reducing training cost while preserving model performance. However, existing methods usually treat data value as a relatively static property, and pay limited attention to the compatibility between data and the capability distribution of the target model. To address this issue, we propose Data-DPO, a target model-oriented SFT data selection method. Data-DPO observes the local training feedback of the target model on different samples through one-step probing, transforms activation differences among samples into pairwise data preferences, and trains a lightweight reward model to learn target-model-aware data preferences. In the final selection stage, Data-DPO further combines target model preference, external quality scores, and marginal diversity to construct a more stable and effective training subset. Experimental results on Vision-Flan and LLaVA-CoT show that Data-DPO consistently outperforms existing data selection baselines under multiple data budgets and stably surpasses full data training performance.
