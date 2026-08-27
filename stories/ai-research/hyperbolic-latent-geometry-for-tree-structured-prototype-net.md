---
title: "Hyperbolic Latent Geometry for Tree-Structured Prototype Networks: A Local-vs-Global Trade-off"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25199"
authors: ["Peter Flo, Luca Grossmann"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.25199v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25199v1 Announce Type: new Abstract: We study a tree-structured regularizer over class-prototype layouts in a hierarchical-classification model and ask whether the choice of latent manifold for the prototypes (Euclidean R^d vs. the Poincare ball B^d_c) affects how well that regularizer can be satisfied without distorting the data likelihood. The two manifolds differ only in their volume growth: hyperbolic space grows exponentially with radius and embeds trees with provably lower distortion than R^d of matched dimension, so the structured regularizer should be cheaper to satisfy on B^d_c. Across 150 seed-replicated regularized maximum-likelihood fits spanning embedding dimension, curvature, and regularizer strength on WikiArt (27 styles, 81,446 paintings, frozen CLIP ViT-B/16 features), we find a single robust effect: Poincare prototypes preserve the topology of the nearest-neighbor graph in latent space substantially better than matched Euclidean prototypes (sibling recall@5 +8.7 pp, cousin recall +15.2 pp; paired-t p < 10^-4, sign agreement 0.94), and the gap holds across three reference-tree definitions (hand-built lineage, CLIP-derived, and DINOv2-derived). On classification, Euclidean prototypes are tied with logistic regression on raw encoder features, indicating no detectable contribution from the latent geometry; only the hyperbolic fit improves on a k-NN encoder baseline for local retrieval. Global tree-fidelity comparisons are unstable across reference trees and we do not claim a winner. The results give an empirical separation, on a real hierarchical-classification problem, between two natural latent geometries for a class-structured regularizer.
