---
title: "Loss-Parameterized Fisher Width Along Learning Trajectories"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21561"
authors: ["Vu Khac Ky"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21561v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21561v1 Announce Type: new Abstract: Fisher width measures the Gaussian width of a probe set after deformation by the local Fisher geometry. We study its evolution along learning trajectories and ask when training loss can serve as an effective coordinate for this quantity. We first derive an exact trace--shape factorization and a deterministic stability bound for fixed compact probes. In a population Gaussian-teacher logistic model, the teacher-aligned state is extremal on every loss level below $\log 2$: it has minimal parameter norm and maximizes both Fisher trace and Euclidean-ball Fisher width. We then show that population gradient flow asymptotically selects this branch, with explicit rates for the aligned and orthogonal coordinates. This yields, for $d\geq2$, \[ \frac{w_F(B_2^d;\theta(t))} {\sqrt{L(\theta(t))}} \longrightarrow \frac{\sqrt6}{\pi}\mathbb E[\chi_{d-1}]. \] Controlled full-Fisher experiments support the matched-loss branch and the population predictions. In a nonlinear MLP with a diagonal model-Fisher approximation, GD and SGD remain close at matched loss, whereas Adam follows a substantially displaced branch; the fixed probes tested retain highly similar temporal shapes. These results support a branchwise, rather than universal, loss parametrization of Fisher width.
