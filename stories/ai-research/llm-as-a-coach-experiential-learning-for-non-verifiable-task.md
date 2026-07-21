---
title: "LLM-as-a-Coach: Experiential Learning for Non-Verifiable Tasks"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18110"
authors: ["Tianzhu Ye", "Li Dong", "Guanheng Chen", "He Zhu", "Xun Wu", "Shaohan Huang", "Furu Wei"]
date: "2026-07-19T20:00:00.000Z"
score: 65
guid: "2607.18110"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18110.png"
generated: "2026-07-21T19:05:01+05:30"
---

Reinforcement learning (RL) on open-ended tasks compresses an LLM's rubric-based evaluation into a scalar reward, discarding rich textual feedback and conflating responses with distinct quality profiles. We propose Experiential Learning (EL), which repurposes the feedback model from an LLM-as-a-Judge into an LLM-as-a-Coach. The coach distills its assessment of each on-policy response into transferable experiential knowledge, which conditions a teacher model and is internalized by the policy through on-policy context distillation. Compared with scalar rewards, this higher-bandwidth feedback channel provides dense supervision and preserves fine-grained preferences among high-quality responses. Across two policy families, with feedback from the policy itself or a proprietary model, EL consistently outperforms rubric-based RL on held-out and unseen open-ended tasks. Notably, EL generalizes better beyond the training distribution, and mitigates reward hacking. These findings establish experiential knowledge as a richer and more generalizable learning signal for post-training on non-verifiable tasks.
