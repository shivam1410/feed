---
title: "Octrees as an Explicit 3D Language"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02388"
authors: ["Ran Dan", "Si-Tong Wei", "Pengfei Xiong", "Wei Zhang", "Yadong Mu", "Peng-Shuai Wang"]
date: "2026-09-30T20:00:00.000Z"
score: 62
guid: "2610.02388"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02388.png"
generated: "2026-10-05T19:10:08+05:30"
---

Existing 3D large language models (LLMs) compromise on two fronts: they compress shapes into latent codebook indices or coordinate text, which removes spatial structure from what the model observes, and they acquire the 3D modality by fine-tuning the backbone, which overwrites its general language ability. We present OctLLM, which addresses both limitations. Geometry enters as an explicit 3D sequence of octree occupancy tokens. However, full octree sequences grow rapidly with depth; OctLLM therefore randomly empties penultimate-level nodes and omits descendants while preserving shape, yielding a shorter coordinate- and depth-anchored Sparse Octree (S-Octree) for position-aware mask-modeling generation and 3D understanding. On the other front, existing methods introduce a new modality with full fine-tuning or LoRA, but full fine-tuning is costly, LoRA limits 3D capacity, and both modify the language pathway. OctLLM instead adds 3D capacity in parameters separate from the pretrained ones: mesh tokens are routed through independent trainable branches in a subset of blocks while text and image tokens retain the frozen vision-language pathway, and the two streams interact through shared self-attention. It trains far fewer parameters than full fine-tuning, yet sets a new state of the art among unified multimodal LLMs, lowering image-to-3D FID by 17.4% and raising render-grounded captioning by 28.7 points over ShapeLLM-Omni, while matching the backbone on general language benchmarks.
