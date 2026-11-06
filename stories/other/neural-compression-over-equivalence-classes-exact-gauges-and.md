---
title: "Neural Compression over Equivalence Classes: Exact Gauges and Functional Rate-Distortion"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07233"
authors: ["Toshiaki Koike-Akino"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07233v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Neural networks admit many parameterizations of the same or nearly the same function, but deployment typically stores whichever parameter vector training happens to produce. We show that this representational freedom can itself be used for compression. Rather than redesigning the codec, we search over exact function-preserving transformations and controlled functional perturbations, using the unchanged physical compressor itself to select cheaper representations. Exact gauge families provide a zero-distortion reference under the strict audit; allowing small functional changes exposes much larger rate-distortion gains. Across SmolLM2 and Qwen3, our method reduces Zstandard-compressed checkpoint size by up to 23.4\%, with similar relative reductions under gzip, Brotli, and ZipNN, establishing trained-network representational freedom as a practical storage resource.
