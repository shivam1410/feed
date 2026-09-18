---
title: "Stiefel Attention: When the Geometry of Transformer Projection Matrices Dominates Optimizer Choice---and When It Does Not"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19363"
authors: ["Rub\\'en Dar\\'io Guerrero"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19363v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19363v1 Announce Type: new Abstract: The query and key projections $\WQ,\WK$ in attention are almost always trained by Euclidean optimizers with no constraint on their geometry. We constrain them to the Stiefel manifold and optimize them there with a Riemannian Adam that carries one scalar second moment per frame, caps its step by a trust region, and retracts polarly. Four propositions prove this update is steepest descent in the embedded metric, independent of gradient scale, well conditioned, and exactly $\mathrm{O}(d)$-equivariant, each certified numerically in \texttt{float64}. A fifth supplies the mechanism: weight decay has \emph{identically zero} Riemannian gradient on $\St(d,r)$, since $W = W I_r$ lies in the normal space, so the learned attention geometry survives the collapse cycles that decay drives through the rest of the model. On modular arithmetic grokking, a single run holds $97.0\%$ validation accuracy at epoch 20\,000 against the baseline's $61.1\%$---an unstable endpoint we report as evidence for the mechanism rather than as an effect size. On CIFAR-10 patches the same rule gains $\mathbf{+8.98}$\,pp over 12 paired starts ($t{=}60.6$, $12/12$), and the gap widens with data rather than eroding. The step rule earns this: a fixed-step Riemannian update is degree one in the gradient, so it moves $24$--$40\times$ less per step than an identically shaped AdamW matrix---its frames barely leave their initialization, and freezing them outright costs only $0.28$\,pp. An ablation credits the whole gain to making the step scale free, and nothing measurable to the projector or to equivariance. A negative result sharpens the account: gauge removal cannot motivate the method, because a direction along which the loss is invariant carries no gradient at all.
