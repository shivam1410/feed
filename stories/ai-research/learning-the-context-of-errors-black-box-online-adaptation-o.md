---
title: "Learning the Context of Errors: Black-Box Online Adaptation of Time Series Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14222"
authors: ["Xilin Dai, Yiding Liu, Hongjie Xia, Yifan Hu, Zewei Dong, Jiang-Ming Yang, Qiang Xu"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.14222v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14222v1 Announce Type: new Abstract: The rapid evolution of Time Series Foundation Models (TSFMs) has advanced zero-shot forecasting across diverse domains. Inspired by the current form of Large Language Models, future TSFMs may be offered as commercialized, closed-source API services. However, many existing online adaptation methods still rely on white-box access for parameter fine-tuning or gradient backpropagation. This paradigm mismatch raises a question: In black-box online adaptation for TSFMs, what should we learn? We answer this with an insight: the predictive errors of the base model are conditioned on both the input and output of the base model (i.e., the context of errors). To validate this insight, we propose ORCA (Online Residual Contextual Adaptation). We conduct extensive experiments across 5 state-of-the-art TSFMs and 8 datasets to demonstrate the effectiveness of our approach. Furthermore, through ablation studies, we quantitatively analyze the impact of different adapter learning hypotheses on the final adaptation performance in black-box online adaptation. Code available at https://github.com/Fifthky/ORCA.
