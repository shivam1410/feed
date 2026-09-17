---
title: "The Free Inference Dimension: Complexity Measure for Zero-Collision Navigation under Hypothesis Mixtures"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17816"
authors: ["Luiz Carlos Castro Guedes, Edward Hermann Haeusler"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17816v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17816v1 Announce Type: new Abstract: Solomonoff induction frames prediction as a mixture over computable hypotheses, typically leading to identification of the true environment. In a finite meta-reinforcement learning setting with nested constraint families, in our previous work, we observe a different regime: a value-mixture (VM) agent achieves near-optimal, zero-collision navigation without identifying the true environment, a phenomenon we call Free Inference. This regime persists up to a sharp density threshold, beyond which performance degrades and posterior-mode selection (PMS) becomes preferable. We formalize this behavior via the Free Inference dimension dFI(S,N), a combinatorial measure of the environmental complexity a VM agent can handle while preserving trajectory coherence. We prove dFI is strictly smaller than the VC-dimension and relates to the Natarajan dimension up to a path-length factor, capturing the cost of non-decomposable loss. A PAC-style relaxation yields generalization bounds driven by dFI^(epsilon,delta). We also define a complementary PMS identification dimension and show that a hybrid strategy---averaging until the first collision, then switching to selection---is optimal, with links to Littlestone-type dimensions supported by grid-world experiments.
