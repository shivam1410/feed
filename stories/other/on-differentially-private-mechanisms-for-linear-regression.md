---
title: "On Differentially Private Mechanisms for Linear Regression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08737"
authors: ["Bardiya Aryanfard, Monika Henzinger, Farhood Rostamkhani"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08737v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

We study the classic least-squares linear regression problem under differential privacy (DP) in the batch and the continual observation setting. In the latter setting, the mechanism receives a stream of $n$ data points $(x_i,y_i)$ ($x_i\in\mathbb{R}^d$ and $y_i\in\mathbb{R}$) and must output an estimate of the optimal parameters at each time step $i$. Although differentially private linear regression has been extensively studied in the batch setting, the problem remains underexplored for the continual setting, with prior work being restricted to constrained linear regression and update time polynomial in $n$. In this work, we introduce ContinualAdaSSP, the first mechanism for unconstrained linear regression under continual differential privacy. Our mechanism's suboptimality gap is proportional to $\sqrt{d}\operatorname{polylog}(n)$. It requires $O(d^2\log{n})$ space and $O(d^2\log{n}+d^{\omega})$ update time, where $d$ is the dimension of the input space. We also study fundamental limits of differentially private linear regression by showing the first lower bounds for the box-constrained least-squares linear regression problem. Our lower bounds are proportional to $\min(n,\frac{\sqrt{d}}{\log^{1.5}d})$ for $(1,O(\frac{1}{n}))$-DP, and $\min(n,\frac{d}{\epsilon})$ for $\epsilon$-DP, and are derived using a reduction from a fingerprinting code problem from [Peter et al., 2024], providing new insights into the inherent hardness of this canonical task. Our experimental evaluation on real-world datasets shows that the accuracy of our continual observation mechanism clearly outperforms any other known differentially private mechanism for this problem such as rerunning the batch algorithm at each time step.
