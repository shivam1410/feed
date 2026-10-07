---
title: "DuoMatching: Joint-Marginal Distribution Matching for Few-Step Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.03543"
authors: ["Jiahao Zhan", "Yan Wang", "Yongrui Ma", "Qunliang Xing", "Ruchang Yao", "Runtao Liu", "Shijie Zhao", "Tianfan Xue"]
date: "2026-10-01T20:00:00.000Z"
score: 40
guid: "2610.03543"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.03543.png"
generated: "2026-10-07T19:11:01+05:30"
---

Streaming video generation has benefited from distribution matching distillation (DMD), which matches the joint distribution of video frames to a video teacher's approximation of the real video distribution. Although this joint matching mitigates drift during autoregressive rollouts, limitations remain in visual quality and semantic alignment. To address these limitations, we propose DuoMatching, a distribution matching framework that approximates the real video distribution through a unified joint-marginal formulation. On top of existing joint matching formulations, the additional marginal matching objective provides dedicated frame-level supervision from an image generator, transferring complementary visual and semantic priors from it. To apply this frame-level supervision in video generation, we introduce LatentBridge to resolve the latent representation mismatch between the video student and the image teacher. Latent Variation Sampling further distributes such frame-level supervision across distinct temporal segments, reducing redundancy. Experiments demonstrate that DuoMatching improves visual quality, composition, and semantic alignment while largely preserving motion dynamics. Human evaluations show overall preference rates above 80% against all evaluated baselines. The project page is available at https://johnzhan2023.github.io/DuoMatching/.
