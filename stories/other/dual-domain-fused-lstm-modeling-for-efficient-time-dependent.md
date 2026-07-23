---
title: "Dual-domain fused LSTM modeling for efficient time-dependent reliability analysis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18291"
authors: ["Yixin Zhang, Mingyang Li, Zichao Jiang"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18291v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18291v1 Announce Type: new Abstract: Time-dependent reliability analysis is crucial for ensuring the long-term safety and performance of engineering systems under uncertainties. However, traditional surrogate model methods often struggle to incorporate time-independent random variables and capture their complex interactions with time-dependent stochastic processes. To overcome this limitation, this paper proposes a dual-domain fused long short-term memory (DDF-LSTM) model for efficient and accurate time-dependent reliability analysis. A novel network architecture is developed to jointly process information from both time-dependent and time-independent domains. Specifically, the time-independent variables are embedded into the initial hidden states, and a fully connected layer is introduced to map both LSTM outputs and time-independent variables into the final output space. Furthermore, an improved loss function is designed to emphasize the model's sensitivity to minimum responses, thereby improving the precision of failure probability estimation. The proposed method effectively captures the dependencies among random variables, stochastic processes, and the temporal behavior of limit state functions. Once trained, the DDF-LSTM model enables efficient Monte Carlo simulation to estimate time-dependent failure probabilities with minimal computational cost. Four case studies validate the proposed method's enhanced computational efficiency and predictive accuracy.
