---
title: "Revocable Learned State via Process Sidecars"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30788"
authors: ["John Sweeney"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.30788v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30788v1 Announce Type: new Abstract: Language models are often adapted in stages: a public skill phase, a private memory phase, and a later safety phase that learns to refuse outputs tied to the remembered entities. Revoking the memory after the safety phase is not the same problem as subtracting the memory update: the later safety optimizer has transported the memory direction. We introduce process sidecars, a two-coefficient edit family $\hat{\theta}(\lambda,\gamma)=\theta_{\mathrm{AMS}}-\lambda\Delta_{\mathrm{M}}-\gamma\hat{R}_{\mathrm{S}\leftarrow\mathrm{M}}$, with $\hat{R}_{\mathrm{S}\leftarrow\mathrm{M}}=\hat{J}_{\mathrm{S},\varepsilon}(\Delta_{\mathrm{M}})-\Delta_{\mathrm{M}}$, where $\hat{J}_{\mathrm{S},\varepsilon}$ is a centered secant through the realized future AdamW safety-training process. The implementation uses $\varepsilon=1$ at the natural memory-edit scale; it reuses $\theta_{\mathrm{AMS}}$ as the positive endpoint and computes one additional safety trace at $\theta_{\mathrm{A}}-\Delta_{\mathrm{M}}$. We prove two things. First, the exact sidecar, using the true transported direction $R_{\mathrm{S}\leftarrow\mathrm{M}}$ rather than the secant estimate, at $(\lambda,\gamma)=(1,1)$ recovers the counterfactual safety-only oracle $\theta_{\mathrm{AS}}$ up to second order; the proof treats AdamW as an augmented-state map over parameters, first moments, and second moments. Second, this process information is necessary: whenever future safety training bends the memory direction, every scalar task-arithmetic edit leaves first-order counterfactual error, while the process-sidecar edit is second-order accurate. Across three models, the validation-selected 2D edit improves held-out refusal closure over naive task arithmetic in all trials, and over the $\gamma=\lambda$ process-JVP subfamily, the diagonal slice of the cached 2D grid, in all paired trials.
