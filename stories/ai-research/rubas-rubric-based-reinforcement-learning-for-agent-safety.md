---
title: "RUBAS: Rubric-Based Reinforcement Learning for Agent Safety"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04051"
authors: ["Xian Qi Loye, Qinglin Su, Zhexin Zhang, Shiyao Cui, Qi Zhu, Fei Mi, Hongning Wang, Minlie Huang"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.04051v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04051v1 Announce Type: new Abstract: The evolution of LLMs into tool-enabled agents creates a new class of safety challenges associated with real-world execution rather than simple text generation. Existing alignment methods often rely on coarse refusal signals or static supervision, making it difficult to balance safety with useful tool execution across diverse agentic risks. We introduce RUBAS, a rubric-based reinforcement learning framework for agent safety. RUBAS decomposes agent behavior into four dimensions: tool-use safety, argument safety, response safety, and helpfulness. These structured rubrics provide fine-grained and interpretable rewards over complete agent trajectories, enabling reinforcement learning to optimize safe tool use while preserving task completion. Extensive experiments across multiple agent safety benchmarks and models show that RUBAS improves safety over standard alignment baselines, reduces tool-grounded hallucinations, and maintains competitive utility. Our results suggest that multi-dimensional rubric rewards provide an effective training signal for aligning LLM agents in safety-critical tool-use settings.
