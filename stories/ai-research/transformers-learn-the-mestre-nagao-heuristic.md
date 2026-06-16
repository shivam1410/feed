---
title: "Transformers Learn the Mestre-Nagao Heuristic"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15036"
authors: ["Pranav Venkata Konda"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2606.15036v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15036v1 Announce Type: new Abstract: We train a two-layer transformer encoder to classify rational elliptic curves $E/\mathbb{Q}$ of conductor $\leq 10000$ as either rank 0 or rank 1 from the first 128 normalized Frobenius traces. We achieve >99% accuracy on both classes, and accuracy is essentially unchanged on test curves with no isogeny or quadratic-twist relative in the training set. We then apply techniques from mechanistic interpretability such as attention analysis, linear probing, activation patching, logit attribution, and neuron-level circuit analysis to reverse-engineer the algorithm the (centroid in function space) model learned. We find that a sparse circuit of 20 out of 512 layer-1 MLP neurons is sufficient for rank prediction under a linear probe with an AUROC of 0.992 at plateau, implementing a push-pull detector architecture of rank-0 and rank-1 detectors with a one-sided readout. However, we notice that the model has sub-optimal readout problems indicating a mismatch in rank-order between the readout pathway and the discriminative circuit. Critically, the learned input weights of the top discriminating neuron match the Mestre-Nagao sum heuristic weights $\log(p)/(p\cdot \log{B})$ with a Spearman coefficient $r = 0.997$ and Pearson coefficient $r = 0.952$: the model has learnt a result from analytic number theory from the Frobenius trace data alone. We additionally find that all 50 independently trained models concentrate CLS attention on prime positions at 2-50$\times$ the rate of composite positions. The CLS embedding encodes $\log{L(E,1)}$ with $R^2 = 0.962\pm 0.011$ across the 50 models (after controlling for the conductor). Activation patching analysis reveals that attention weights are dissociated from causal information flow. Additionally, the 50 solutions from training are near-identical in function space (with pairwise agreement $>$98.8%) despite large weight space barriers.
