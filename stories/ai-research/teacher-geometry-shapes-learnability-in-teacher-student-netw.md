---
title: "Teacher Geometry Shapes Learnability in Teacher-Student Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09595"
authors: ["Kai J. Sandbrink, Flavio Martinelli, Alexander van Meegen, Wulfram Gerstner, Johanni Brea"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09595v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09595v1 Announce Type: new Abstract: Teacher-student systems, in which a teacher neural network generates training labels so that a student neural network can learn to implement the same function, are widely used as an abstract setting to study learning. However, the structure of the teachers is often overlooked by assuming randomly-generated, normally-distributed parameters. This hides substantial variation in how learnable different teachers are. We formalize learnability as the success rate of converging to the global minimum, as a function of overparameterization, learning algorithm, student initialization distribution, and teacher geometry. We both identify an easy distribution that maximizes node dissimilarity and a hard distribution that minimizes it, and show that these two distributions induce markedly different success rates across a large range of settings and for different activation functions. To explain the gap, we study the loss landscape of small neural networks that contain two distinct kinds of suboptimal local minima, out-of-bounds (OOB) minima at the edge of the data distribution and interior minima within. Assuming infinite data and a fast readout layer, we analytically reduce the loss landscape of small networks to two dimensions, showing that the region of attraction of interior minima changes as a function of teacher structure. In larger networks, maximally dissimilar teachers induce more interior minima, while minimally dissimilar teachers induce more OOB minima. Motivated by these analyses, we show that differentially increasing the learning rate of the readout layer and decreasing the learning rate of the inner biases increases success rates. These findings provide an important step in narrowing the gap between the study of teacher-student networks and more structured functions that arise in practice.
