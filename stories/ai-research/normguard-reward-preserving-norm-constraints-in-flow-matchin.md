---
title: "NormGuard: Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27771"
authors: ["Tianlin Pan, Lianyu Pang, Cheng Da, Huan Yang, Changqian Yu, Kun Gai, Wenhan Luo"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27771v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27771v1 Announce Type: new Abstract: Reinforcement learning (RL) post-training improves the reward alignment of flow-based generators, but often degrades perceptual quality in ways that are not captured by the reward proxy. We identify a simple structural signature of this drift: across three post-training methods (NFT, AWM, DPO), RL fine-tuning inflates the per-step velocity norm $\|v_\theta\|$ by $5\%$ to $15\%$ relative to the reference. A form of norm inflation has been studied in classifier-free guidance (CFG), where rescaling the velocity back to a reference norm at inference time can mitigate the resulting artifacts. However, this inference-time correction does not transfer cleanly to RL: rescaling $v_\theta$ to match $\|v_{\text{ref}}\|$ at inference time neither improves reward nor fixes the quality degradation, because the inflation is co-adapted into the model weights. Furthermore, an adjoint sensitivity analysis shows that velocity magnitude rescaling carries no coherent first-order reward signal at the batch level, indicating that suppressing norm inflation is unlikely to remove a consistently reward-carrying component. Since inference-time renormalization fails while norm suppression carries no reward cost, training-time intervention is the appropriate strategy. Together, these findings motivate \methodname, a hinge penalty that activates only when $\|v_\theta\|$ exceeds $\|v_{\text{ref}}\|$ and composes additively with any velocity-local base loss. Across two base models, three post-training methods, and two reward proxies, \methodname consistently improves MLLM-judged image quality and forensic realism while preserving reward, with gains that amplify under few-step inference and are not explained by early stopping.
