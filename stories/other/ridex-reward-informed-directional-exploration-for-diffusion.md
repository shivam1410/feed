---
title: "RiDEx: Reward-Informed Directional Exploration for Diffusion Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22052"
authors: ["Song Yan, Chenfeng Wang, Wei Zhai, Xingchen Wang, Tao Zhang, Yawen Shao, Shi Pan, Min Li, Zheng-Jun Zha"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22052v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Reward-based diffusion post-training updates model parameters from task rewards. While existing approaches improve sampling and policy optimization, they still rely largely on isotropic random perturbations in a high-dimensional latent space for exploration. Such variation often spends the perturbation budget on changes with little influence on the target reward, making exploration inefficient. We study where diffusion models should explore and how to learn from that exploration. We introduce Reward-Informed Directional Exploration (RiDEx), which concentrates local exploration in reward-relevant subspaces of the denoising velocity field. Conditional residuals or differentiable reward gradients propose the subspace, and equal-and-opposite perturbations at the same generation state measure its terminal reward response. The reward difference supplies signed local supervision in the explored coordinates, while all generated images contribute to global DiffusionNFT learning. RiDEx thereby couples exploration-space selection with feedback about the changes it produces. On Stable Diffusion 3.5 Medium, RiDEx attains the highest peak rewards among the evaluated methods on four alignment and preference tasks. Its gradient-direction instantiation achieves 15x and 29x target-attainment speedups over DiffusionNFT on HPSv2 and PickScore, measured in H200 GPU hours. Controlled experiments confirm that reward-aligned directions elicit stronger responses at equal perturbation magnitude, and that applying their measured credit improves curve-average reward across all four tasks.
