---
title: "RankLane: Efficient MoE Prefill on Accelerators with Ranked Expert Capacities"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00421"
authors: ["Wentao Ni, Chihao Yu, Hong Cai, Mingu Lee, Hejia Zhang, Fatih Porikli, Jishen Zhao"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2611.00421v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Mixture-of-experts (MoE) models expand model capacity by activating only a subset of experts for each token. On accelerators with static execution plans, expert capacities and placement are fixed before routing reveals each expert's load. Uniform worst-case capacities waste work on padding; smaller capacities tied to expert identities can overflow. We present RankLane, which ranks each device's experts by current load and assigns them to fixed-capacity lanes. Runtime indices select experts and token rows while tier populations, shapes and device placement remain fixed. An aggregation graph preserves device ownership and reduces each token's local contributions on one core. Routing calibration and measured execution costs guide tier selection; overflowing chunks rerun at full capacity. We evaluate full-model prefill of Qwen3-30B-A3B and Gemma 4 26B-A4B with MXFP6 weights on four Cloud AI 100 Ultra SoCs, using 128-2048-token chunks and including overflow detection and in-program recovery support. Against a dense baseline, RankLane achieves end-to-end prefill speedups of 1.27-4.18x on Qwen3 and 1.93-3.46x on Gemma.
