---
title: "QwenGyre: An Elastic Reinforcement Learning Framework for Training xLong-Horizon Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33848"
authors: ["Weiqi Wang", "Yuxin Zhou", "Mouxiang Chen", "Siyuan Zhang", "Yi Zhang", "Yuyan Luo", "Zhiyu Yin", "Chencan Wu", "Jiemin Jiang", "Wentao Yao", "Chujie Zheng", "JianWei Zhang"]
date: "2026-09-26T20:00:00.000Z"
score: 78
guid: "2609.33848"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33848.png"
generated: "2026-09-29T19:09:35+05:30"
---

Large language model (LLM) agents increasingly undertake extreme-long (xlong) horizon tasks, where a single execution can span hours, hundreds of model--environment interactions, and nearly 1M tokens per rollout. Applying online reinforcement learning (RL) to such executions poses two fundamental challenges: (1) severe execution variance and prolonged rollout delays cause massive GPU idling; and (2) complex non-linear branching generates massive trajectory redundancy, crippling training efficiency. To address these, we presents QwenGyre, an end-to-end framework for xlong-horizon online RL. QwenGyre elastically reallocates GPUs between rollout and training without interrupting live executions, while its trajectory processor reconstructs branching histories, scores partial progress, and deduplicates redundant paths to bound training costs. Scaled to our flagship model, Qwen~3.8 2.4T, with 700K tokens per rollout, QwenGyre yields a 6.0% absolute gain on NL2RepoBench (52.5% to 58.5%) in 48 steps. Across our evaluations on diverse domains of training datasets, QwenGyre delivers up to 1.85times and 1.78times speedups over Colocate and Async, respectively.
