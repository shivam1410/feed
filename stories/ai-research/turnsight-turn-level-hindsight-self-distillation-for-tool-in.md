---
title: "TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.04007"
authors: ["Changle Qu", "Sunhao Dai", "Hengyi Cai", "Yuqi Zhou", "Xinran Chen", "Simon", "Jun Xu"]
date: "2026-08-03T20:00:00.000Z"
score: 70
guid: "2608.04007"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.04007.png"
generated: "2026-08-05T20:00:21+05:30"
---

Tool-Integrated Reasoning (TIR) enables LLMs to solve complex tasks through iterative tool interactions. However, existing reinforcement learning methods often rely on trajectory-level supervision, limiting fine-grained credit assignment in long-horizon TIR scenarios. On-policy self-distillation offers denser signals through teacher branches with privileged context, but existing approaches typically derive such context from ground-truth answers or retrieved skills, which may not reflect the states actually visited by the agent. Moreover, token-level supervision fails to capture the turn-level structure of tool interactions. To address this, we propose TurnSight, a turn-level hindsight self-distillation framework that derives supervision directly from execution-conditioned hindsight. It then constructs multiple hindsight views with different lookahead horizons and selects reliable supervision through cross-horizon directional agreement. Finally, the selected hindsight signal is normalized across sibling rollouts and used to adaptively modulate RL advantages while preserving their original optimization direction. Extensive experiments on three benchmarks demonstrate the effectiveness of TurnSight. Our codes are available at https://github.com/quchangle1/TurnSight.
