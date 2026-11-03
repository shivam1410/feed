---
title: "Output-Aware Block Influence: Jacobian-Lens Weighting for Depth Pruning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00015"
authors: ["Kyle Lemoi, Jonathan Yong, Shubhankar Tripathy, Priestley Fernandes, Anirban Majumder, Zarreen Reza"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.00015v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Depth pruning removes entire transformer blocks and therefore depends on a reliable criterion for identifying which blocks can be removed. Block Influence (BI) ranks blocks by how minimally they rotate the hidden state. However, local redundancy does not necessarily imply downstream irrelevance. We address this limitation using the Jacobian Lens (J-Lens) neural artifact, a map transporting perturbations at a layer to the final residual stream. At a common sparsity level, pruning scores applying J-Lens transportation to $BI$, what we call $J-BI$, were found to improve post-pruning accuracy by up to 19 points over $BI$ while reducing damage to perplexity for Qwen3-8B, Llama-3.1-8B-IT, and Gemma-3-12B-IT. We also perform a single-block ablation study and use J-Lens probing to explain why the proposed scores improved performance.
