---
title: "TARGet: Topology-Aware Fusion-based Radio Frequency Circuit Functional Modeling using Graph Neural Networks"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22165"
authors: ["Soroosh Noorzad, Sebastian Bodero, Morteza Fayazi"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.22165v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22165v1 Announce Type: new Abstract: Automatic synthesis of analog and Radio Frequency (RF) circuits is an emerging area that requires an efficient circuit modeling method. In recent years, Machine Learning (ML) solutions have played a promising role in this regard. However, many existing ML approaches require separate training data for each circuit topology, even when a single circuit component is added or removed. In addition, they overlook circuit topology information, which limits their ability to capture complex component interactions. Furthermore, they rely on fully connected neural networks with flat feature representations, which require substantial amounts of training data. In this work, we propose an open-source topology-aware RF circuit modeling method, TARGet. Our model considers the circuit at two levels: sub-circuits and the overall circuit topology. At the sub-circuit level, TARGet leverages S-parameter representations to capture sub-circuit behavior rather than relying on individual circuit components, providing a reusable behavioral abstraction for RF building blocks. Moreover, TARGet explicitly incorporates circuit topology information into the model, enabling it to learn across multiple topologies. TARGet introduces a novel fusion-based architecture that integrates Graph Neural Networks (GNNs) and sub-circuit connectivity-aware neural networks to improve data efficiency. Experimental evaluation across multiple RF circuit topologies demonstrates that TARGet achieves sub-1% prediction error while reducing the required training data by up to 35.5x compared to state-of-the-art (SOTA) approaches. Furthermore, TARGet achieves 9.7x higher prediction accuracy under a strict 1% error threshold relative to SOTA models. A held-out matching-network evaluation further demonstrates zero-shot transfer to an unseen sub-circuit topology, where TARGet reduces NMAE by up to 45%.
