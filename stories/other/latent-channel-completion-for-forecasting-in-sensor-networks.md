---
title: "Latent Channel Completion for Forecasting in Sensor Networks with Failed Detectors"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31575"
authors: ["Mehran Shabanpour, Sadaf Khademi, Maryam Hosseini, Haiyan Xu, Konstantinos N. Plataniotis, Arash Mohammadi"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31575v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Monitoring networks for traffic and utility infrastructure lose sensors routinely, and forecasting models that couple sensors together to gain accuracy also inherit an exposure to those losses. When a detector stops reporting, the substituted value is embedded as though it were a reading and propagates through the shared representation that couples the network, degrading forecasts for sensors that are still healthy. Because these models are selected on benchmarks where every sensor reports, the exposure is absent from the numbers used to choose them. We introduce Latent Channel Completion, a channel-axis joint embedding predictive objective that reconstructs missing sensors' latent representations rather than their values, since a coupling operator consumes embeddings and never sees raw readings. Channels are masked during training and their representations predicted from surviving channels against stop-gradient targets; at inference the operator fills in whichever sensors the monitoring system reports as dark, using parameters shared with the forecaster. On three highway detector networks, after half of each network goes dark, the accuracy advantage of coupling changes by -1.0, -0.5 and +8.8 percentage points, against losses of 10.2 to 50.3 points for the unmodified forecaster, which on one network falls behind an uncoupled reference entirely. Against cross-channel ridge imputation drawing on the same surviving sensors, completing the latent lowers error by a further 13.9% and 28.6%, and on complete inputs, the method matches its backbone. The benefit tracks how much a network gains from coupling when intact, giving operators a criterion evaluable before any outage occurs.
