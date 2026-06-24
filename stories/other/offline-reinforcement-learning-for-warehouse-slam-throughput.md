---
title: "Offline Reinforcement Learning for Warehouse SLAM Throughput Control"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23978"
authors: ["Tina Dongxu Li, Mouhacine Benosman, Rajat Kumar, Kevin Tan, Ken Meszaros, Trevor Dardik"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23978v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23978v1 Announce Type: new Abstract: We present an offline reinforcement learning (RL) framework for optimizing SLAM throughput control in a warehouse fulfillment environment. SLAM (Scan/Label/Apply/Manifest) throughput directly influences system congestion and operational efficiency. Our RL-based control approach dynamically recommends SLAM throughput settings that adaptively balance throughput maximization with downstream stability through intelligent adjustment of throttling behavior. We include a history-informed state representation, action space abstraction for delayed-impact control, and a reward function that captures both upstream and downstream operational metrics. Our approach is algorithm-agnostic, enabling integration of multiple offline RL methods under a unified architecture. We instantiate our framework with three state-of-the-art offline RL algorithms, and trained the models offline using de-identified historical operational logs from a large-scale warehouse. Policy performance is evaluated using a comprehensive multi-method strategy. These include model-free approaches including immediate reward estimation via regression models and long-horizon Fitted Q Evaluation (FQE), as well as model-based Deep Koopman dynamics evaluation. Empirical results reveal that the CQL policy consistently outperforms alternatives, improving system health by 22.97% and reducing average throttling duration by 3.18%. These findings demonstrate the potential of offline RL for safe and scalable warehouse throughput control optimization.
