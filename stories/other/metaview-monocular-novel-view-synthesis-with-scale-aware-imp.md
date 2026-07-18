---
title: "MetaView: Monocular Novel View Synthesis with Scale-Aware Implicit Geometry Priors"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.12000"
authors: ["Yufei Cai", "Xuesong Niu", "Hao Lu", "Kun Gai", "Kai Wu", "Guosheng Lin"]
date: "2026-07-12T20:00:00.000Z"
score: ""
guid: "2607.12000"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.12000.png"
generated: "2026-07-18T21:58:10+05:30"
---

Current visual generation models are capable of producing high-quality content, yet they lack a coherent perception of the spatial structure. Existing generative novel view synthesis methods typically introduce explicit geometry priors, which enforce spatial consistency but inherently restrict generalization in large view changes. In contrast, recent interactive generative methods favor implicit scene modeling, offering greater flexibility at the cost of precise camera control and geometry consistency. In this paper, we propose MetaView, a diffusion-based monocular novel view synthesis framework that enables rendering under large view changes from a single image. Our key insight is to combine implicit geometry modeling with minimal yet essential explicit 3D cues: we incorporate implicit geometry priors from a feed-forward geometry perception network to regularize structure without imposing restrictive reconstruction pipelines, while leveraging metric depth to anchor the generation to a metric scale. This design allows MetaView to achieve both geometry consistency and precise controllability. Extensive experiments demonstrate that, under challenging monocular large viewpoint changes, MetaView significantly outperforms existing methods and exhibits superior generalization. Our code is publicly available at https://github.com/KlingAIResearch/MetaView.
