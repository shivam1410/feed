---
title: "Probabilistic Forecasting of Business Process Executions with Neural Temporal Point Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21382"
authors: ["Jiaxin Yuan, Daniela Grigori, Han van der Aa"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2609.21382v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21382v1 Announce Type: new Abstract: Operators of service-based systems act on forecasts of how a running execution will continue, and such a forecast is actionable only if its reliability is known. Mainstream deep-learning models for this task are discriminative and deterministic: they emit a single next activity and a single remaining-time estimate, without a distribution to reason over. We instead cast the problem as generative sequence modelling with marked temporal point processes, which define a joint density over the next mark and its inter-event time and therefore deliver predictive distributions by construction. Real event logs violate the simple-point-process assumption these models rest on, since consecutive events frequently carry identical timestamps; we handle such ties explicitly and combine a transformer encoder with a mixture decoder over inter-event times, trained by exact log-likelihood. On ten public logs, the resulting model matches discriminative baselines on point accuracy, dominates them on the calibration and sharpness of remaining-time distributions, and is the cheapest at inference, since a full predictive distribution is obtained in a single forward pass without sampling.
