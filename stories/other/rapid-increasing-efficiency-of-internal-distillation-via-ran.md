---
title: "RAPID: Increasing Efficiency of Internal Distillation via Randomized Methods"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04081"
authors: ["Ryan Swift, Konstantinos Psounis"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04081v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Knowledge distillation is a technique used to transfer the expertise of large teacher models into small, efficient student models. Recent advances have integrated the distillation of internal activations, more directly training students to learn similar representations as the teacher. One of the core challenges of internal distillation is the dimensional incompatibility between the student and teacher internal representations. Existing methods add learnable matrices to project the larger teacher activations into the smaller representation space of the student. This is a notable point of inefficiency, as learning additional parameters for the projectors increases training costs, only for them to be discarded immediately after training. We introduce RAPID (RAndomized Projection for Internal Distillation) a novel distillation methodology which eliminates the wasteful projection learning by leveraging randomized methods. RAPID utilizes an efficient transform construction based on the Johnson-Lindenstrauss lemma to compress the teacher representations into the student embedding space with strong theoretical guarantees of structural preservation. RAPID also employs a combination of exponential moving average (EMA) and homoscedastic uncertainty weighting in a novel multi-objective function designed for internal distillation. Our experiments in post-training for reasoning demonstrate that RAPID increases training efficiency by as much as 21.1% while maintaining performance comparable to existing methods.
