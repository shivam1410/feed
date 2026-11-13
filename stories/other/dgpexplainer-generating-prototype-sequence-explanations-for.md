---
title: "DGPExplainer: Generating Prototype Sequence Explanations for Dynamic Graph Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15224"
authors: ["Jinlong Hu, Shixu Fan, Chongzhang Li"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15224v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Graph Neural Networks (GNNs) have been successfully applied to learning from graph-structured data. However, applying them to dynamic graphs-where nodes and edges evolve over time-presents significant challenges, particularly regarding explainability. While explanation techniques for static GNNs are well established, they do not readily extend to dynamic GNNs (DGNNs) due to the added complexity introduced by temporal dynamics and spatiotemporal dependencies, especially when generating model-level explanations. To address this gap, we introduce DGPExplainer, a post-hoc, prototype-based explainer specifically designed for DGNN models that transforms their complex decision-making processes into human-understandable, analogical, case-based explanations. DGPExplainer first employs local explanation methods to identify important elements within temporal snapshots of dynamic graph sequences. It then decomposes the graph at each time step into distinct prototypes, thereby symbolizing the dynamic graph sequence. Finally, we design a sequence generation method that uses these symbolized sequences to learn and generate class-specific dynamic graph pattern sequences that serve as prototype explanations. Experiments on both synthetic and real-world datasets demonstrate that our method effectively produces prototype-based explanations for DGNN models across multiple classes.
