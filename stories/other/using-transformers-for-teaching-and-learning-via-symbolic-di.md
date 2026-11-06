---
title: "Using Transformers for Teaching and Learning via Symbolic Distillation of Neural A-life Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07254"
authors: ["Shuwei Wang, Vadim Bulitko, Matthew R. G. Brown, Michael Youngblood, Ramon Lawrence, Roscoe Smith, Shinichi Nakagawa, William Yeoh"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07254v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Neural networks controlling behavior of A-life agents can evolve over multiple generations. While effective in making the agents survive, such networks are generally opaque to a human observer. Furthermore, the neural weights cannot be transferred between agents with different neural architectures. Distilling such neural networks into compact symbolic policies can help humans understand agent behavior in A-life. Additionally, it allows the agents to share their knowledge in a compact fashion, improving population-level learning. Distilling a neural policy into a symbolic policy is typically performed by searching the space of symbolic policies to find one that approximates the neural policy. However, even with a domain-specific language the space of policies can be large, necessitating incomplete stochastic search such as genetic algorithms. Yet the distillation remains computationally expensive. We propose to instead use a transformer pre-trained on readily available random percept-action data. Doing so speeds up distillation substantially. We derive the transformer architecture via a neural architecture search. Empirical results compare different distillation methods and the influence of the symbolic space on A-life population dynamics through self-reflection and teaching and learning.
