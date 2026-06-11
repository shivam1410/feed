---
title: "ProHiFlo: Hierarchical Flow Matching with Functional Guidance for De Novo Protein Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11243"
authors: ["Chuanzhen Wang, Meade Cleti, Pete Jano"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2606.11243v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11243v1 Announce Type: new Abstract: De novo protein generation has transformative potential in therapeutic design, enzyme engineering, and synthetic biology. While diffusion-based and flow matching approaches have achieved progress, they typically operate at single resolution and lack mechanisms for incorporating functional constraints. We introduce ProHiFlo, a hierarchical flow matching framework with three innovations: (1) coarse-to-fine generation that models backbone geometry before refining to all-atom coordinates, reducing computational cost while maintaining accuracy; (2) functional guidance leveraging pretrained predictors to steer generation toward desired properties without retraining; (3) adaptive SE(3)-equivariant architecture for efficient multi-scale processing. Experiments on unconditional generation, motif scaffolding, and functional design demonstrate state-ofthe-art performance while requiring 4 fewer sampling steps. On enzyme active site scaffolding, ProHiFlo achieves 58.9% success rate compared to 41.2% for RFDiffusion.
