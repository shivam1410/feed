---
title: "INTENT: Out-of-Sample, Out-of-Time, and Cold-Start Evaluation on User Event Sequences"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13069"
authors: ["Mattias Kvist, Erik Lidman Hillbom, Edoardo de Cal, Davis Siemens, Adam Fredriksson, Rickard Br\\\"uel-Gabrielsson"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13069v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Banks now train foundation models on ordered sequences of customer events such as transactions, app sessions, and authorizations. Deployed, such a model predicts forward in time, often for customers and merchants absent from training, yet each is evaluated on private data, so no two can be compared. Public benchmarks for such sequences rarely test a period the model has not seen; recommendation studies usually hold out each user's last events instead. We present INTENT (INTEraction, Novelty, and Transfer evaluation for next-action prediction), a public benchmark that scores a model in seven cells defined by whether the user, the period, and the target item appeared in training. An audit of 59 public dataset families retains five datasets; the most common defect is the lack of a calendar timestamp that orders events. No date lies within the time span of all five datasets, so each is split at its own cutoff, chosen by one rule fixed before any model is evaluated. Summed over the datasets, every cell holds at least 111,769 users. In reference results the cell determines the best model: a transformer leads on seen items after the cutoff but scores zero on new items, a variant that embeds item metadata helps mainly on MicroLens, and repeating the user's last item leads on new items in four of five datasets. This parameter-free control also shows that on three datasets most of the score lost after the cutoff reflects changed behavior rather than the model. The pipeline, the cutoff rule, and the per-cell user counts are publicly available.
