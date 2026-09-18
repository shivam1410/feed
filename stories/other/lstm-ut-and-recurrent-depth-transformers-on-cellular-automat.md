---
title: "LSTM-UT and Recurrent-Depth Transformers on Cellular Automata"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19521"
authors: ["Aras Kavuncu"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19521v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19521v1 Announce Type: new Abstract: Recurrent-depth Transformers apply shared computation repeatedly, but differ in how they retain information across steps. We compare a Block Universal Transformer (BUT), which carries only its current hidden state; CoTFormer, which also retains an expanding attention cache; and a new LSTM Universal Transformer (LSTM-UT) with bounded gated memory. On Rule 30 cellular automata, BUT extrapolates to unseen recurrent depths more reliably than CoTFormer, although its accuracy eventually degrades. State and cache interventions show that CoTFormer's failure depends on their interaction: correcting the current state can temporarily restore accuracy, while retained history can undermine that correction. In a delayed-recall task, BUT also outperforms CoTFormer despite lacking direct access to past states; CoTFormer does not reliably select the requested cached representation. LSTM-UT improves both depth extrapolation and delayed recall over these baselines. The results support bounded gated memory as an effective inductive bias for repeated computation and later retrieval in these tasks.
