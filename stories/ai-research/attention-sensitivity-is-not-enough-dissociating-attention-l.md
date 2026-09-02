---
title: "Attention Sensitivity Is Not Enough: Dissociating Attention-Level and Behavioural In-Context Learning under Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00064"
authors: ["Jinyuan Zhang, Peng He, He Hu, Yin Yuan, ShengShuo Jiao"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.00064v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00064v1 Announce Type: new Abstract: In-context learning (ICL) lets large language models adapt to new tasks from demonstrations, and fine-tuning can erode this behaviour. Many preservation diagnostics inspect attention: if attention changes when demonstrations change, the model is treated as context-sensitive. This paper asks how far that proxy can be trusted once it is optimised. We formalise \emph{In-Context Sensitivity} (ICS), the average row distance between last-token attention on matched and mismatched demonstration prefixes, and pair it with \emph{ICL-GAP}, the behavioural accuracy gap between the same prefixes. In a controlled four-arm ablation on Llama-2-7B, an ICS-maximising regulariser ($\armKL$) drives ICS to $1.413$, within $0.5\%$ of its geometric ceiling. The behavioural readout tells a different story: ICL-GAP stays near zero and MMLU accuracy moves from $0.371$ to $0.279$, a Goodhart dissociation of the bounded attention proxy. Endpoint statistics locate the mechanism: attention grows sharp and near-disjoint across prefixes yet routes to formatting and demonstration-body tokens rather than labels. A random-label protocol confirms that the behavioural probe family retains dynamic range at the same checkpoints. In a constructive sweep, behaviour gating partially mitigates the effect, while objectives anchored to pretrained computation hold the high-MMLU, moderate-ICS region that divergence maximisers leave. The main lesson is diagnostic: attention-level ICL proxies earn their place as training targets only after validation against behavioural gaps.
