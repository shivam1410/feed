---
title: "LARA: Lightweight Adapters in the Residual Stream for Composable Adaptation and Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.28669"
authors: ["Pascal Ekin, Hyosun Choi, Wei Jie"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.28669v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.28669v1 Announce Type: new Abstract: We present LARA (Lightweight Additive Residual Adaptation), a method for efficient adaptation that operates in the residual stream of a frozen model rather than in its weights. Where LoRA adds an update of low rank to weight matrices, LARA reads the hidden state at a small set of layers and adds a correction of low rank back to the residual stream, leaving all base weights untouched. On a code fine-tuning task and on preference optimization (DPO), LARA matches LoRA at equal parameter counts. Because adaptation is a frozen base plus a residual, LARA exposes a scale {\gamma}, applied at inference, that interpolates smoothly between base and adapted behavior, a form of graded control that adaptation in weight space does not offer. Finally, because each behavior is a small residual module over a shared frozen base, many behaviors can be held resident at once and routed automatically per token. We place seven behaviors, six fine-tuned and one optimized for preference, on one frozen 1.5B model for roughly 33 MB of overhead, against one full model for each behavior. Because the base is untouched, behaviors are trained separately and selected per token rather than loaded on demand, which suits hosting many behaviors, and adding new ones, on a single model on a device.
