---
title: "From Noisy Traces to Root Causes: Structural Trajectory Analysis and Causal Extraction for Agent Optimization"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.07702"
authors: ["Ying Chang", "Jiahang Xu", "Xuan Feng", "Chenyuan Yang", "Peng Cheng", "Yuqing Yang"]
date: "2026-07-07T20:00:00.000Z"
score: ""
guid: "2607.07702"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.07702.png"
generated: "2026-07-18T21:58:10+05:30"
---

The optimization of long-horizon agents increasingly relies on reflection-based mechanisms, where a large language model (LLM) acts as an optimizer to diagnose agent failures and improve agent policies. However, real execution traces are difficult to use directly for optimization: large trace collections are often redundant and heterogeneous, making optimization inefficient and prone to overfitting to low-value failures; meanwhile, each individual trajectory also contains many irrelevant steps, while naive context reduction methods such as truncation or sliding windows can discard causally important evidence and produce misleading optimization signals. To resolve this dilemma, we introduce STRACE (Structural TRajectory Analysis and Causal Extraction), a framework that constructs high signal-noise optimization contexts for more precise and effective optimization. At the batch level, STRACE mines failure patterns to filter redundant traces and retain representative failures; within each selected trace, it performs causal localization over a textual dependency graph to remove non-causal steps and identify the true root-cause module for optimization. Empirical results demonstrate that STRACE significantly outperforms standard context-filtering baselines. Notably, on a challenging formal verification task (VeruSAGE-Bench), it successfully optimizes human-expert designed agents, delivering 1.4times success-rate improvement (42.5% to 58.5%). The code is available at https://github.com/moomight/STRACE .
