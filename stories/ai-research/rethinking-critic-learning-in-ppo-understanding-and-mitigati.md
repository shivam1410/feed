---
title: "Rethinking Critic Learning in PPO: Understanding and Mitigating Value Flattening"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18708"
authors: ["Yizhuo Li", "Jianhao Yan", "Yun Luo", "Zhi Wang", "Futing Wang", "Rong-Xi Tan", "Kanghui Tian", "Ganqu Cui", "Ning Ding", "Peilin Zhao", "Yafu Li", "Yu Cheng"]
date: "2026-09-15T20:00:00.000Z"
score: 60
guid: "2609.18708"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18708.png"
generated: "2026-09-19T19:06:02+05:30"
---

In reinforcement learning for large language models, Proximal Policy Optimization (PPO) commonly uses a critic to estimate state values and reduce the variance of policy updates. However, we uncover a systematic failure mode in PPO critics, which we call Value Flattening: state values, estimated from multiple Monte Carlo continuations, change sharply across intermediate states while critic predictions remain comparatively flat. We further observe this phenomenon in a controlled FrozenLake environment and find that it becomes more pronounced as the state space grows. Our theoretical and empirical analyses relate Value Flattening to an implicit variance penalty in the critic loss and redundant updates from temporally correlated states with similar gradients. Motivated by these findings, we introduce SParse Proximal Policy Optimization (SP^3O), which applies the value loss to only a few well-separated states in each response to mitigate both effects. Experiments on Qwen3-Base show that SP^3O with only three states supervised per response can mitigate Value Flattening and consistently improve the learned policy across model sizes and evaluation suites. Together, our results identify Value Flattening as an important yet overlooked failure mode of critic learning in standard PPO and show that a simple sparse supervision strategy can mitigate it.
