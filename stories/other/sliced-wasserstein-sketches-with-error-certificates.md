---
title: "Sliced Wasserstein Sketches with Error Certificates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20788"
authors: ["Elaheh Akbari, James Liu, Keaton Hamm, Soheil Kolouri"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20788v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Compact representations that support geometrically meaningful comparisons are valuable for learning from probability distributions. We study optimal, free-weight $M$-atom quantization of one-dimensional probability measures in quadratic Wasserstein distance and extend it to higher dimensions via slicing. Using $L$ shared projections yields a sketch with $O(LM)$ comparison time. Our main result is an exact decomposition of squared distance error into residual and partition-mismatch terms, yielding computable certificates for arbitrary centroid sketches. For optimal sketches, a finite $(2+\delta)$ moment for some $\delta>0$ guarantees $O(M^{-1})$ error in the finite-direction sliced distance, while equal-mass sketches can converge more slowly. Each slice preserves its mean, while storing residual energies enables covariance recovery from sufficiently many generic directions. Experiments on document, point-cloud, and flow-cytometry benchmarks show that optimal sketches substantially reduce storage while preserving the classification performance of uncompressed sliced distances. They also improve generalization from few labelled subjects and support end-to-end learning as compact pooling layers.
