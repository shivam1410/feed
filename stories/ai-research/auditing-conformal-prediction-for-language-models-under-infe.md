---
title: "Auditing Conformal Prediction for Language Models Under Inference-Time Model Shift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28937"
authors: ["Achref Doula, Max M\\\"uhlh\\\"auser"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.28937v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Conformal prediction (CP) for language models is typically evaluated under a matched protocol, in which calibration and deployment use the same post-training inference configuration, such as quantization mode and inference temperature. In deployment, these choices often differ from those used at calibration to meet memory or throughput constraints or serving policies. We argue that this exposes a limitation in current CP evaluation protocols for language models. We formalize the underlying phenomenon as inference-time model shift: a change in the conformal score distribution induced by inference configuration rather than by the input--label distribution, and theoretically characterize how it breaks split-conformal exchangeability even when the task distribution and trained model are unchanged. We then evaluate its consequences across 8 language models, 4 finite-label benchmarks, and 12 inference configurations. We find that matched evaluation can substantially overstate deployment-time coverage, and that the effect is heterogeneous across models and datasets. We argue that inference configuration should be reported as a first-class experimental axis in CP evaluations for language-model systems.
