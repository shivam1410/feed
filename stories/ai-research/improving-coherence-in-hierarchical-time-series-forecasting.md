---
title: "Improving Coherence in Hierarchical Time Series Forecasting using Structured Temporal Fusion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28553"
authors: ["Ruchi Pakhle"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.28553v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28553v1 Announce Type: new Abstract: In many real-world applications, such as retail sales, energy usage, and supply chain planning, forecasting is performed across hierarchical structures. These structures often represent aggregations (e.g., products to categories to regions), where forecasts must not only be accurate but also coherent, meaning that lower-level predictions sum correctly to higher-level forecasts. Traditional statistical methods, such as Bottom-Up and MinT, enforce coherence through post-processing but fail to model complex nonlinear temporal dependencies and covariate interactions. We propose Hierarchical Temporal Fusion (HTF), a novel extension of the Temporal Fusion Transformer (TFT) that integrates structured hierarchical embeddings with a coherence-aware loss function to ensure consistent forecasts across all levels of a hierarchy. Rather than applying reconciliation after forecasting, HTF embeds coherence directly into the training objective. The coherence loss penalizes the difference between aggregated child forecasts and their corresponding parent forecasts during training, enabling the model to learn both temporal dynamics and structural consistency simultaneously. We evaluate HTF on two publicly available benchmark datasets: the M5 Walmart forecasting dataset and a publicly available hierarchical energy consumption dataset. Results demonstrate that HTF substantially reduces forecast incoherence while improving forecasting accuracy compared with classical reconciliation methods and deep learning baselines. In addition, attention visualization and embedding analysis provide insight into how temporal and structural information contribute to hierarchical forecasting performance.
