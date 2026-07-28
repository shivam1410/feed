---
title: "DecoupleMix: Decoupled Ratio Search and Convex Allocation for Scalable VLM Data Recipes"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.24516"
authors: ["Jiahao Xie", "Zhongbin Guo", "Qianle Wang", "Ruiqi Lu", "Dongling Xiao", "Wanxuan Sun", "Cheng Yang"]
date: "2026-07-26T20:00:00.000Z"
score: 70
guid: "2607.24516"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.24516.png"
generated: "2026-07-28T19:07:22+05:30"
---

While data curation for Vision Language Models (VLMs) is increasingly active, public practice for constructing pretraining mixtures remains largely heuristic: practitioners stack datasets that pass quality filters, set cross-domain ratios by intuition, and lack a principled, attributable criterion for admitting new data, while frontier recipes remain undisclosed. We formulate data construction as a systematic mixture-optimization problem and turn it into a reproducible engineering discipline by decoupling the mixture into two orthogonal sub-problems: inter-class ratios across capabilities and intra-class ratios within a category. For inter-class allocation, we use a single-variable iterative search; for intra-class composition, we apply a multidimensional, dataset-level assessment scoring Quality and Difficulty, and formulate selection as a constrained convex optimization with a diversity objective. The DecoupleMix framework delivers two critical capabilities: guiding what data to collect next and rendering dataset validation a controlled, attributable experiment. Experiments show our approach consistently surpasses heuristic baselines. Moreover, optimal ratios discovered on small-scale proxies transfer seamlessly to larger scales without retuning. Using 80B additional multimodal continue-pretraining tokens, our VLM is competitive with strong open-source models trained with substantially larger multimodal budgets.
