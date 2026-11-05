---
title: "Structure, Dimensionality, and Distribution Shape - What Makes Pretraining Data Transferable, and Why the Input Pipeline Decides Which"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04106"
authors: ["Sangyoon Bae, Jiook Cha"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04106v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

What makes a pretraining corpus transferable? We describe a corpus by three properties: its structure, its dimensionality, and the distribution shape of each unit's values. We propose the Transfer-Invariance Principle: the same property can be irrelevant to transfer under one input transform and decisive under another, so the model's input transform, not the data modality, decides which properties can matter. To test it we build TransferForge, a generator that places a synthetic population at any prescribed structure, dimensionality, and distribution shape. KernelSynth, the synthetic prior of Chronos, cannot, because it draws independent series. When the model standardizes each input window (PatchTST on UCR), the distribution shape is inert and the structural setting governs. Synthetic pretraining then matches a real corpus of the same size and exceeds it once scaled. When the model encodes calcium fluorescence signals without normalization (POYO Plus), the shape becomes a governing constraint, and a shape-matched synthetic corpus replaces real pretraining with zero real neural activity. Flipping only the input normalization, with the model and data fixed, changes the effect of a shape manipulation by a factor of 5.3, so the pipeline, not the modality, sets the switch. The principle yields a recipe that chooses what to synthesize before any training. Pretraining data then becomes something to manufacture for the model, most valuably where real data is scarce, expensive, or private.
