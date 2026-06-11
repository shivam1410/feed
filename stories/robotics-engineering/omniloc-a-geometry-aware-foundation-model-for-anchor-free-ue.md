---
title: "OmniLoc: A Geometry-Aware Foundation Model for Anchor-Free UE Localization Across Diverse Indoor Environments"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11490"
authors: ["Lei Chu, Yuning Zhang, Omer Gokalp Serbetci, Anushka Katiyar, Bassel Abou Ali Modad, Andreas F. Molisch"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.11490v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11490v1 Announce Type: new Abstract: Indoor localization from wireless measurements remains challenging in large-scale deployments due to substantial variation in building geometry, the set of detectable access points (APs), and the heterogeneity of received signals. Existing learning-based methods often perform well only in limited settings and degrade under environmental shifts, making robust anchor-free localization across diverse indoor environments notoriously difficult. In this paper, we present OmniLoc, an environment-interactive foundation model for anchor-free user equipment localization across diverse indoor environments. To the best of our knowledge, OmniLoc is the first foundation-model-based approach built directly on wireless measurements for this task. OmniLoc is built on three key designs. First, a unified input tokenization module converts heterogeneous wireless measurements into a common representation that is more amenable to learning. Second, a geometry-aware Transformer performs AP-aware feature extraction by emphasizing dominant APs while aggregating complementary evidence from supporting APs. Third, a geometry-aware location estimation module conditions regression on geometric embeddings to produce geometrically consistent location predictions. We evaluate OmniLoc on both a large-scale in-house dataset and a public benchmark dataset. Results show that OmniLoc significantly outperforms existing methods, consistently improves existing backbones when its design components are integrated, and demonstrates strong generalization in cross-environment evaluations.
