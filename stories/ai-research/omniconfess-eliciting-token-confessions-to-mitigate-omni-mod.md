---
title: "OmniConfess: Eliciting Token Confessions to Mitigate Omni-Modal Hallucination"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02999"
authors: ["Huiqiang Rong", "Haoran Luo", "Hui Feng", "Zhonghong Ou", "Kaiwen Xue", "Guoxin Zhang", "Yifan Zhu"]
date: "2026-10-04T20:00:00.000Z"
score: 55
guid: "2610.02999"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02999.png"
generated: "2026-10-06T22:55:59+05:30"
---

Omni-modal large language models (OmniLLMs) unify text, images, audio, and video, yet hallucinate when generation relies on the wrong evidence. Existing inference-time methods can reduce hallucinations, but rarely reveal which evidence sustains a generated commitment. We introduce OmniConfess, a training-free method for mitigating omni-modal hallucinations. It fixes a candidate response and re-scores it at token resolution under controlled channel-wise evidence interventions, producing a structured token-by-channel confession that reveals the response's evidential dependence. OmniConfess uses this confession to preserve grounded content and correct commitments driven by irrelevant or contradictory evidence. To evaluate OmniConfess, we construct OmniHalluBench, a 3,540-example benchmark built from six datasets spanning text, image, audio, and video settings and both judgment and free-form generation. Experiments show that OmniConfess mitigates hallucinations across heterogeneous modality and task settings. Our code and benchmark are publicly available at https://github.com/RongHuiQiang/OmniConfess.
