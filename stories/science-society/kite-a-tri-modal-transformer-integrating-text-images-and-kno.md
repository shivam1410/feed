---
title: "KITE: A Tri-Modal Transformer Integrating Text, Images, and Knowledge Graphs for Fake News Detection"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07651"
authors: ["Kevin Patel, Shashi Bhushan Jha"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.07651v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07651v1 Announce Type: new Abstract: Traditional fake news detection methods are falling behind as multimodal misinformation grows more advanced, seamlessly blending deceptive text, manipulated visuals, and factually incorrect claims. Most prior work focuses on text-image fusion or applies external knowledge only as a post-processing step, limiting their ability to detect deeper semantic inconsistencies. In this paper, we introduce KITE (Knowledge-Integrated Text-Image Encoder), a tri-modal fake news detection framework that jointly models textual, visual, and factual knowledge representations. KITE leverages Roberta [23,14] and CLIP [24] for linguistic and visual encoding, while a Graph Attention Network (GAT) processes structured facts retrieved from Wikidata. KITE uses cross-modal attention [9] within a multimodal transformer to integrate text, visual, and knowledge features, helping it understand how each modality relates to one another. Modality-specific confidence scores are generated alongside the final prediction, offering interpretability by indicating which input type most influenced the decision. Evaluations on benchmark datasets demonstrate that KITE significantly outperforms unimodal and bimodal baselines, particularly in scenarios involving image-text mismatches or contradictions with external knowledge.
