---
title: "Control-Diverse Reinforcement Fine-Tuning: Decoupling the Shared Control Bottleneck of RL Post-Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08224"
authors: ["Binwen Tan, Jingchao Wang, Dengzhe Hou, Lingyu Jiang, Zeyuan Wu, Yunhan Shen, Fangzhou Lin, Kazunori Yamada, Atsushi Koike"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.08224v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08224v1 Announce Type: new Abstract: Reinforcement learning post-training unlocks complex reasoning in LLMs. Yet benchmark scores reveal only whether a model improved, not what changed inside it, nor how it splits finite capability across tasks. A representative interpretability line attributes the success of RL fine-tuning to stronger and more diverse circuit activation. We challenge this activation-centered account by separating activation from control: an activated circuit need not control the post-training reward gain. Adapting Metabolic Control Analysis, we define the Post-training Control Coefficient to measure component control over reward gain and arrange these coefficients by task family into a control matrix, paired with an activation-magnitude matrix. We call cross-task control concentration the Shared Control Bottleneck and the difference between activation and control concentration the Activation-Control Gap. This reveals that highly shared activations can coexist with task-specific control, while a small gap indicates that control has collapsed onto a shared direction and lost task specificity. To reduce this collapse, we regularize the post-training loss with the Shared Control Bottleneck and propose Control-Diverse Reinforcement Fine-Tuning (CD-RFT). The exact regularizer gradient requires second-order automatic differentiation incompatible with flash attention, so we derive a first-order proxy with worst-case overhead below eight percent. On Qwen2.5-7B, CD-RFT achieves the largest control decoupling and improves multi-task capability over matched GRPO across mathematics, code, and logic. The no-KL variant leads on pass@1, and the KL-penalized variant leads on large-k pass@k coverage that KL otherwise degrades. Together, these results show that the Shared Control Bottleneck is both a mechanistic diagnostic and a training regularizer, and that control decoupling and capability gains transfer to Llama-3.2-3B.
