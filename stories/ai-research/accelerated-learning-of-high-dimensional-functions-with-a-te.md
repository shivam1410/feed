---
title: "Accelerated Learning of High Dimensional Functions with a Tensor-Featured Training Network"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10351"
authors: ["Karl Pierce, Yuehaw Khoo, Haizhao Yang"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.10351v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10351v1 Announce Type: new Abstract: In this work we present a method to accelerate the optimization of learning high dimensional functions using deep neural network (DNN). This optimization procedure introduces contextual features into the first layer of a DNN. The parameters of DNN are optimized via standard gradient descent while keeping the input-feature basis fixed. After optimization of the DNN parameters, the feature layer is provided a chance to update and change before DNN optimization resumes. The feature layer has two types of functions: those that can be evaluated quickly in a matrix-free way on the domain (i.e. rank-1 features) and more complex features that must first be decomposed using tensor network (TN) decomposition strategies (tensor features). In particular, we study the effect of adding features which distill pretrained DNN into TNs using a discretize and decompose strategy. To efficiently decompose high-dimensional functions constructed from discretized DNN, we leverage a randomized tensor decomposition strategy. Using randomization, we are able to reduce the storage cost of decomposing high dimensional functions by at least 8 orders of magnitude. Using this approach, we are able to efficiently train models between 5 and 40 dimensions.
