---
title: "GeoSET: Generalist Foundation Model for SAR-to-EO Image Translation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37496"
authors: ["Jeonghyeok Do", "Munchurl Kim"]
date: "2026-09-25T20:00:00.000Z"
score: 50
guid: "2609.37496"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37496.png"
generated: "2026-10-06T22:55:59+05:30"
---

Paired synthetic aperture radar (SAR) and electro-optical (EO) imagery is increasingly available across sensors, resolutions, and geographic regions. Yet existing SAR-to-EO image translation (SET) methods are typically trained on a single, limited-scale dataset, producing models specialized to particular sensing conditions. We introduce GeoSET, the first generalist model for SET, built around a single pretrained parent that is adapted to downstream datasets under a common protocol. We curate over 3 million high-quality SAR--EO pairs from a collection of more than 10 million SAR observations, spanning diverse sensors, spatial resolutions, and ground sampling distances. To bridge the modality gap between SAR observations and a pretrained image generator, we develop a speckle-robust SAR encoder and pretrain the conditional generator on this heterogeneous corpus. The resulting parent supports efficient adaptation across downstream datasets through low-rank adaptation (LoRA), updating only 0.60% of the generator parameters and requiring approximately one hour per dataset. Across six downstream benchmarks, GeoSET achieves state-of-the-art results in FID and DISTS with full fine-tuning or LoRA, demonstrating effective transfer across heterogeneous SAR-EO domains.
