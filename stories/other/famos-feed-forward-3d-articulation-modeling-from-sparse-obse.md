---
title: "FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.20817"
authors: ["Kevin Qu", "Tao Sun", "Massimiliano Viola", "Liyuan Zhu", "Zhizhuo Zhou", "Sayan Deb Sarkar", "Konrad Schindler", "Iro Armeni"]
date: "2026-09-16T20:00:00.000Z"
score: ""
guid: "2609.20817"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.20817.png"
generated: "2026-09-18T20:52:59+05:30"
---

Modeling articulated objects from sparse monocular views is challenging because each observation reveals only partial geometry and motion evidence. Most feed-forward methods infer articulation from a single observation and therefore rely heavily on learned category-level shape priors. We present FAMOS, a feed-forward model that predicts movable-part segmentation and joint parameters from a sparse, unordered set of partial point clouds. Our model jointly reasons over multiple observations and naturally supports a variable number of inputs, including a single view. To aggregate articulation cues across observations, we introduce a Multi-state Articulation Transformer with alternating state-wise and global attention. We further propose an observed articulation span objective that supervises the motion range each part exhibits across the input observations, encouraging the model to leverage the full observation set. To overcome the limited scale and diversity of existing datasets, we introduce a procedural data generator that synthesizes self-annotated assets during training. Experiments on PartNet-Mobility, ACD, and ArtiCraft-10K demonstrate consistent improvements over both feed-forward and optimization-based baselines. Project page: https://kevinqu7.github.io/famos
