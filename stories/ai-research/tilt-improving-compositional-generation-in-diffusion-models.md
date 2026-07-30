---
title: "TILT: Improving Compositional Generation in Diffusion Models with a Model-Intrinsic Reward"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21606"
authors: ["Debottam Dutta", "Jaehoon Hahm", "Jianchong Chen", "Romit Roy Choudhury"]
date: "2026-05-15T20:00:00.000Z"
score: 72
guid: "2607.21606"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21606.png"
generated: "2026-07-30T19:07:10+05:30"
---

Recent advances in powerful text-to-image generation models have made it increasingly important to develop test-time methods that modify the sampling trajectory to produce images more faithful to complex compositional prompts. We present TILT, a training-free framework for compositional text-to-image generation via test-time reward alignment. We interpret compositional failures as overlap modes between joint and single-concept distributions, and define a reward that favors samples where all concepts are jointly present. This reward is intrinsic to the base model and does not require any external supervision or reward models. This yields a KL-constrained objective with a closed-form tilted target distribution and principled guiding steps for diffusion sampling. The interaction of concept distributions together with the above reward naturally leads to two different guidance strategies while a hybrid approach that balances their respective benefits produces stronger performance. Experiments on prompts from T2ICompBench show that our method improves compositional alignment while preserving image quality compared to previous baselines.
