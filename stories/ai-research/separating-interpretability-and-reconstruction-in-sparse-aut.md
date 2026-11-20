---
title: "Separating Interpretability and Reconstruction in Sparse Autoencoders"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25165"
authors: ["Anh Tien Nguyen, Dimitris Samaras, Mahdi S. Hosseini"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.25165v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Sparse Autoencoders (SAEs) are effective tools for mechanistic interpretability by decomposing neural representations into sparse and interpretable features. However, a single sparse representation in traditional SAEs is responsible for both reconstruction fidelity and interpretability, which are not guaranteed to align. To separate these objectives, we propose DualSAE, a modular framework that augments standard SAEs with a plug-in Residual Branch. A standard SAE serves as the Sparse Branch, learning a sparse code that contains the dominant semantics of the input. The added Residual Branch models the non-semantic information omitted by the Sparse Branch. We ensure that the contributions of the two branches towards the overall reconstruction have minimal overlap through a decorrelation loss. We also adopt a two-stage training strategy that first stabilizes sparse representation learning before coupling with the Residual Branch. Across diverse encoder-SAE configurations on two vision datasets and two language corpora, DualSAE achieves mean relative improvements of approximately 29% in reconstruction fidelity and 34% in interpretability (measured by monosemanticity score). Moreover, with more interpretable representations, DualSAE yields consistent performance gains in the downstream applications of topic modeling, hypothesis generation, and LLM steering. Qualitative analysis further suggests that the Sparse Branch indeed preserves dominant semantic content, whereas the Residual Branch captures non-semantic information to improve reconstruction fidelity.
