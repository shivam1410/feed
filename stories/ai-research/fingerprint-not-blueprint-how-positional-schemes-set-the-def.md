---
title: "Fingerprint, Not Blueprint: How Positional Schemes Set the Default Spectral Algebra of Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06621"
authors: ["Li Hengyu (Institute for Solid State Physics, The University of Tokyo)"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.06621v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06621v1 Announce Type: new Abstract: The pre-softmax score of an attention head is a bilinear form $score(i,j) = x_i^T M x_j$ in a learned operator $M = W_q^T W_k$. Because M is generally non-symmetric, hence non-normal, it has a complex eigenspectrum and non-orthogonal eigenvectors, the regime where non-Hermitian and random-matrix tools apply. We ask what this spectrum encodes, at three levels for previous-token and induction circuits. Statically, across seven pretrained models spanning three positional schemes, the strongest previous-token heads are spectrally rotational under RoPE and non-rotational, or content-like, where position enters outside QK (learned-absolute and ALiBi); the model-level separation is perfect at every top-k examined (exact permutation $p=0.029$), and zeroing the per-frequency RoPE phase $Im(M_t)$ eliminates induction on a pre-identified previous-token head in all three RoPE models. Dynamically, over public Pythia checkpoints every head originates at the random-matrix (Ginibre) null; the rotational signature emerges with the behavior, not before it, and the population-median suppression that yields the final profile follows circuit formation, so the profile is a consolidated fingerprint, not a precursor. Causally, and at toy scale, no spectral channel is necessary: constrained two-layer training reroutes around every ban with capability intact, albeit at a significant formation delay (four pre-registered contrasts, $q_BH <= 0.016$). The cost structure exposes each scheme's default: imposing symmetry slows learned-absolute models by a factor of 2.9, whereas a RoPE head with a fully symmetric static M still routes directionally via the phase channel, impossible under absolute positions. Within the settings examined, the positional scheme sets the default spectral algebra of an attention head's solution: a fingerprint sculpted after function, not a hard constraint upon it.
