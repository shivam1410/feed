---
title: "Abstention as an Action Can Kill Both the Reward Gradient and the KL Anchor: Collapse Law and Repair for Error-Penalized Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00301"
authors: ["Xujun Che, Yuchen Yuan, Weida Zhao, Chenyang Yu"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.00301v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00301v1 Announce Type: new Abstract: Error-penalized scoring rules ($+1$ for a correct answer, $-\lambda$ for a wrong one, $0$ for abstaining) are increasingly prescribed against hallucination: a rational agent facing such a rule answers exactly when its correctness probability exceeds Chow's threshold $t^\ast=\lambda/(1+\lambda)$. We prove that a KL-anchored gradient learner can do the opposite. When abstention is a discrete action, the reward gradient and the anchor's restoring force are throttled by the same gate-saturation factor and die together: under explicit conditions (among them, blanket answering loses score in expectation and prompts share a bounded readout) the model drifts toward refusing everything, its mean training reward rising to zero like $1/t$ in training time $t$, so the curve reads as improvement while coverage collapses. The advantage estimator compounds the failure: in its sparse-answer regime, group normalization silently replaces every designed penalty with an effective penalty of one, moving the learned threshold from $t^\ast$ to $1/2$. The repair is structural: train a mandatory confidence report with a strictly proper score plus a correctness reward, and abstain only at deployment by thresholding the report. The always-emitted report has no gate to saturate, so no shared factor can kill its reward gradient and its anchor together, and its calibrated optimum is attracting. Simulations confirm every prediction, and experiments on language models at two scales confirm the mechanism live: the rule silences questions the models demonstrably still solve within ten optimizer steps, an ablation isolates the cause, and report-level training raises coverage, accuracy, and calibration together.
