---
title: "Bernstein-Schur Kernels: Random Features by Sketched Modulation and Radial Randomization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11255"
authors: ["Taha Bouhsine"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2606.11255v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11255v1 Announce Type: new Abstract: Bernstein--Schur kernels are products of a finite-feature kernel (one with an explicit finite-dimensional feature map) and a completely monotone shift-invariant kernel: nonstationary kernels that fall between the shift-invariant and dot-product templates random features usually exploit, so in general neither Bochner sampling nor polynomial sketching applies to the full kernel directly. We give one random-feature construction for the whole class that \emph{randomizes both factors: it sketches the finite modulation and randomizes the completely monotone radial factor, sampling the latter's one-dimensional Bernstein--Widder scale and then applying Gaussian random Fourier features (whose frequency is still $d$-dimensional). The feature dimension is then $Dm$, set by the sketch size $m$ and the radial-draw count $D$, free of the $O(d^2)$ size of the exact modulation feature. Keeping the modulation \emph{exact} is the analyzable limit ($m\to\infty$): there we prove unbiasedness, an exact variance for the recommended flat estimator, an expected matrix-Bernstein operator-norm bound (with a matching high-probability tail) controlled by the top eigenvalues of the kernel and modulation Gram matrices together with an intrinsic dimension rather than the crude $N\max_{ij}$ entrywise route, and a deterministic relative-spectral kernel-ridge stability result. By conditioning on the sketch, the doubly-randomized estimator inherits the same intrinsic-dimension operator-norm guarantee plus a single additive sketch term, tunable by $m$ independently of $D$. The motivating instance is the biased $yat$-kernel $k_{yat,b}(w,x)=(w^\top x+b)^2/(\|w-x\|^2+\varepsilon)$, $b\ge0$, whose family span contains the inverse-multiquadric kernel by finite differences in $b$; for it the radial mixture is the IMQ spectral sampler, and one frequency per scale is variance-optimal at a fixed radial-feature budget.
