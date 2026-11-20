---
title: "Watch Where You Linearize: Predicting and Correcting Model-Merging Interference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25000"
authors: ["Ido Nitzan Hidekel, Dan Raviv"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.25000v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Model merging combines separately fine-tuned models by adding their task vectors to a shared backbone. Interference is typically assessed only after constructing and evaluating a candidate merge, making coefficient search expensive. We show that a first-order directional derivative of task A's outputs along task B's vector can predict interference, but only when evaluated at the appropriate model. At the receiver model, this derivative forecasts nearby merges per task and per example, halves the accuracy error of a no-change baseline, and identifies most examples whose predictions flip. For full multi-task merges, a single evaluation is insufficient; two evaluations along the merge path are needed. At the shared pretrained backbone, however, the derivative is nearly orthogonal to realized changes in our vision experiments and only partly predictive in LoRA language-model pilots. Controls link this failure to displacement along the receiver's own task vector, not simply parameter distance; the mismatch appears within the first few dozen fine-tuning steps. Freezing receiver-local responses produces a surrogate affine in the merge coefficients. We use it to construct LR-Merge, a label-free correction that optimizes coefficients through convex teacher matching on unlabeled probes, without backpropagation through merged networks. LR-Merge improves all tested closed-form, isotropic, and sparsified base mergers, with gains generally increasing as more tasks are merged. Using pretrained rather than receiver-local responses instead degrades the base merge. LR-Merge matches exact teacher matching through a merged network, which takes roughly three times longer to converge and performs similarly at an equal compute budget. Once built, the surrogate answers new coefficient and task-subset queries in seconds.
