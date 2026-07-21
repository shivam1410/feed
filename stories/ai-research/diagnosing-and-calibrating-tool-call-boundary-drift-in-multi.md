---
title: "Diagnosing and Calibrating Tool-Call Boundary Drift in Multi-Teacher On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.07050"
authors: ["Jiabin Shen", "Guang Chen", "Chengjun Mao"]
date: "2026-07-14T20:00:00.000Z"
score: 65
guid: "2607.07050"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.07050.png"
generated: "2026-07-21T19:05:01+05:30"
---

Agentic language models must learn when to call tools, when to consume tool responses, and when to answer directly. This makes multi-teacher on-policy distillation a natural training strategy: one teacher can specialize in tool calls, another in direct responses, and the student can learn from both on
  its own generated distribution. We show that this strategy can induce a behavior shift that is invisible from aggregate losses alone. In a two-teacher tool-use setting, vanilla generalized knowledge distillation improves tool-call recall but also moves the model toward over-calling, where it calls tools
  on examples that should be answered directly. Aggregate explanations are insufficient: tool-call samples do not receive more token exposure, and full-sequence per-token divergence is not larger for the tool-call teacher. We instead analyze behavior leverage imbalance: local token-level signals at mode-
  entry and structural positions, such as <tool_call> and function names, can have disproportionate control over the global generation mode. We propose Soft Clamp, a per-token divergence calibration method that dynamically compresses extreme token-level Jensen-Shannon divergence while preserving nonzero
  gradients. On APIGen-MT, Soft Clamp reduces over-calling from 13.7% to 9.0% relative to vanilla GKD while matching its decision accuracy. In a BFCL multi-turn diagnostic, it also lowers tool-call loops and repeated calls among GKD variants. These results suggest that multi-teacher OPD should monitor
  where teacher signals act, not only how large they are in aggregate.
