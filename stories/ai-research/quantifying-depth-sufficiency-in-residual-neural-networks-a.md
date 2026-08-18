---
title: "Quantifying Depth Sufficiency in Residual Neural Networks: A First-Order Criterion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14664"
authors: ["Zeyu Liu, Jinhao Zhang, Yunquan Zhang, Guangming Tan, Xiang Gao, Fangming Liu, Daning Cheng"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14664v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14664v1 Announce Type: new Abstract: How can we determine whether a trained neural network is already deep enough? We study this under a fixed function-preserving residual-growth protocol specifying insertion locations, residual families, zero-output initializations, and zero-state first-order updates. We define first-order residual depth saturation as the absence of a strict local decrease from every admissible insertion. We prove residual non-degeneracy is necessary and sufficient: additional depth has first-order value exactly when conditional activation gradients have a nonzero projection onto at least one admissible residual tangent space. This boundary is shared by descent-compatible zero-state updates and invariant under regular local reparameterizations preserving that tangent space. Under residual-signal realizability, raw activation-gradient vanishing exactly certifies saturation. Across ResNets, GPT-2-style models, and continued-pretrained Pythia checkpoints, the maximum activation-gradient norm decreases toward a low-signal regime with depth. Function-preserving growth also achieves converged performance competitive with training from scratch. These results support activation-gradient magnitude as a conservative diagnostic of the remaining empirical first-order value of residual depth.
