---
title: "Toward Controllable Catalyst Inverse Design via Large-Scale Autoregressive Pretraining"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17445"
authors: ["Dong Hyeon Mok, Jonggeol Na, Seoin Back"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.17445v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17445v1 Announce Type: new Abstract: Inverse design of heterogeneous catalysts remains challenging because catalyst surfaces exhibit substantial structural complexity with coupled surface-adsorbate interactions across a vast chemical space that is difficult to explore efficiently through conventional screening alone. Although machine learning-based high-throughput screening has accelerated catalyst discovery, its efficiency inevitably declines as the search space grows, motivating the development of generative models that can directly construct catalysts with target properties. Here, we present a conditional catalyst generative model based on the Generative Pretrained Transformer architecture with a numerical embedding layer that enables the generation of catalyst structures conditioned on both categorical and continuous properties within a single autoregressive framework. The model was pretrained on 133 million catalyst structures and subsequently fine-tuned on approximately 460,000 optimized structures with associated categorical properties and binding energies for conditional generation. The resulting model achieved 98% structural validity, 95% optimization validity, and high categorical condition fidelity, with a 93 % joint match rate for adsorbate type and composition. For binding energy conditioning, the match rate of approximately 20% represents a four-fold improvement over the baseline training distribution, and the generated distributions shift systematically toward the target values, enabling a 1.5 to 4-fold improvement in screening efficiency for reaction-targeted catalyst discovery without additional fine-tuning. These results show that large-scale autoregressive pre-training, combined with explicit property conditioning, provides a practical route toward controllable catalyst generation and accelerated catalysts discovery.
