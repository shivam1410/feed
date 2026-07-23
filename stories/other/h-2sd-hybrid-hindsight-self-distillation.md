---
title: "H^2SD: Hybrid Hindsight Self-Distillation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18955"
authors: ["Qiye Cai", "Yichuan Ma", "Linyang Li", "Peiji Li", "Yongkang Chen", "Qipeng Guo", "Yicheng Zou", "Tao Gui", "Xiaocheng Feng", "Bing Qin"]
date: "2026-07-20T20:00:00.000Z"
score: ""
guid: "2607.18955"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18955.png"
generated: "2026-07-23T04:03:36+05:30"
---

Reinforcement learning with verifiable rewards (RLVR) has substantially improved the reasoning capabilities of large language models on tasks such as mathematical reasoning and code generation. However, most RLVR methods assign a scalar outcome reward to an entire trajectory, resulting in sparse supervision and limited token-level credit assignment. On-policy distillation (OPD) provides denser supervision by distilling token-level distributions from a stronger teacher model, but requires an additional teacher and typically assumes a shared vocabulary. On-policy self-distillation (OPSD) removes this dependency by conditioning the same model on privileged information to construct a teacher policy. However, directly matching the teacher distribution may cause information leakage and unstable optimization. RLSD avoids direct matching by using the teacher signal only to modulate update magnitudes, but it cannot provide an explicit correction direction when the sampled reasoning fails. To address this tradeoff, we introduce H^{2}SD, a hybrid hindsight self distillation framework that uses the teacher differently according to trajectory correctness. For successful trajectories, the teacher receives the student response confirmed as correct together with a rephrasing instruction, and its probabilities on the original response tokens are used to modulate update magnitudes without changing the direction determined by the reward. For failed trajectories, we condition the teacher on a reference hint containing key reasoning steps and a verified answer, and minimize the reverse KL divergence from the student to the teacher. Experiments on multiple challenging reasoning benchmarks show that H^2SD consistently outperforms representative RLVR, OPSD, and RLSD baselines while maintaining stable optimization and favorable generation efficiency.
