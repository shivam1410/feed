---
title: "Rank-Efficient LoRA via Joint Tangent-Space Optimization under Isotropic Curvature"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12123"
authors: ["Zihan Zhu, Zhehang Du, Xuyang Chen, Tim Tsz-Kit Lau, Jiayuan Wu, X. Y. Han, Qi Long, Weijie Su"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12123v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12123v1 Announce Type: new Abstract: Low-Rank Adaptation (LoRA) is an effective approach for adapting large pretrained models by learning low-rank weight updates. In practice, the LoRA rank is used to control an adapter's parameter budget and representational capacity. We show that this view is incomplete: while the nominal rank determines the representational capacity, the optimizer shapes how much of that capacity is used in the induced weight-space updates. In a case study of GPT-2 adaptation with LoRA, we observe a strong rank-dependent optimizer effect. Despite using the same nominal rank, AdamW often produces per-step updates with concentrated singular spectra and low effective rank, whereas Muon uses a richer set of directions and benefits more consistently from increasing LoRA rank. These observations motivate ISO-LoRA, an optimizer that couples the LoRA factor updates through spectral descent on the induced tangent perturbation in weight space. ISO-LoRA promotes updates that distribute energy more evenly across singular directions, improving rank utilization while preserving compatibility with the LoRA parameterization. We complement this design with theoretical guarantees showing that ISO-LoRA can achieve higher effective rank than standard factor-wise optimizers through a one-step analysis under a stylized spiked-gradient model. We validate this design on language-model adaptation across 0.1B-7B-parameter models, where ISO-LoRA improves effective rank and downstream performance, with the strongest gains at moderate-to-large LoRA ranks. Our results highlight rank utilization as a key factor in LoRA optimization and suggest that optimizer design offers an important path toward stronger parameter-efficient adaptation.
