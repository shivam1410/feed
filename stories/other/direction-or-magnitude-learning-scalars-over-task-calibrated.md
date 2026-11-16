---
title: "Direction or Magnitude? Learning Scalars over Task-Calibrated Directions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17784"
authors: ["Ziqing Wen, Xiaohui Song, Jiahuan Wang, Ping Luo, Junlin Zeng, Dongsheng Li, Kele Xu, Tao Sun"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17784v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Parameter-efficient fine-tuning (PEFT) aims to preserve adaptation quality while reducing training costs. We propose SCALAR, which achieves performance comparable to LoRA with substantially fewer trainable parameters, lower peak training memory, and higher throughput. SCALAR constructs a fixed input basis from task activations and assigns a random output dictionary to each input direction. Fine-tuning learns only layer-specific scalar coefficients, reducing gradient and optimizer-state storage. Grouped computation aggregates output atoms before applying the adapter to token activations, while dictionary sharing across compatible layers reduces fixed-basis storage. Experiments on commonsense reasoning, mathematical reasoning, code generation, and knowledge evaluation after instruction tuning demonstrate effective adaptation at small trainable budgets. On commonsense reasoning, SCALAR achieves accuracy comparable to LoRA with about 4% of its trainable parameters. System measurements on Qwen2.5-7B show 20% lower peak training memory and 6% higher throughput than LoRA. The combination of adaptation quality, a compact trainable state, and training efficiency makes SCALAR a promising approach to resource-constrained fine-tuning.
