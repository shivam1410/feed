---
title: "Zero-shot rib design: merging training-free generative prior with topology optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10643"
authors: ["Yongmin Kwon, Namwoo Kang"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10643v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10643v1 Announce Type: new Abstract: Natural load-bearing patterns such as leaf venation, trabecular bone, and spider webs achieve high stiffness per unit mass, yet classical topology optimizers rarely reach such geometries, and few let engineers express structural design intent through natural language. This work treats a frozen text-to-image diffusion model as a training-free source of design knowledge and distills it into the physics loop of density-based topology optimization via score distillation sampling, so that a text prompt becomes an explicit, machine-interpretable representation of engineer intent. The prompt-induced generative gradient and the finite element sensitivity are combined at every iteration, letting physics decide which prompt-induced features survive. In 245 primary SDS runs spanning four geometric domains and two physics regimes, 38 of 49 prompt--domain combinations achieved statistically significant compliance reductions (up to $-31.5\%$ mechanical and $-23.0\%$ thermoelastic), outperforming gradient-based baselines. Cross-domain morphological analysis identifies a recurring structural signature of improvement: in most domains the generative prior suppresses dead-end branches in the rib skeleton, with endpoint--compliance correlation $r = +0.56$ to $+0.99$. A Heaviside projection with $\beta$-continuation resolves a pronounced intermediate-density tendency in this diffusion--physics coupling ($42.6\%$ to $<3\%$), and an automated skeleton-based pipeline converts optimized density fields into \rev{candidate geometry ready for computer-aided design. By retargeting the generative prior across domains, loading conditions, and physics objectives through a change of text prompt, with each new problem's physics setup specified separately, the framework uses a pretrained generative model as a reusable, training-free prior for engineering design.
