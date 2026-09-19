---
title: "CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18779"
authors: ["Jiaxuan Jiang", "Liyuan He", "Zhixuan Fang"]
date: "2026-09-15T20:00:00.000Z"
score: 60
guid: "2609.18779"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18779.png"
generated: "2026-09-19T19:06:02+05:30"
---

Current Mixture-of-Agents (MoA) paradigms generally treat query routing and agent fine-tuning as separate processes, limiting their ability to respond to evolving agent capabilities. This disconnect prevents routing strategies from adapting to evolving agent capabilities during post-training and prevents agents from achieving synergistic data-driven specialization. To resolve this, we introduce CERA-MoA (Co-Evolving Router with continually learning Agents for Mixture-of-Agents), an iterative reinforcement learning framework where the dynamic router and independent agent policies co-evolve. We design a predictive familiarity estimator that leverages mid-layer hidden states to evaluate semantic competence among agents, avoiding the overhead of full rollouts. Based on these familiarity scores, a cumulative-threshold adaptive routing mechanism dynamically activates a tailored minimal agent subset, achieving a trade-off between task performance and efficiency. By proactively allocating targeted training samples to agents based on their evolving competence, CERA-MoA promotes capability differentiation. Extensive experiments across various domains demonstrate that CERA-MoA outperforms state-of-the-art static-agent routing and fix-workflow fine-tuning baselines.
