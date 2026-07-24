---
title: "GraphVid: Interactive Graph-Controllable Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21580"
authors: ["Vedant Shah", "Onkar Susladkar", "Tushar Prakash", "Kiet Nguyen", "Tianjio Yu", "Adheesh Juvekar", "Muntasir Waheed", "Ismini Lourentzou"]
date: "2026-07-22T20:00:00.000Z"
score: 70
guid: "2607.21580"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21580.png"
generated: "2026-07-24T19:06:17+05:30"
---

Controllable video generation remains challenging due to the difficulty of specifying precise multi-object interactions using text prompts or motion-control inputs that primarily constrain pixel movement. In practice, trajectory-based control often requires users to draw accurate tracks for multiple objects, which scales poorly with scene complexity and becomes ambiguous under occlusion or overlap. To enable flexible yet precise multi-subject control, we introduce GraphVid, a graph-conditioned image-to-video generation model that enables interactive control through structured interaction graphs. We further curate GraphVid-Bench, a large-scale interaction-centric video dataset with structured relational annotations to enable training of interaction-aware video generation models. Despite using substantially less training data and fewer trainable parameters than prior motion-control methods, GraphVid delivers strong controllability and video quality. Compared with Motion-I2V, GraphVid reduces FID by up to 39.9% and FVD by 37.6%, while improving PSNR (9.87=>15.98) and SSIM (0.38=>0.61). Our results highlight the potential of structured semantic interfaces as a powerful paradigm for controllable video generation.
