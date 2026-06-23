---
title: "Is Our Benchmark Enough? An Analysis of Continual Learning for MLLMs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20961"
authors: ["Van-Tuan Tran, Shruthi Gowda, Merim Dzaferagic, Marco Ruffini"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20961v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20961v1 Announce Type: new Abstract: Continual adaptation is essential for multimodal large language models (MLLMs) deployed across evolving domains, but the state-of-the-art MR-LoRA method highly relies on the assumption that a MLLM-based router is necessary to process complex multimodal inputs. This paper revisits this claim on the MLLM-CL benchmark and argues for two claims. \textbf{First}, routing does not require an MLLM: a simple training-free, replay-free ptotypical routing method (\textsc{RePRo}), uses frozen pretrained features and task prototypes to match the MLLM-based router of MR-LoRA at far lower computational cost. \textbf{Second}, shared experts do not improve continual learning for MLLMs, despite their theoretical appeal. We show that these findings arise from two structural limitations of MLLM-CL: (1) its tasks are \textbf{highly separable} in representation space, and (2) its fixed task order makes conclusions \textbf{sensitive to a single curriculum} rather than robust across diverse continual-learning trajectories. As a result, the benchmark primarily rewards learning in isolation rather than genuine continual transfer. This motivates a new design for future benchmarks of continual MLLM learning, with overlapping task manifolds, multiple task orders, fine-grained domain shifts, and evaluation protocols that reward forward transfer as well as retention.
