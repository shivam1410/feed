---
title: "Kernel-based Interpolatory Methods for Context Compression of Attention Mechanisms"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40943"
authors: ["Michel Fabrice Serret, Laura Grigori"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2610.40943v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

The bottleneck of attention mechanisms, which are the fundamental building block of modern language models, is their quadratic complexity in terms of context size. There has thus been an increasing interest in the compression of the context, also called KV-cache compression. In this article, we consider the problem of compressing the context of attention mechanisms by first formulating it in the Hilbert space associated with its kernel. In this formalism, attention can be represented as the ratio of two linear maps whose interpolant is also the ratio of interpolants, this allows us to consider the interpolation of the linear maps directly. We thus introduce two novel KV-cache compression methods which we call GAIM and Q-DAIM, based on the Generalized Empirical Interpolation Method (GEIM) and the Q-Discrete Empirical Interpolation Method (Q-DEIM), respectively. As the cost of these methods is quadratic in terms of context length, we propose surrogate models based on the Taylor series, the Performer and the Random Fourier Features method which allow the compression to be done in linear time. Finally, we extend this result to the streaming attention setting, providing new methods which allow one to penalize the selection of interpolation nodes based on the previously interpolated context and to update the previous interpolation based on new information. We then provide numerical results on the convergence of the residuals and the output error in future queries and preliminary results on the LongBench-E benchmark showing performance comparable to the state-of-the-art methods. These experiments suggest that the range revealed by our Q-DAIM method could help identify where information is concentrated in the KV cache, thus enabling an efficient compression.
