---
title: "Seeing or Knowing? Visual Context Sensitivity in Multimodal Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26326"
authors: ["Jiaang Li", "Chengzu Li", "Zhaochong An", "Yifei Yuan", "Xi Liu", "Serge Belongie", "Vésteinn Snæbjarnarson"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.26326"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26326.png"
generated: "2026-08-05T20:00:21+05:30"
---

Multimodal Large Language Models (MLLMs) achieve strong performance by integrating visual inputs with the rich priors of pretrained language models. However, they often fail on vision-centric tasks, especially when visual evidence conflicts with pretrained knowledge. We explore these failures separately using two diagnostic paradigms: (1) probing whether visual information is available, via image reconstruction, and (2) measuring multimodal context sensitivity, the extent to which the model follows visual context versus the language prior. To support the second, we introduce the WhatIfVis, a benchmark spanning five coarse-grained dimensions (spatial-temporal, color, count, size, and weight) whose questions admit answers from either the image or the prior. Our analysis yields three findings: (i) Coarse-grained visual evidence is preserved, as these attributes can be reconstructed from the final-layer image tokens of frozen MLLMs. Failures on questions about these attributes therefore point to post-perceptual utilization, rather than to degraded visual encoding during perception. (ii) Even when explicitly instructed to use or ignore visual evidence, vanilla models (without supervised fine-tuning on the WhatIfVis) show unstable visual context sensitivity. Supervised fine-tuning (SFT) improves this controllability and generalizes across domains, and activation patching further localizes the vision-versus-prior trade-off at architecture-specific depths across all six models. (iii) The vision-versus-prior trade-off is controllable along a learned vector. Applying this steering vector, even without any intent instruction, improves controllability over the vanilla model. Together, these results relocate the bottleneck, indicating that for the coarse attributes we study, MLLMs encode the visual evidence but cannot reliably control their reliance on it.
