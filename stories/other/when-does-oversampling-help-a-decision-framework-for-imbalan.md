---
title: "When Does Oversampling Help? A Decision Framework for Imbalanced Data Streams Under Label Delay and Concept Drift"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17981"
authors: ["Ahmed Awad, Anirudh Sengar"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17981v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

For imbalanced data streams with delayed labels, is it worth adding a streaming oversampler, or does continuous re-evaluation of earlier predictions already recover the cost of the delay? We address this through an extensive experimental comparison of streaming oversampling and continuous re-evaluation under joint class imbalance, concept drift, and label delay. Streaming oversamplers are typically evaluated under the test-then-train assumption of immediate labels; their behaviour under these conditions, assessed through re-evaluation, has not been systematically studied. We close this gap with a decision framework that predicts when oversampling adds value over re-evaluation, organised around three axes: drift density, minority-class learnability, and delay relative to the refinement window, and operationalised as a competition between a recovery channel (re-evaluation) and a minority-coverage channel (oversampling). Evaluating $15$ classifiers on $6$ synthetic and $6$ real streams, we find: re-evaluation recovers delay-induced loss on drift-active streams but is silent on stationary ones; oversampling's marginal contribution over re-evaluation is statistically detectable in only one real-data configuration; and cost--performance Pareto recommendations from synthetic streams do not transfer to real data, where fronts partition by drift regime. Method selection should therefore be conditioned on the stream's profile and re-estimated as it evolves, not inherited from synthetic benchmarks.
