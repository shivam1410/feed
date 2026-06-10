---
title: "Calibrating Overconfidence Without Sacrificing Confidence: Probe-Conditioned Head Intervention for LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09876"
authors: ["Ke Li, Chongzhe Zhang, Zifan Zeng, Feng Liu, Qunli Zhang, Zheng Hu"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09876v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09876v1 Announce Type: new Abstract: Large language models often express high confidence in answers that are wrong. Standard calibration remedies typically act globally or at the score level, reducing unwarranted confidence but also risking erosion of warranted confidence on correct answers. We introduce Probe-Conditioned Head Intervention (PCHI), an inference-time method that uses a frozen probe to detect likely wrong-but-confident responses and conditionally rescales downstream attention-head outputs during confidence generation. On Qwen3-4B-Instruct solving OpenMathInstruct problems with a structured binary confidence field, readout-token PCHI converts 82.2% of originally wrong-yes confidence readouts to $\texttt{no}$, while a joint intervention across upstream confidence-template tokens reduces ECE from 21.9% to 9.2% and damages only 5.1% of originally correct-yes readouts. The readout-token effect also appears on Gemma3-4B, though upstream interventions are weaker and more mask-dependent. These results show that verbalized overconfidence can be selectively reduced through conditionally applied internal intervention, partially decoupling the suppression of unwarranted confidence from the loss of warranted confidence.
