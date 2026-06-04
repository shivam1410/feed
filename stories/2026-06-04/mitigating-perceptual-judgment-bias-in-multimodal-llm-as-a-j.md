---
title: "Mitigating Perceptual Judgment Bias in Multimodal LLM-as-a-Judge via Perceptual Perturbation and Reward Modeling"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.02578"
authors: ["Seojeong Park", "Jiho Choi", "Junyong Kang", "Seonho Lee", "Jaeyo Shin", "Hyunjung Shim"]
date: "2026-05-31T20:00:00.000Z"
score: 65
why: "Fixes bias in multimodal LLM perception"
guid: "2606.02578"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.02578.png"
generated: "2026-06-04T02:25:37+05:30"
---

Multimodal LLMs combining text and images show a critical bias: they over-rely on textual plausibility and systematically ignore visual evidence. Researchers identified this through experiments where images contradicting text were overlooked in favor of text. They propose a training fix using adversarial perturbations and reward modeling to force models to weigh visual information appropriately. For LLM agents analyzing scientific data—protein structures, climate visualizations, experimental microscopy—this correction is crucial. Agents must integrate visual evidence correctly when text and images provide different information. The proposed training framework improves both evaluation fairness and agent reliability in multimodal analysis. Essential for agents reasoning over real scientific imagery and data.

## From the source

Researchers identify a perceptual judgment bias in multimodal large language models where visual evidence is overlooked for textual plausibility, and propose a training framework using a perturbed dataset and reward modeling to improve perceptual fidelity and evaluation consistency.
