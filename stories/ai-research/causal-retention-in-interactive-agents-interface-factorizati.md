---
title: "Causal Retention in Interactive Agents: Interface Factorization and Selective Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30650"
authors: ["Shengjun Zhang, Tingyi Liu, Dong Xie, Yunlong Dong, Xiang Wang, Cheng Zeng"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.30650v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Task performance need not determine which intervention mechanism an agent retains. We study causal retention: whether a frozen learned state answers a mechanism-probe map fixed independently of training, including action, context, direct target, value, and delay. For finite structural causal model classes, the optimal probe error is a Bayes decision risk. It vanishes exactly when every learning-interface fiber lies within one probe-answer fiber; any state obtained by post-processing that interface inherits the same lower bound. A posterior-coverage theorem characterizes budgeted retesting, while an exact edit decomposition shows that the shifted set is the unique support of an error-free target update. Causal Core implements these conditions through evidence-gated writing, readout filtering, temporal credit, hidden-context setup, and local diagnostic updates. Experiments cover finite causal systems, continuous simulators, an official TD-MPC2 world model, and Qwen2.5-7B-Instruct. A frozen Qwen last-layer probe reaches 0.958 balanced accuracy on source mechanisms but 0.583 on changed delays; the gated mechanism state reaches 1.000 and accepts only 0.056 of synchronized-readout candidates. In TD-MPC2, five target states per actuator recover effect-sign accuracy from 0.057 to 0.948 without degrading stable responses. Causal retention is therefore distinct from task sufficiency and source-domain decodability.
