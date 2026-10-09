---
title: "ReSPO: Reshaped Sequence Policy Optimization for Gradient Starvation in Off-Policy Learning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35433"
authors: ["Yihang Chen", "Yuanhao Ban", "Cho-Jui Hsieh"]
date: "2026-09-27T20:00:00.000Z"
score: 52
guid: "2609.35433"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35433.png"
generated: "2026-10-10T00:52:03+05:30"
---

Reinforcement learning from verifiable rewards (RLVR) frequently reuses rollouts across multiple policy updates, increasing the mismatch between the current policy and the data-generating policy. We identify a sign-dependent gradient starvation problem in clipped policy optimization: clipping suppresses under-generated positive responses at the low-importance-weight tail while permitting severely over-generated negative responses to dominate the high-weight tail. To address this, we propose ReSPO (Reshaped Sequence Policy Optimization), which replaces clipping with a smooth, two-branch sequence-level kernel derived from an α-divergence variational objective and an exponential variance-control tilt. The positive branch preserves a nonzero gradient weight for under-generated positive responses, while the negative branch suppresses heavily over-generated negative responses. We demonstrate that ReSPO effectively learns from long positive reasoning trajectories during early training, even when accumulated policy drift relegates them to the low-importance-weight tail. On dense and MoE Qwen3 models, ReSPO accelerates early optimization, improves final training scores, and achieves higher held-out benchmark performance under a rollout reuse, validating our approach on importance-weight tail control in off-policy learning.
