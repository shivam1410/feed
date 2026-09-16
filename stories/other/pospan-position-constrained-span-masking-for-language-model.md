---
title: "POSPAN: Position-Constrained Span Masking for Language Model Pre-training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16061"
authors: ["Zhenyu Zhang, Lei Shen, Yuming Zhao, Meng Chen, Xiaodong He"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16061v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16061v1 Announce Type: new Abstract: Span-level masked language modeling (MLM) has shown to be advantageous to pre-trained language models over the original single-token MLM, as entities/phrases and their dependencies are critical to language understanding. Previous works only consider span length with some discrete distributions, while the dependencies among spans are ignored, i.e., assuming that the positions of masked spans are uniformly distributed. In this paper, we present POSPAN, a general framework to allow diverse position-constrained span masking strategies via the combination of span length distribution and position constraint distribution, which unifies all existing span-level masking methods. To verify the effectiveness of POSPAN in pre-training, we evaluate it on the datasets from several NLU benchmarks. Experimental results indicate that the position constraint is capable of enhancing span-level masking broadly, and our best POSPAN setting consistently outperforms its span-length-only counterparts and vanilla MLM. We also conduct theoretical analysis for the position constraint in masked language models to shed light on the reason why POSPAN works well, demonstrating the rationality and necessity of POSPAN.
