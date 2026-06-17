---
title: "Constrained Diffusion Models with Primal-Dual Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17192"
authors: ["Samar Hadou, Yigit Berkay Uslu, Alejandro Ribeiro"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17192v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17192v1 Announce Type: new Abstract: This paper develops constrained diffusion models with primal-dual inference (PDI) to sample from optimal distributions of entropy-regularized optimization problems with \emph{average} constraints. We formalize constrained sampling in the Lagrangian dual domain, where the optimal distribution takes the form of a Gibbs distribution indexed by the optimal dual variable. Rather than estimating this dual multiplier before sampling and freezing it throughout generation, PDI jointly infers the optimal primal distribution and its parametrizing dual variable. Each reverse diffusion step denoises using the score field associated with the current multiplier and then updates the multiplier through dual ascent using the estimated constraint violation of the denoised samples. To enable this conditional score field, we train a single dual-conditioned score network over the family of Gibbs distributions induced by the dual variables encountered during inference. We prove that the time average of the dual variables generated along the inference trajectory converges to a neighborhood of the dual optimum and bound the effect of residual dual mismatch on the terminal distribution through schedule-dependent stability factors. We evaluate PDI on constrained sampling from a mixture of Gaussians, wireless resource allocation, and portfolio management.
