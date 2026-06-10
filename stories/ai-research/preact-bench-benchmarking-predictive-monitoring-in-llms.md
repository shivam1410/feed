---
title: "PreAct-Bench: Benchmarking Predictive Monitoring in LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09890"
authors: ["Hainiu Xu, Italo Luis da Silva, Jiangnan Ye, Yuhao Wang, Wei Liu, Linyi Yang, Jonathan Richard Schwarz, Nicola Paoletti, Yulan He, Hanqi Yan"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09890v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09890v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed as autonomous agents capable of executing multi-step action trajectories toward a given objective. While existing safety research has focused on detecting unethical behavior from complete trajectories, this paradigm is fundamentally retrospective: it identifies harm only after it has already occurred. In this work, we study a critical yet overlooked safety task, which we term Predictive Monitoring: given only a partial action trajectory, can a model infer whether it will culminate in an unethical action before the overt action is executed? To support this task, we present PreActBench, a benchmark of 1,000 paired ethical and unethical action trajectories spanning five domains. We evaluate a range of LLMs, safety guardrail models, and latent probing methods across varying fractions of the action trajectory using our Prefix Foresight F1 metric. Results show that while humans achieve promising performance, predictive monitoring remains challenging even for strong models, highlighting the need for future-oriented risk reasoning in LLM safety.
