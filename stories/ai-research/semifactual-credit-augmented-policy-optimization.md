---
title: "Semifactual Credit-Augmented Policy Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.40360"
authors: ["Junshu Pan", "Zhizhang Fu", "Shulin Huang", "Yiran Ding", "Zifan Cheng", "Wenqi Shao", "Qiaosheng Zhang", "Yue Zhang"]
date: "2026-09-29T20:00:00.000Z"
score: 77
guid: "2609.40360"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.40360.png"
generated: "2026-10-08T19:08:02+05:30"
---

Reinforcement learning with verifiable rewards (RLVR) has improved the reasoning capabilities of large language models (LLMs), yet their predictions remain sensitive to task-irrelevant prompt features. We investigate this sensitivity through semifactual prompt interventions that preserve the underlying problem and its answer. Our analysis reveals substantial variation in token-level sensitivity and shows that suppressing high-drift token candidates during decoding improves reasoning accuracy without updating model weights. These findings highlight a limitation of Group Relative Policy Optimization (GRPO), which assigns the same outcome-derived advantage to every response token and may reinforce potential spurious dependence alongside useful reasoning. Motivated by this observation, we introduce Semifactual Credit-Augmented Policy Optimization (SCAPO), a causally inspired variant of GRPO that incorporates semifactual stability into token-level credit assignment. SCAPO measures token probability drift for fixed responses under semifactual interventions and uses normalized stability scores to reduce advantages for relatively unstable tokens during early training, while granting no additional credit for stability alone. On Qwen3-4B-Base and Qwen3-1.7B-Base, SCAPO improves AIME 2024-2026 accuracy over GRPO by 5.63 and 4.17 percentage points, respectively. At both model scales, SCAPO achieves the best results on most evaluated mathematics benchmarks and all evaluated out-of-distribution benchmarks among the compared methods. These results suggest that semifactual stability provides an effective training signal for improving reasoning and generalization through finer-grained credit assignment in RLVR. The code is available at https://github.com/DtYXs/SCAPO.
