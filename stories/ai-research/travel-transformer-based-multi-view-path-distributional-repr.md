---
title: "TraveL: Transformer-based Multi-view Path Distributional Representation Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03427"
authors: ["Fang He, Tao-yang Fu, Wang-chien Lee"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.03427v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03427v1 Announce Type: new Abstract: Path representation learning (PRL) for road networks has received increasing research attention, due to various path-related applications. Existing works on PRL typically exploit the co-occurrence relationship among road segments and paths to learn a vector as the path representation, without exploring the varied traveler behaviors and the regional correlation on the path. In this work, we propose to learn distributional representations, which provide valuable information for use in path-related applications, by capturing the varied traveler behaviors as well as the various dependencies within regions of road segments. We propose a novel Transformer-based Multi-view Distributional Representation Learning (TraveL) framework to encode a path along with a travel starting time to a distributional representation, which can be used to decode possible samples of on-path traveler behavior. Moreover, by analyzing the regional correlation which reveals various road segment relationships, we propose a regional attention to encode these correlations in a path. Also, we explore the idea of Kolmogorov-Smirnov (K-S) test to compare the sampled traveler behavior against the collected ground truth to facilitate training. Experimental results show that the proposed TraveL model outperforms the state-of-the-art methods on both synthetic and real-world datasets, by 14.7% in Mean K-S distance for travel time distribution estimation, 16.7% in Mean Absolute Error (MAE) for path similarity prediction, and 3.97% in MAE for destination prediction.
