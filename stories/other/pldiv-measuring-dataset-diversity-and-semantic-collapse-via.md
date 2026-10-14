---
title: "PLDiv: Measuring Dataset Diversity and Semantic Collapse via Persistence Landscapes"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14031"
authors: ["Yang Ba, Michelle V. Mancenido, Rong Pan"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14031v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Modern data pipelines increasingly combine human-created and human-curated data with AI-generated data for model training and evaluation. As datasets grow, they often add semantically redundant samples rather than expanding semantic coverage, which deteriorates the quality of the whole dataset. Existing diversity metrics primarily summarize lexical variation, entropy, or pairwise similarity, but provide limited characterization of the shape of the underlying data distribution. In this paper, we propose PLDiv, a diversity metric derived from persistence landscapes that quantifies the structural organization of a dataset from its geometric representation. PLDiv summarizes how data neighborhoods evolve as nearby samples progressively connect, producing an interpretable scalar measure of structural diversity without requiring task-specific supervision. Whether measuring intrinsic diversity in text generations or image embeddings, or detecting semantic collapse in instruction datasets and reasoning trajectories, PLDiv performs competitively against evaluated baselines and aligns strongly with diversity labels during semantic collapse. Consequently, it effectively supports applications in synthetic data monitoring, dataset construction, data augmentation, and generative model evaluation.
