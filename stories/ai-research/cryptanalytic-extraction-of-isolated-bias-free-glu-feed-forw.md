---
title: "Cryptanalytic Extraction of Isolated Bias-Free GLU Feed-Forward Blocks by Antipodal Separation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06631"
authors: ["Chunhui Shi, Xinwen Fu"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.06631v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06631v1 Announce Type: new Abstract: Cryptanalytic extraction has been demonstrated for ReLU networks, for networks using componentwise activations such as GELU or SiLU, and for a Transformer's final projection matrix. These methods do not recover the bias-free Gated Linear Unit (GLU) feed-forward blocks used in many modern language models. Such a block multiplies an activated linear projection by a second learned linear projection within each hidden unit, a two-branch structure absent from the network classes and final-layer setting addressed by those methods. We give a constructive, multi-stage forward-query recovery primitive for isolated bias-free GLU blocks. Finite-difference curvature supplies gate-direction candidates, and paired observations at x and -x separate gate magnitude, orientation, and value-branch coupling. Across high-precision targets, six Qwen layers, an 8,192-unit Llama subproblem, and a full-dimensional Gemma block all reach sub-percent median validation error. Four finite-precision configurations remain below 5 percent median error, but none reproduces every stored weight. These isolated-block experiments are not an end-to-end model-API attack: deriving the required internal block responses from final model outputs remains unsolved.
