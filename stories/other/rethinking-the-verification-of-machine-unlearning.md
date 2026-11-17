---
title: "Rethinking the Verification of Machine Unlearning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18658"
authors: ["Lei Zhou, Youwen zhu, Rongke Liu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18658v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Machine unlearning claims require evidence that a model has removed the influence of specified training data. Yet widely deployable post hoc verifiers. infer unlearning largely from predictive behavior, the final model response that remains under the provider's control. We make this limitation concrete through Output-Level Deceptive Response (ODR), an attack that produces responses accepted by output based verifiers while preserving the original representation state. By separating output conformity from internal unlearning, ODR motivates a rethinking of machine unlearning verification, shifting the audit target from what the model returns to what changes inside it. We operationalize this shift through Representation Unlearning Verification (RUV), a gray box verifier that compares intermediate forward representations in the original and unlearned models. RUV traces a four-stage response through activation reorganization, representation displacement, neighborhood disruption, and loss of manifold support. Matched retained controls distinguish target specific responses from global model drift, while joint permutation calibration combines the four evidence views into an adaptive decision. Experiments spanning exact and approximate unlearning, class and sample level requests, multiple datasets, and diverse architectures show mean ODR deception success rates of $97.0\%$ and $97.7\%$, respectively. RUV achieves mean verification accuracies of $98.9\%$ and $94.9\%$, while rejecting $99.5\%$ and $99.8\%$ of the corresponding ODR submissions.
