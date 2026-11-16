---
title: "Disentangling Forgetting from Utility: Lightweight LLM Unlearning via Orthogonal Null-Space Projection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17864"
authors: ["Xiuyuan Wang, Weiming Liu, Zongxin Yang, Fan Wang, Liemiao Jin, Rubin Qin, Wei Chen, Bin Shi, Chaochao Chen, Xiaolin Zheng"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17864v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Large Language Models (LLMs) pose significant security risks by retaining private or hazardous information, creating an urgent need for unlearning techniques that excise specific knowledge without compromising general utility. However, prevailing fine-tuning-based unlearning methods struggle to achieve this balance, often suffering from computational inefficiency and unintended utility degradation due to the entangled nature of knowledge within model parameters. To disentangle forgetting from utility, we propose UUE, a theoretically grounded framework that reformulates unlearning as controllable model editing. First, UUE projects parameter updates into the orthogonal left null space of retained knowledge representations, strictly ensuring that the editing process causes minimal interference to the model's general capabilities. Second, distinct from targeted mapping, we introduce a convex untargeted objective that derives a closed-form analytical solution to effectively disrupt undesired knowledge by pushing forget-set embeddings toward their antipodal points. We implement UUE via lightweight, pluggable adapters (including a low-rank variant, UUE-L), enabling efficient deployment without modifying the frozen backbone. Extensive experiments on TOFU and WMDP benchmarks demonstrate that UUE and UUE-L achieve superior unlearning efficacy, significantly outperforming existing methods.
