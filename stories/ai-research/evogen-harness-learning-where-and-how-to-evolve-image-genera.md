---
title: "EvoGen-Harness: Learning Where and How to Evolve Image-Generation Harnesses"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00383"
authors: ["Jiabin Luo, Yinan Liu, Chunlei Meng, Yufei Guo"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.00383v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Modern text-to-image (T2I) systems can be improved without modifying generator parameters by adapting the external system around frozen generators. However, existing approaches typically optimize a predefined dimension, such as prompts, routing, or workflows, restricting the space in which generation failures can be corrected. Allowing multiple generator-external responsibilities to evolve provides a broader adaptation space, but introduces a new challenge: visual feedback reveals what failed, but not where persistent evolution should occur or how this space should be explored efficiently. We introduce EvoGen-Harness, a generator-agnostic framework for multi-responsibility image-generation harness evolution, together with Trace (Trajectory-Relative Attribution and Coordinated Evolution). Trace aggregates evidence across stochastic executions, uses failure attribution as a search prior to focus candidate updates, and progressively re-attributes residual failures to coordinate evolution across responsibilities, while No-Patch and held-out validation prevent unnecessary or harmful updates. Across GenEval2, T2I-CompBench++, and WISE, EvoGen-Harness improves over the strongest evaluated baselines by +0.2633, +0.0720, and +0.0752, respectively, while achieving 87.9-91.4% attribution recall, 94.8% No-Patch accuracy, and only 1.9% regression. These results demonstrate that attribution-guided multi-responsibility evolution can substantially enhance frozen T2I systems beyond single-dimension adaptation.
