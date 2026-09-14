---
title: "Certifying Concept Unlearning in Text-to-Image Diffusion Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12163"
authors: ["Mansi, Luca Marzari, Francesco Leofante"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12163v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12163v1 Announce Type: new Abstract: Existing evaluations of concept unlearning in text-to-image (T2I) diffusion models primarily rely on attack success rates obtained through automated adversarial prompt search. However, these metrics provide only empirical evidence over a finite set of queries and leave residual leakage over the broader prompt space largely unquantified. This limitation can lead to overestimating unlearning effectiveness and underestimating safety risks. To address this gap, we introduce a novel certification framework for T2I concept unlearning that provides high-confidence guarantees with bounded error on residual concept leakage. Our approach combines statistical certification with worst-case analysis along concept-relevant embedding directions to derive explicit upper bounds on leakage probability under user-specified confidence levels. We evaluate our framework across three major concept categories namely NSFW content, artistic styles, and celebrity identities, and six state-of-the-art unlearning methods. Certified leakage bounds consistently exceed standard attack success rates by 16.2%, uncovering substantial residual risks missed by existing evaluation protocols. Crucially, our results demonstrate that empirical attack-based evaluations can significantly underestimate residual leakage and establish certification as a necessary complement for reliable auditing of concept unlearning in T2I diffusion models.
