---
title: "ChemHyperMag: Physics-informed magnetic hypergraph learning improves molecular ADMET prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18332"
authors: ["Hexiao Ding, Hongzhao Chen, Jing Lan, Yufeng Jiang, Zihong Luo, Zehua Xiong, Tianlong Ruan, Yunlin Mao, Nga Chun Ng, Gwing Kei Yip, Gerald W. Y. Cheng, Kate Inyoung Oh, Jing Cai, Liang-Ting Lin, Jung Sun Yoo"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18332v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18332v1 Announce Type: new Abstract: Accurate prediction of ADMET (Absorption, Distribution, Metabolism, Excretion, and Toxicity) is important for drug discovery. Most predictors use undirected molecular graphs and pairwise edges. This choice misses asymmetric interactions, nonreversible dynamics, and motif level effects from functional groups and ring systems. We propose ChemHyperMag for multitask ADMET prediction under missing labels. ChemHyperMag builds a functional group hypergraph from rings, BRICS fragments, Bemis-Murcko scaffolds, and bonds. It also defines a potential driven nonreversible flow guided by electronegativity and Gasteiger partial charges. The resulting circulation is encoded by a Hermitian magnetic Laplacian and processed with a magnetic Chebyshev encoder. We perturb magnetic phases to form stochastic views and train with an InfoNCE objective. Experiments on multiple ADMET benchmarks show improvements over recent methods with fewer labeled samples and no conformers. ChemHyperMag is scalable and provides interpretable directional signals through its magnetic phases.
