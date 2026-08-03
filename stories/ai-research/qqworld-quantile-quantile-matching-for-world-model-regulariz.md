---
title: "QQWorld: Quantile-Quantile Matching for World Model Regularization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28415"
authors: ["Zhoushun Yu", "Xiaoyu Hu", "Xiangyu Xu"]
date: "2026-07-29T20:00:00.000Z"
score: 70
guid: "2607.28415"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28415.png"
generated: "2026-08-03T19:06:42+05:30"
---

Latent world models enable efficient planning by predicting future states in a compact representation space, but their performance depends critically on the quality of the learned latent distribution. LeWorldModel (LeWM) regularizes its latents toward an isotropic Gaussian using the Epps-Pulley (EP) objective. We show that the corrective gradients of EP rapidly vanish for isolated tail samples, leaving heavy-tailed deviations insufficiently controlled. To address this limitation, we propose QQWorld, which replaces EP with a quantile-quantile matching objective that directly aligns projected latent samples with rank-matched Gaussian quantiles, thereby maintaining effective corrective gradients in the tails. We further develop cross-batch QQ, which enlarges the effective ranking pool using detached samples from previous batches, and characterize its bias-variance trade-off. Across four control environments, QQWorld effectively improves the average planning success rate of LeWM, while consistently yielding better Gaussian alignment and thinner latent tails.
