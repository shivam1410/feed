---
title: "TENP: Trapezoidal Expert Neuron Pruning For Mixture-of-Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09885"
authors: ["Jiangyang He, Shaolin Zhu, Deyi Xiong"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09885v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09885v1 Announce Type: new Abstract: Mixture-of-Experts large language models (LLMs) scale efficiently through sparse activation, yet their deployment is fundamentally constrained by the large static parameter footprint of experts. Existing compression approaches either remove entire experts, disrupting routing topology and harming performance, or rely on unstructured weight pruning with limited practical efficiency. To address the limitations, we propose TENP, a structured Trapezoidal ExpertNeuron Pruning framework. Using a few samples, we identify and retain important experts, while applying expert neuron pruning (ENP) to less important experts, reserving model parameters in a trapezoidal pattern from shallow to deep layers. When evaluating expert importance, we jointly consider both the magnitude of the expert output and its ability to change the direction of the input vector. For ENP, we measure each neuron's projected contribution to the expert output to identify and retain important neurons. We conduct extensive experiments on the Qwen and DeepSeek models. Under a routing expert sparsity of 40% and an average of 63.76% activated expert parameters, the DeepSeek model suffers only a 1-point drop in accuracy compared to the full-parameter model. Moreover, it outperforms the full-parameter model by 10% on code generation tasks.
