---
title: "FLEET: From Logits Entropy to Enhanced Trajectories in Text Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.27657"
authors: ["Oleksii Streltsov", "Oleksandra Vitko"]
date: "2026-09-22T20:00:00.000Z"
score: 52
guid: "2609.27657"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.27657.png"
generated: "2026-09-26T22:52:50+05:30"
---

Solutions based on large language models (LLMs) often rely on temperature sampling to improve accuracy and stability by aggregating multiple samples from the completion distribution. However, this memoryless approach is inherently suboptimal: because it lacks awareness of prior generations and their evaluations, it produces an increasing proportion of semantically duplicate answers as more samples are drawn, leading to diminishing returns. To address this limitation, we introduce FLEET, a novel method that integrates a memory mechanism into the generation process. FLEET represents each generation as a sparse trajectory through states whose entropy exceeds a predefined threshold and uses these trajectories to infer per-token utility scores that adjust the logits. Benchmark evaluations demonstrate that FLEET achieves the same accuracy as the repeated sampling baseline, with a 3x speedup, and substantially improves accuracy on complex coding tasks (LiveCodeBench Pass@32 increases from 59.9% to 66.2%) under the same budget. Furthermore, in the greedy-decoding configuration evaluated here, the approach is deterministic and uses a single calibration pass to derive its principal hyperparameters, requiring only minimal modifications to existing LLM pipelines.
