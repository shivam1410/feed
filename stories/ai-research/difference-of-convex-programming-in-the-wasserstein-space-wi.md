---
title: "Difference of Convex Programming in the Wasserstein Space with Applications to MMD Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27767"
authors: ["Cl\\'ement Bonet, Pierre-Cyril Aubin-Frankowski, Youssef Mroueh"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2606.27767v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27767v1 Announce Type: new Abstract: Optimizing functionals over the space of probability measures is now ubiquitous in machine learning. A widely used approach is to perform the optimization directly over the Wasserstein space, but many objective functionals of practical interest are non-convex along Wasserstein geodesics, making the analysis of standard first-order methods challenging. In this work, we study a class of objectives over the Wasserstein space that admit a difference-of-convex (DC) decomposition and we lift the classical convex-concave procedure (CCCP) to this setting. Under smoothness and strong convexity assumptions on the convex components of the decomposition, we prove almost stationarity along the iterates of the resulting algorithm. Our main focus is on the Maximum Mean Discrepancy (MMD) and the Energy Distance (ED) functionals, for which we develop explicit Wasserstein DC decompositions, and establish local convergence of the scheme under mild assumptions. Empirically, we show that well-chosen DC decompositions yield faster and more stable convergence than Wasserstein gradient descent on these MMD objectives.
