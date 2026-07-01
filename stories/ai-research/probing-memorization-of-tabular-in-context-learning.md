---
title: "Probing Memorization of Tabular In-Context Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31208"
authors: ["Francesco Capano, Jonas B\\\"ohler"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.31208v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31208v1 Announce Type: new Abstract: Large tabular models (LTMs), i.e., tabular foundation models leveraging in-context learning (ICL), achieve state-of-the-art performance on tabular tasks. While LLMs are known to unintentionally memorize training data, the memorization dynamics of LTMs remain largely unexplored. We investigate the potential for parametric memorization in tabular ICL. We introduce ICLMEM, a probing framework designed to separate context-based predictions from parametric memorization. Our zero-information multiple-choice context strips away valid contextual patterns to force the model to fall back on its parametric memory. Our controlled fine-tuning setup establishes membership ground truth and accounts for common pitfalls, e.g., distribution shift, feature contamination, base-rate fallacy, and the pre-trained base model acts as reference to calibrate for sample difficulty. Our controlled evaluation on a leading real-world-trained LTM detects moderate memorization signals in 8 out of 10 tasks ($\text{AUC}$ up to $0.67$ and TPR at $1\%$ FPR $>0.1$). Notably, memorization signals are strongest for low-cardinality and binary tasks. However, they largely vanish under realistic training conditions. Our findings show LTM memorization signals under specific circumstances (single-task fine-tuning with fixed samples across many epochs and small query size). To protect sensitive data, appropriate measures must be taken, which we discuss.
