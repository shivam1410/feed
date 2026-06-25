---
title: "Holographic Memory for Zero-Shot Compositional Reasoning in Knowledge Graphs: A Mechanistic Study of Where and Why It Fails"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24948"
authors: ["Randhir Kumar"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.24948v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24948v1 Announce Type: new Abstract: Knowledge graph embedding (KGE) models predict single-hop links well but have no mechanism for zero-shot compositional queries: multi-hop questions whose relation chains never appeared during training. Holographic Reduced Representations (HRR), which bind and unbind symbols via circular convolution, are a theoretically attractive candidate, since binding is approximately invertible and associative. We test whether this promise holds. We study two holographic memory variants, real-valued HRR and phase-only Fourier HRR (FHRR), each with a modern Hopfield cleanup, on FB15k-237 over five seeds. Four findings follow. First, both are competitive single-hop retrievers (filtered MRR 0.358 +/- 0.002 for HRR, 0.350 +/- 0.021 for FHRR). Second, neither composes zero-shot: accuracy stays at chance across all cleanup temperatures. Third, the main contribution, we localise the failure mechanistically. A hop-1 probe shows the memory recovers the correct intermediate entity with high fidelity (MRR 0.896 +/- 0.002 for HRR), yet composition still fails even with a verified-correct intermediate. A second probe shows why: posing the ground-truth second-hop fact as a standalone atomic query, bypassing composition entirely, already recovers it at only 0.26 to 0.48x average atomic accuracy, uniformly across relation fan-out. The bottleneck is not the bind-unbind algebra or the cleanup; it is that facts compositional chains pass through are intrinsically harder for the superposed memory to retrieve, a capacity and interference effect present already at a single hop. Fourth, we prove (Lemma 4.1) that FHRR's softmax cleanup is not phase-equivariant, compounding the primary failure on the minority of chains where hop-1 itself errs. Fixing zero-shot composition requires improving retrieval capacity under superposition, not just redesigning the cleanup.
