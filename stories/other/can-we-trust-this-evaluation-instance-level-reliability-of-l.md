---
title: "Can We Trust This Evaluation? Instance-Level Reliability of LLM-as-a-Judge"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14029"
authors: ["Yang Ba, Michelle V. Mancenido, Rong Pan"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14029v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

LLM-as-a-judge evaluation commonly aggregates multiple judges' decisions into a majority vote, yet this panel decision process does not guarantee that the evaluation of an individual item is reliable. We propose Structured Cross-fitted Uncertainty Risk (SCUR), a label-free approach for estimating instance-level evaluation reliability based on the judge panel's behavior. A latent measurement model serves as the backbone for measurement system analysis, from which SCUR derives three complementary signals capturing panel uncertainty, measurement cross-entropy, and perturbation sensitivity. These three sources of evidence are combined into a risk score. We evaluate the SCUR approach on five real-world benchmarks using majority-vote error ranking, selective trust, and risk stratification. Furthermore, we show our approach to be more effective at detecting high-consensus risk items, which are the blind spots for many other LLM-as-a-judge evaluation methods.
