---
title: "GeoTTER: Leveraging Local Geometry of Optimal Transport for Zero-Shot Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13518"
authors: ["Wei-Yang Alex Lee, Rudrasis Chakraborty, Vishnu Lokhande"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13518v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13518v1 Announce Type: new Abstract: We present GeoTTER, a novel framework that redefines optimal transport in the realm of zero-shot classification. Conventional methods often suffer from miscalibration and a lack of adaptability, as they rely on fixed cost matrices derived solely from pre-trained model embeddings. In contrast, GeoTTER addresses these limitations by incorporating two key techniques. First, to alleviate high-frequency label jaggedness (sample-level manifold jitter that assigns neighboring embeddings to different classes), GeoTTER integrates local geometric structure into the optimal transport formulation via graph-Laplacian smoothing, a technique grounded in spectral graph theory that enforces neighborhood consistency. Second, to correct coherent angular drift (a low-frequency orientation bias in which large groups of samples share the same angular offset from their true label prototypes), we fuse clustering-guided cost components with a globally adjusted transport cost, achieving a multi-objective optimization that respects both global distribution constraints and latent data structure. With a median improvement of +6.82% compared to zero-shot and +2.13% compared to OTTER, GeoTTER shows robust improvements across a diverse set of benchmarks.
