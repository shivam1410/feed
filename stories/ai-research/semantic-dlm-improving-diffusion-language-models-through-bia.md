---
title: "Semantic DLM+: Improving Diffusion Language Models through Bias-variance Trade-off in Transition Kernel Design"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15327"
authors: ["Keyue Jiang, Yuxiang Wang, Yanan Zhao, Xiang Yu, Qifang Zhao, Bohan Tang, Baojian Zhou, Yanghua Xiao, Lin Qu, Xiaoxiao Xu"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.15327v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15327v1 Announce Type: new Abstract: Diffusion Language Models (DLMs) have demonstrated strong scaling capacity as alternatives to autoregressive language models. However, their performance is highly sensitive to the choice of transition kernels, and poorly designed kernels can lead to issues like training instability, slow convergence, and biased sampling. In this paper, we study this sensitivity through a principled analysis of generalization error and identify three critical factors: asymptotic bias (difficulty in approximating the posterior distribution), exposure bias (error propagation during sampling), and optimization variance induced by kernel dispersion. We further compare different transition kernels: masking diffusion yields sparse and easier posterior-approximation targets, while uniform diffusion provides stronger sampling-side repair but induces harder approximation. Motivated by this trade-off, we revisit a previously overlooked variant, semantic DLM (SemDLM), where the transition kernel corrupts tokens to neighborhoods that are semantically similar. Our theory suggests that SemDLM can serve as a plausible middle ground by reducing the posterior approximation difficulty of uniform diffusion while retaining repair ability. However, we find that SemDLM suffers from a semantic basin problem, where sampling repeatedly stays within a semantic region and produces low-diversity text. To address this, we propose SemDLM+, which adds a global transition and a semantic-frequency penalty during sampling. Experiments on LM1B and OpenWebText show that SemDLM+ improves training dynamics and achieves competitive language modeling and generation quality with satisfactory diversity.
