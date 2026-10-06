---
title: "Consideration Circuits: Depth Separation and Universality Beyond a Single Softmax"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04143"
authors: ["Junjie Xiao, Huiwen Jia"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04143v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Most feature-based choice models, classical and deep, score items and apply a single softmax. We introduce consideration circuits (CC), feature-based models of multi-stage choice defined by directed acyclic graphs of multinomial logit (MNL) units. Source units assign probabilities to menu items, and internal units combine predecessor distributions using MNL weights computed from their probability-weighted feature summaries. On a three-item compromise task with fixed non-collinear features, menu-independent random-utility models (RUM), including a single MNL unit, suffer an error bounded away from zero. For CC, in contrast, we establish a sharp depth--norm separation: increasing depth from $2$ to $3$ reduces the optimal maximum taste-vector norm for error $\epsilon$ from $\Theta(\log(1/\epsilon)/\epsilon)$ to $\Theta(\log(1/\epsilon))$. The depth-$2$ lower bound holds for arbitrary width and menu-independent routing biases, while a five-node depth-$3$ circuit with zero routing biases attains the logarithmic rate. More generally, we characterize two geometric conditions that are necessary and sufficient for approximating arbitrary deterministic choice tables on finite menu families. Under these conditions, depth $3$ suffices, while depth $4$ achieves optimal logarithmic norm scaling whenever the family contains a non-singleton menu. In experiments, standalone tree circuits with fewer than $600$ parameters attain the lowest mean test negative log-likelihood (NLL) among the evaluated models on four fixed-pool benchmarks and the Expedia temporal split. As output heads, CC generalize the linear MNL readout and lower mean test NLL for every tested encoder on Expedia and Trivago.
