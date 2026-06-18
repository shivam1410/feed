---
title: "Task-Restricted Symmetries in Recurrent Weight Space"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18457"
authors: ["Simon Dr\\\"ager"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.18457v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18457v1 Announce Type: new Abstract: Recurrent networks can contain substantial functional redundancy in weight space: changing a recurrent matrix may leave the input-output rollout nearly unchanged on a task distribution, while similar-scale changes can destroy the same behavior. We study this redundancy in one-layer tanh RNNs using ordered real Schur coordinates. The Schur form separates spectral blocks from directed nonnormal couplings, giving a diagnostic basis for structured ablations that keep the input and readout maps fixed. In a fixed-length copy task, selected nonnormal Schur couplings can be removed with little loss in some trained solutions, whereas other couplings are necessary for accurate autonomous replay. Across flip-flop, sine generation, and context-dependent integration, the loss-preserving ablation profile varies across tasks and trained solutions. These results identify candidate approximate functional invariances, not universal symmetries of recurrent weight space. Schur-coordinate ablations provide a practical diagnostic for which structured perturbations preserve a trained recurrent solution and which ones disrupt its computation.
