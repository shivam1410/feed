---
title: "WanSong v1.0 Technical Report"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14749"
authors: ["Binghui Chen", "Pandeng Li", "Yu Liu", "Jingren Zhou"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.14749"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14749.png"
generated: "2026-07-19T19:52:10+05:30"
---

Music generation foundation models have recently attracted significant industry attention. However, achieving efficient generation and high-fidelity long-form audio while supporting controllability remains challenging. To address these needs, we present WanSong, a simple yet powerful approach for long-form, commercial-grade song generation. Unlike autoregressive (AR) and cascaded multi-stage pipelines (\eg, AR followed by diffusion), WanSong is a pure diffusion-based model that directly generates high-fidelity, multilingual songs up to 5 minutes and outputs dual stems (vocals and background music) in a single run. In addition, our diffusion framework enables faster inference through step-distillation, and offers an efficient pathway for fine-tuning and customization to support downstream editing tasks.
