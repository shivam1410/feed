---
title: "VepAgent: Bridging Causal-Transition via Tool-Augmented Reinforcement Learning for Video Event Prediction"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06293"
authors: ["Qiutong Chen", "Yuchan Guo", "Zhenlong Yuan", "Haobo Yang", "Fangfang Lin", "Xinyi Long", "Yin Wang", "Zijian Song", "Rui Lan", "Shi Qiu", "Boyuan Pan", "Yang Luo", "Yuyin Zhou"]
date: "2026-10-04T20:00:00.000Z"
score: 79
guid: "2610.06293"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06293.png"
generated: "2026-10-08T19:08:02+05:30"
---

Multimodal Large Language Models (MLLMs) have demonstrated remarkable potential in video understanding, yet their reliance on retrospective summarization and text-centric priors often limits their ability to bridge unobserved causal transitions when applied to Video Event Prediction (VEP). To address this, we propose VepAgent, an agentic framework that integrates causal-transition reasoning with tool-augmented reinforcement learning (RL) for robust VEP. Unlike prior methods that passively project future trajectories from historical dependencies, our approach explicitly models the logical progression from terminal observed states to future events. Specifically, we first construct futurebench-4K, a high-quality chain-of-thought dataset for supervised fine-tuning (SFT) that effectively bridges the causal-logic gap by structuring the deduction of unobserved intermediate states. Subsequently, we develop a diagnostic tool library integrating state tracking, frame retrieval, and region magnification, enabling the agent to dynamically augment reasoning with external tools to recover missing spatio-temporal evidence and resolve visual ambiguities during inference. Moreover, we propose a composite reward mechanism that jointly optimizes prediction accuracy, causal coherence, and reliable prior, compelling the agent to rely on genuine visual grounding rather than superficial textual similarities. Extensive evaluations on FutureBench and NEPBench datasets demonstrate that our method achieves state-of-the-art performance, significantly outperforming larger MLLMs and validating the empirical effectiveness of our agentic, future-oriented reasoning paradigm.
