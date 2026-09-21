---
title: "Understanding LLM Quantization through Activation-Guided Compensation and Orthogonal Residuals"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21450"
authors: ["Yamato Narita, Issei Sato"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.21450v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21450v1 Announce Type: new Abstract: Post-training weight-activation quantization reduces the memory and inference costs of large language models, but aggressive W4A4 quantization remains difficult because activation outliers degrade effective quantization resolution. Although weight optimization, channel-wise scaling, and orthogonal rotation mitigate this problem, the error components they address and their relationship remain unclear. Using an exact decomposition of local weight-activation quantization error into an activation-guided weight compensation term and an orthogonal residual, we bound the residual using persistent channel-wise outlier and regular activation quantities. This decomposition clarifies which error components can be addressed by weight compensation and which require transformation design. We then use the residual bounds to derive practical guidelines for applying randomized Hadamard rotation, sign selection, and channel scaling. In particular, the analysis explains how random signs suppress constructive interference among persistent outlier channels, how sampling multiple sign patterns can improve transformation selection, and how second-moment balancing leads to an $L_2$ scaling rule while a further relaxation recovers SmoothQuant-style $L_\infty$ scaling. We evaluate these guidelines through backpropagation-free configurations across eight Llama and Mistral models, obtaining performance competitive with gradient-trained SpinQuant.
