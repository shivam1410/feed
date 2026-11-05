---
title: "Language Models Can Benefit from Domain-Specific Inductive Biases"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03756"
authors: ["Damien Teney, Liangze Jiang, Zachary Shinnick, Hemanth Saratchandran, Simon Lucey"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03756v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Language models are typically trained with a single choice of architecture on diverse domains and data sources. Modern transformers have been extensively refined for such general-purpose learning, but are they equally effective across different subsets of the pretraining data? We investigate this question by training small language models from scratch on representative subsets of pretraining data such as web text, code, and mathematics. We introduce variants of transformers in which standard activation functions are replaced with learned splines tuned on specific datasets, providing a simple way to modify their inductive biases. Using a mix-and-match of architectures and datasets, we evaluate cross-domain transfer, i.e. how well does an architecture tuned for one domain perform on data from another? We find that the tuned transformer variants improve training efficiency or generalization on all seven of our tested datasets, but the gains are often domain-specific. For example, architectures tuned on a natural language dataset such as FineWeb perform well on TinyStories, whereas those tuned on mathematics perform poorly on natural language. We identify several mechanisms underlying these improvements, including wider loss basins and more abundant "lottery tickets". Our results show that different subsets of pretraining data can benefit from different learning mechanisms, highlighting a limitation of the prevailing trend towards a small set of general-purpose architectures and optimizers. This points to an opportunity to improve data efficiency by developing domain-specific learning strategies that retain the ability to train general-purpose models.
