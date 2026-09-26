---
title: "On the Diffusibility of High-Dimensional Latents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.28473"
authors: ["Chao Feng", "Zhiyang Xu", "Bowei Chen", "Yuanjun Xiong", "Xiyao Wang", "Jui-Hsien Wang", "Richard Zhang", "Zhe Lin", "Andrew Owens", "Yijun Li"]
date: "2026-09-22T20:00:00.000Z"
score: 38
guid: "2609.28473"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.28473.png"
generated: "2026-09-26T22:52:50+05:30"
---

Representation Autoencoders (RAEs) enable diffusion models to operate in the feature spaces of pretrained visual encoders. However, many off-the-shelf encoders are not optimized for faithful reconstruction, discarding fine-grained visual details. As expected, finetuning these encoders for image reconstruction recovers such details. However, perhaps counterintuitively, this procedure reduces the effective dimensionality of the resulting representation, and the altered geometry has downstream effects on generation. Specifically, we show that using the standard velocity prediction in flow matching in this high-dimensional space requires the model to fit orthogonal noise directions outside the low-dimensional signal manifold, making optimization inefficient. This motivates using the clean data parameterization (x_{0}-prediction) instead, which focuses learning on the underlying signal manifold. Across experiments with multiple strong-reconstruction encoders, we show that x_{0}-prediction consistently improves text-to-image generation performance.
