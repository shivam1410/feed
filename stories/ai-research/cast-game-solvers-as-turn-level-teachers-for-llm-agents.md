---
title: "CAST: Game Solvers as Turn-Level Teachers for LLM Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25308"
authors: ["Yu Wang", "Yi-Kai Zhang", "Wentao Shi", "Ziang Ye", "Yuchun Miao", "Yueqing Sun", "Qi Gu", "Xunliang Cai", "Lan-Zhe Guo", "Han-Jia Ye", "Fuli Feng"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.25308"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25308.png"
generated: "2026-07-30T19:07:10+05:30"
---

Training large language models (LLMs) to act in long-horizon games is a promising step toward generalist decision-making, yet reinforcement learning with verifiable rewards (RLVR) relies on sparse final rewards that reveal little about which decisions determine success. Denser process signals could supply this missing turn-level credit, but existing sources are hard to keep both cheap and accurate. We observe that changes in a game solver's state value reveal whether an action advances the state toward success. Building on this insight, we propose CAST (Credit Assignment from Solver Teachers), which converts these value changes into solver advantages and injects them into RLVR as turn-level signals. We further show that, under a soft-optimal solver assumption, maximizing the solver advantage is equivalent to on-policy distillation from the solver, requiring only scalar values rather than teacher logits. Across Sokoban, Minesweeper, and Rush Hour, CAST outperforms all trained baselines on every game under both in-domain and unseen-difficulty evaluation and achieves the highest average zero-shot performance on ALFWorld and WebShop. Our code is available at https://github.com/Wloner0809/CAST.
