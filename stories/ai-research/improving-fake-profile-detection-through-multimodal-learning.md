---
title: "Improving Fake Profile Detection Through Multimodal Learning and Research-Guided Feature Integration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23926"
authors: ["Jean Claude Hirwa, Jamiu Dahunsi, Candide Giramata, Lowami Uwimana, Thierry Henry Ishimwe"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.23926v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Fake accounts continue to undermine online platforms, yet it remains unclear whether multimodal learning offers meaningful improvements over strong metadata baselines or graph-based approaches. In this work, we study bot detection by integrating textual, visual, and account metadata signals on the TwiBot-22 benchmark using a subsample of 30,000 users. We propose a multimodal framework combining pretrained textual (XLM-RoBERTa) and visual (CLIP) embeddings with structured account-level features such as follower counts, posting frequency, and account age, and evaluate multiple modality combinations using CatBoost alongside a Relational Graph Convolutional Network (R-GCN). Results show that metadata alone is highly predictive, while multimodal fusion yields only marginal and largely statistically insignificant gains. The graph-based model underperforms classical variants under the subsampled graph conditions of this study. Overall, our findings suggest that under practical constraints, feature quality and metadata richness matter more than fusion complexity.
