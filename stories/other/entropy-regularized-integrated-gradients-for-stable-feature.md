---
title: "Entropy-Regularized Integrated Gradients for Stable Feature Attribution"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23600"
authors: ["Rukmangadh Sai Myana, Sumit Kumar Jha, Yanzhao Wu"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23600v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Path-based attribution methods like Integrated Gradients (IG) are widely used to interpret neural networks, yet imperceptible input perturbations can drastically alter their attribution maps while leaving model predictions unchanged. We introduce Entropy-Regularized Integrated Gradients (ERIG), a path-based attribution method that intrinsically attenuates gradient irregularities along the integration path using maximum-entropy softmax weighting with temperature parameter $\tau$. We quantify the effect of the entropy-regularized weighting on attribution stability by using the Lipschitz properties of the model and its gradients. We decompose the attribution change under an input perturbation into a model-response term, whose bound is $\tau$-independent, and a weight-variation term, whose bound decreases at rate $\mathcal{O}(1/(2\tau))$. Their ratio $R(\tau)$ characterizes the trade-off between gradient information and attribution stability. We further add a new dimension to attribution evaluation by adapting classical noise estimators into two metrics, LINV-C and LINV-P, that quantify attribution noise. Across eleven CNN and Transformer backbones on ImageNet and Oxford-IIIT Pet datasets, our experiments show that, relative to the next-best method, ERIG remains comparable on ranking-based fidelity metrics while improving localization by approximately 24% and attribution stability by approximately 47-fold on average, reaching up to four orders of magnitude improvement over IG, all at negligible additional computational cost.
