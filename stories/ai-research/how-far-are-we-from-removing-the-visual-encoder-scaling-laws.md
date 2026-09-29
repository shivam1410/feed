---
title: "How Far Are We from Removing the Visual Encoder? Scaling Laws for Encoder-Free Multimodal Pretraining"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35457"
authors: ["Lin Chen", "Bolin Ni", "Qi Yang", "Lan Jiang", "Kun Ding", "Xiaoran Fan", "Hower Yang", "Ying Wang", "Shiming Xiang"]
date: "2026-09-27T20:00:00.000Z"
score: 70
guid: "2609.35457"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35457.png"
generated: "2026-09-29T19:09:35+05:30"
---

Most modern multimodal large language models (MLLMs) build on a pretrained visual encoder that provides a strong visual prior. Encoder-free MLLMs instead learn visual representations directly from raw pixels, offering a simple and unified architecture, but their scaling behavior has not been systematically characterized. To fill this gap, we compare scaling laws for encoder-free and encoder-based MLLMs and report three main findings: (1) Removing the visual encoder shifts the compute-optimal allocation for the multimodal objective toward larger models, while leaving that for text nearly unchanged. (2) The two architectures exhibit nearly overlapping loss--compute frontiers on the text objective, but diverge on the multimodal objective: encoder-free models underperform at small scales yet are predicted to catch up at around 10^{22} FLOPs, well within practical pretraining budgets. (3) Without a visual encoder, the language model learns to take over its role via vision-specific adaptation: bidirectional interactions among visual tokens become increasingly beneficial as training compute grows, visual processing shifts toward earlier layers, and expert routing for visual tokens becomes more concentrated. Overall, our results indicate that the advantage of the visual prior provided by a pretrained encoder diminishes with scale, positioning encoder-free architectures as a promising direction for multimodal pretraining.
