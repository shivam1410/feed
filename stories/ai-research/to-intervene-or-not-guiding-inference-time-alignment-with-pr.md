---
title: "To Intervene or Not: Guiding Inference-time Alignment with Probabilistic Model Blending"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11201"
authors: ["Jin Gan, Xin Li, Jun Luo"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.11201v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11201v1 Announce Type: new Abstract: The wide deployment of LLMs has made model alignment necessary to make newly trained models safely and effectively respond to user instructions. Among different methods, inference-time alignment is often cheaper as it intervenes (i.e., offers guidances) only during output generation. Existing proposals apply guidances extracted from certain aligned models without properly assessing their reliability. Nonetheless, our systematic evaluation reveals that guidance effectiveness varies drastically across models; since ineffective guidances lead to further confusion and thus further interventions, the resulting excessive interventions typically indicate poor performance. To make interventions more effective and thus more efficient, we introduce BlendIn, an inference-time alignment framework that shifts from binary decisions to creating hybrid distributions integrating both models' knowledge. BlendIn stabilizes inference-time alignment by performing quality-aware alignment and proportionally weighting each model's contribution based on reliability. Compared with existing works, it preserves beneficial guidance while downweighting unreliable suggestions. BlendIn provides both diagnostic signals and mitigation strategies for misaligned guidance, achieving consistent and up to 50% performance improvement on challenging model pairs. Our code is available at: https://github.com/DecayingSeart/BlendIn.
