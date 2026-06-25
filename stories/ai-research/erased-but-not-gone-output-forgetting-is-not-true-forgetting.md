---
title: "Erased, but Not Gone: Output Forgetting Is Not True Forgetting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.25001"
authors: ["Teresa Pui Yee Yong, Win Kent Ong, Chee Seng Chan"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.25001v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.25001v1 Announce Type: new Abstract: Machine unlearning (MU) is commonly judged by output forgetting, such as low forget-set accuracy or reduced logit-level membership inference. But if output-level success can coexist with retraining-inconsistent residuals in representation space, what kind of forgetting are current evaluations actually certifying? We study this question through retraining-consistent representation forgetting, using the retrained model (i.e., trained from scratch without the forget data) as an operational reference for correct forgetting. Across multiple unlearning methods, datasets, and models, our theoretical analysis and empirical results show that standard output-level evaluation can systematically overestimate the success of unlearning. Under this stronger lens, current methods often appear forgotten at the output layer while exhibiting a structured mismatch relative to retraining. They partially align with retraining on forget samples, remain more inconsistent on retain samples, and leave residual discrepancy concentrated along retraining-related directions rather than diffuse in representation space. This structured mismatch is characterized by forget/retain asymmetry, directional mismatch, and concentrated residuals along retraining-related directions. These results suggest that current MU is often evaluated for apparent forgetting rather than retraining-consistent forgetting. More broadly, retraining reveals what output forgetting hides.
