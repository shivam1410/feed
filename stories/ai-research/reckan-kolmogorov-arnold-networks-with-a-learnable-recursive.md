---
title: "RecKAN: Kolmogorov-Arnold Networks with a Learnable Recursive Polynomial Basis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01729"
authors: ["Amirhosein Azarpour"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.01729v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01729v1 Announce Type: new Abstract: Kolmogorov--Arnold Networks (KANs) replace the fixed scalar weights of a standard network with learnable univariate functions on each edge, but existing variants still fix the \emph{basis} that those functions are built from: B-splines, Chebyshev polynomials, wavelets, or Jacobi polynomials, and learn only the combination weights over it. We introduce RecKAN, which instead defines the basis itself by a second order polynomial recurrence, $R_{n+1}(x) = (ax^2+bx+c)R_n(x) + (dx+e)R_{n-1}(x)$, whose five coefficients are learned jointly with the network. We show this recurrence recovers several classical polynomial families including both kinds of Chebyshev polynomials, Fibonacci, Pell, and Jacobsthal polynomials as special cases, and prove that its degree grows linearly in $n$ exactly on the sub-family containing all of them, giving a concrete sense in which the learned basis can move beyond any fixed classical choice. Across multiple benchmark datasets spanning image, text, biomedical time series classification, and time series forecasting, RecKAN outperforms three parameter-matched KAN baselines (Chebyshev, Jacobi, and spline based) on all classification tasks and achieves the lowest MSE on the ETTh1 forecasting benchmark. Additionally, when used as a classifier head with a convolutional backbone, RecKAN achieves higher accuracy than standard MLP heads on Fashion MNIST, CIFAR-10, and SVHN. On a synthetic function fitting benchmark it tracks a sharply oscillatory target that a parameter comparable MLP under fits. We further show that the learned recurrence coefficients are interpretable: on the task requiring the most local structure, training moves the basis away from the linear degree growth regime that contains every classical family we identify, consistent with our theoretical analysis of what that structural shift enables.
