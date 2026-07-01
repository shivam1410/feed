---
title: "Calibrating the Evaluator: Does Probability Calibration Mitigate Preference Coupling in LLM Agent Feedback Loops?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31371"
authors: ["Zewen Liu"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.31371v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31371v1 Announce Type: new Abstract: When large language model (LLM) agents adapt their behavior through evaluator feedback, systematic evaluator biases propagate into the agent's learned strategy distribution - a phenomenon termed evaluator preference coupling. Prior work has documented this coupling and established a diagnostic framework (EPC) to measure it, but has not investigated whether calibration techniques can mitigate the effect. We present the first study of evaluator calibration as mitigation: applying probability calibration to the evaluator's pairwise judgments to reduce spurious preference propagation. In a controlled within-subjects experiment (N=5) comparing standard binary TTRL (win/loss) with confidence-calibrated TTRL (probability-weighted updates) using DeepSeek-V4-Pro as executor and GLM5.2 as evaluator, we find that calibration reduces the coupling coefficient gamma by 20-49% and Jensen-Shannon divergence by 45-67%. A symmetric-LR control confirms the effect is not due to reduced update asymmetry. We release the calibrated TTRL protocol and recommend it as a lightweight mitigation for LLM-as-judge deployment pipelines.
