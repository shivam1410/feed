---
title: "LayerRoPE: Dynamic Depth-wise Magnitude & Angular Superposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09179"
authors: ["Shikhar Srivastava, Christopher Kanan"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2610.09179v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

As data propagates through a Transformer, the norm of its hidden states grows by orders of magnitude with depth, a phenomenon framed as 'curse of depth' and nearly universally treated as a pathology to be suppressed. We take the opposite view. Across 16 pre-trained LLMs from 9 families, spanning dense, mixture-of-experts and hybrid architectures and Pre-, Peri- and Post-Norm designs, we find that this growth reflects an emergent depth-positional encoding, carried by the only learned per-layer gain on the residual stream, the normalization weight $\gamma$: with depth, $\gamma$ grows in magnitude and rotates in direction, jointly encoding the layer index. We make this depth-conditioned encoding explicit with LayerRoPE, an implicit analog of RoPE along the depth axis, which replaces all layerwise $\gamma$ vectors with a single shared vector and depth-conditioned scalars, at a net reduction in parameters and $<0.02\%$ change in FLOPs. Across a model ladder scaled up to $100$B+ tokens, LayerRoPE consistently outperforms Pre-, Post- and Peri-Norm and Layer-Norm Scaling, reaching Pre-Norm's 1.3B loss with $3.4\times$ less compute; LayerRoPE is the only approach that shows strong convergence and improves near monotonically as depth scales to 512 layers. It improves learning-rate sensitivity by $3$-$10\times$, and transfers naively to and consistently improves looped latent models and Vision Transformers. Inspecting its learned schedule inverts the prevailing premise: LayerRoPE does not shrink the residual stream but widens it, damping what each block reads while amplifying what it writes. Depth stability, our results suggest, calls not for suppressing the residual stream, but for depth-conditioned regulation of the computational blocks it feeds.
