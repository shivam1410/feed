---
title: "ChronoSSM: Training for Temporally Aware Representations in Autoregressive State Space Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10120"
authors: ["Adrien Schoen, Nachiketa Ratnakar Patil, Arjun Bhagoji, Francesco Bronzino"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10120v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10120v1 Announce Type: new Abstract: Modern sequence models, from Transformers to State Space Models, have enabled powerful generative modeling across diverse domains, yet they are typically trained to predict what happens while treating when it happens as a secondary concern. In data-mining settings where events are associated with explicit timing information, this separation can limit temporal reasoning, anomaly detection, and faithful reconstruction of event chronology. A common strategy is to treat timing as an auxiliary signal, training a separate timing model using representations learned solely for event prediction. However, this two-stage approach implicitly assumes that representations optimized for event prediction already contain sufficient temporal structure. We introduce ChronoSSM, an autoregressive State Space Model (SSM) that jointly models events and timestamps with a shared backbone trained using combined token and temporal generation objectives. We compare the joint regime, where temporal supervision updates the backbone, with the two-stage regime, where timing is learned only using the frozen event representations. Across four domains spanning dense and partial timestamp supervision, joint training consistently makes inter-arrival information more recoverable from frozen representations without any systematic degradation in content-generation quality overall. Our results show that temporal supervision can produce more temporally informative representations without materially degrading autoregressive event modeling.
