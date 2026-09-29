---
title: "An RL View of OPD: Least Square Policy Distillation for Sample-Efficient LLM Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35505"
authors: ["Shangzhe Li", "Yuxiao Yang", "Tianrun Yu", "Kaixiang Zhao", "Xiaoyun Wang", "Taylor W. Killian", "Weitong Zhang"]
date: "2026-09-27T20:00:00.000Z"
score: 70
guid: "2609.35505"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35505.png"
generated: "2026-09-29T19:09:35+05:30"
---

We study on-policy distillation (OPD) through the lens of reinforcement learning, establishing a connection between the reverse-KL objective in OPD and KL-regularized policy optimization. Building on this connection, we introduce Least-Square Policy Distillation (LSPD), an RL-inspired framework that brings optimistic exploration and off-policy data reuse from value-based RL into policy distillation. LSPD preserves policy diversity through exploration while improving rollout efficiency by repeatedly learning from previously collected trajectories. Our theoretical analysis connects LSPD to optimistic value-based learning and shows that its idealized formulation achieves a sharp mathcal O(log K) regret bound under online exploration. Empirically, LSPD consistently outperforms existing distillation baselines across six mathematical reasoning benchmarks and diverse teacher-student settings, with average gains of +1.59 points in Avg@16. Remarkably, through Pass@k evaluations up to k=64, we found that LSPD better preserves policy diversity by achieving stronger performance as k grows. Its fully off-policy variant achieves comparable performance to vanilla OPD using only the first 25% of rollout batches. Together, these results provide an RL perspective on OPD that offers both a principled interpretation and a practical route toward more effective and rollout-efficient language model distillation.
