---
title: "Interpreting Diffusion Model Activations in Natural Language"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28621"
authors: ["Yukinori Yamamoto, Kotaro Yoshida, Ryotaro Shimizu"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28621v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Interpreting the intermediate activations of diffusion models (DMs) is key to understanding how they generate images. Existing interpretability methods for DMs provide limited support for open-ended interrogation, making it difficult to extract human-interpretable insights. We extend LatentQA, the task of answering natural-language questions about Large Language Model activations, to DM activations. We introduce the Diffusion-specific Activation Oracle (DAO), which translates DM activations into natural-language answers to open-ended questions about the ongoing generation. Our experiments show that DAO can effectively describe the content of the final image from activations at early denoising steps. Additionally, we demonstrate that DAO captures the structure of the DM's activation space well enough to steer image generation toward target attributes. Furthermore, we show that attribution patching through DAO identifies DM components that contribute to visual attributes specified in natural language. Our code is available \href{https://github.com/yamanoko/dao/tree/main}{here}.
