---
title: "StreamArena: Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.05703"
authors: ["Xichen Zhang", "Guankai Li", "Yinghao Zhu", "Shijian Wang", "Sitong Wu", "Shaozuo Yu", "Meng Chu", "Yuan Lu", "Jiaya Jia"]
date: "2026-08-05T20:00:00.000Z"
score: 70
guid: "2608.05703"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.05703.png"
generated: "2026-08-10T19:05:52+05:30"
---

Deploying autonomous multimodal agents in continuous, real-world environments requires them to ingest unbounded audio-visual streams and maintain hour-scale memory. However, current evaluations predominantly rely on brief clips and multiple-choice formats. This design allows minimal baselines that process only the last four frames to match or surpass complex streaming models, while answer options also expose language shortcuts. We introduce StreamArena, a benchmark for hour-scale, interactive streaming video understanding. StreamArena contains 243 full-length videos averaging 88.8 minutes and 3,646 rigorously annotated, open-ended question-answer pairs that evaluate real-time perception, historical retrospection, proactive interaction, and multimodal tool utilization. Evaluation across diverse systems exposes a tension between continuous interaction and long-horizon multimodal comprehension. Methods that retain only recent frames cannot recover distant events, methods that convert past observations into text lose visual evidence, and methods that repeatedly compress visual memory struggle to preserve fine-grained details over time. We address this tension with StreamMind, a two-tier architecture that assigns latency-critical interaction and proactive monitoring to independently scheduled frontend workers, while backend workers asynchronously construct persistent multimodal memory and perform historical recall and external search. StreamMind outperforms existing streaming baselines across all four capabilities and reduces query-to-answer latency by reusing persistent state.
