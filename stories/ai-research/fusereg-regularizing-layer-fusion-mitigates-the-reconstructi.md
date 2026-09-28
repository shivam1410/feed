---
title: "FuseReg: Regularizing Layer Fusion Mitigates the Reconstruction-Generation Gap in Representation Autoencoders"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.31620"
authors: ["Hongyang Du", "Yunfei Xie", "Junjie Ye", "Jiawei Yang", "Xiaoyan Cong", "Haodong Zhang", "Yongchao Huang", "Haiyu Wu", "Zongxia Li", "Shihang Gui", "Dawei Liu", "Runhao Li", "Jingcheng Ni", "Chen Wei", "Randall Balestriero", "Yue Wang"]
date: "2026-09-24T20:00:00.000Z"
score: 32
guid: "2609.31620"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.31620.png"
generated: "2026-09-28T20:49:59+05:30"
---

Representation autoencoders (RAEs) reuse features from a pretrained visual encoder as reconstruction and diffusion latents, integrating strong visual representations into image generation. However, RAEs still need to decide which encoder layers form the shared latent space for the generator and pixel decoder. This choice involves a trade-off. Shallower layers tend to preserve fine pixel details better, while deeper layers tend to yield better generation metrics. A fixed heuristic layer fusion therefore couples two stages that benefit from different information. We introduce FuseReg, which replaces heuristic feature selection with training over random subsets of encoder layers. We theoretically analyze the underlying mechanism: subset sampling explicitly penalizes sensitivity to cross-layer disagreement. On ImageNet-256 with DINOv3-L, a single FuseReg decoder reconstructs from full, sparse, and single-layer fusions without retraining, achieving higher PSNR than decoders specialized to fixed fusions. This flexibility also benefits generation: decoder replacement alone reduces unguided gFID by 27% with an unchanged RAEv2 DiT-XL generator. The same regularization principle extends to diffusion training, with joint regularization of both stages reducing unguided gFID by 29% on DiT-Base. These results show that training downstream models for layer-fusion robustness narrows the reconstruction-generation gap without modifying the pretrained encoder.
