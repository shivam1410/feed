---
title: "Drift Variation Autoencoder: Unifying Generation and Representation Learning through Conditional Posterior Flow Matching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25138"
authors: ["Jiarui Cao"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2608.25138v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25138v1 Announce Type: new Abstract: Stochastic masking, cropping, or modality removal makes deterministic reconstruction an incomplete target: one observation can admit many clean completions. This work takes the corresponding posterior $P(X\mid C)$ as the common statistical object for conditional generation and generatively sufficient representation learning. Drift Variation autoencoder trains a masked encoder $Z=E(C)$ and a conditional flow decoder with one clean-prediction Flow Matching loss. The analysis first decomposes the ideal conditional KL into generator approximation and the representation deficiency $I(X;C\mid Z)$. It then derives orthogonal risk decompositions for conditional Flow Matching. For an affine Gaussian path, the clean-prediction representation gap is zero if and only if $P(X\mid Z)=P(X\mid C)$. Thus the encoder-dependent excess clean-prediction risk induced by Flow Matching and the profiled ideal conditional KL have the same posterior-sufficient zero set, without being numerically equal objectives. An exact conditional field with a zero-noise endpoint then generates $P(X\mid Z)$ and hence $P(X\mid C)$ at a joint ideal optimum. The result extends to continuous multimodal product spaces when the complete modality tuple remains the Flow target for every observation mask. On CrossGeom-4, an 18-run controlled benchmark, observable factors have linear-probe $R^2$ of $0.9990$-$0.9992$, shuffling the joint model's encoder condition increases conditional error by $13.5\times$-$15.7\times$, and joint target attention reduces disagreement on an unobserved factor shared by two outputs by $90.1$-$92.8\%$ relative to independent target decoders. Visible modalities are also generated and reconstructed, directly validating the full-tuple objective. Unconditional mode balance remains imperfect, delimiting the empirical claim to a controlled multimodal proof of concept.
