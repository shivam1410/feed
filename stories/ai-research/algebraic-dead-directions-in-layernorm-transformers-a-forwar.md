---
title: "Algebraic Dead Directions in LayerNorm Transformers: A Forward-Pass-Only Diagnostic at LLM Scale"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19491"
authors: ["Tejas Pradeep Shirodkar, P. J. Narayanan"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19491v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19491v1 Announce Type: new Abstract: Pretrained transformers sit near singular minima of the loss, where the Fisher information metric degenerates along dead directions: directions in parameter space along which the directional Fisher vanishes. Locating such a direction normally needs a forward pass and an eigendecomposition of activations, or a sampling-based complexity estimate; none returns a direction computable from the network's parameters alone. We give one, for LayerNorm transformers. The inverse-scale direction $\gamma^{-1}/\|\gamma^{-1}\|$ of the LayerNorm affine is an exact algebraic kernel of the post-final-norm centred activation covariance, for any input distribution, and induces a corresponding dead direction in parameter space. It is read from the LN scale parameter alone, with no forward or backward pass and no eigensolve: the cheapest dead-direction read, specific to LayerNorm. We test it on $14$ pretrained transformers ($9$ LayerNorm, $5$ RMSNorm; $160$M-$35$B; language and vision objectives). At random initialisation the predicted direction matches the measured bottom singular direction (one forward pass, direct SVD) to four decimal places on $9/9$ LayerNorm models, and is correctly absent on $5/5$ RMSNorm models, which lack the mean-subtraction projector that creates it. On the trained checkpoint the covariance eigenvalue along this direction deepens by ${\sim}10^3\times$ and further dead directions open; the random-init-to-trained gap is a one-forward-pass, per-checkpoint readout of singular structure along the predicted coordinate. Two consequences follow in closed form: the residual stream's smallest singular value is preserved block-to-block on $13/14$ transformers measured on their own input distribution, the one exception (Gemma$4$-$31$B) a genuine dead direction the same read pinpoints; and the kernel direction's presence classifies a transformer's normalisation from the parameters alone.
