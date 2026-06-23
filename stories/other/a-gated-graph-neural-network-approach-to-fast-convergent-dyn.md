---
title: "A Gated Graph Neural Network Approach to Fast-Convergent Dynamic Average Estimation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20955"
authors: ["Antonio Marino, Claudio Pacchierotti, Paolo Robuffo Giordano"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20955v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20955v1 Announce Type: new Abstract: Dynamic average estimation is a critical problem in multi-agent systems, enabling agents to collaboratively estimate time-varying signals using only local information exchange. Traditional model-based approaches often face challenges related to convergence speed and sensitivity to network topology changes. This paper introduces a novel learning-based solution leveraging Gated Graph Neural Networks (GGNNs) for fast-convergent dynamic average estimation in a fully distributed manner. Taking advantage of the inherent structure of GGNNs, the proposed method models the estimation process as a distributed autoregressor, ensuring rapid convergence while maintaining stability. We incorporate a regularization term during training to enforce convergence guarantees and introduce an encoding-decoding mechanism to reduce communication overhead without sacrificing accuracy compared to standard GGNNs. Extensive numerical experiments demonstrate that our approach significantly outperforms conventional model-based estimators in terms of both convergence speed and precision, making it a promising alternative for multi-agent applications that require dynamic average estimation.
