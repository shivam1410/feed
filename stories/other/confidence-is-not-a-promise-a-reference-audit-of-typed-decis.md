---
title: "Confidence Is Not a Promise: A Reference Audit of Typed Decision Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36311"
authors: ["Pedro Carvalho Brom"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36311v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Typed decision models return a probability distribution over options supplied by the caller, and software tends to act on that number as if it were a guarantee. We measure what it licenses, comparing the open-weight Laya, in five checkpoints, with Jev 1.13, available only through an API. A probability licenses a statement about groups of decisions, not about one decision, and a gate that promises an accuracy among the cases it decides alone keeps that promise only with a lower bound checked on data like its traffic. Across 190 exchangeable evaluations, a threshold chosen by point estimate breaks the promise in 147, Learn then Test keeps it in all of them, and a Beta lower-bound rule decides more items on average than Learn then Test in 128 and fewer in none, without its guarantee. Calibrated in English, Jev keeps a promise of 95% in 8 of 51 locales. Ordinary typing noise breaks a promise calibrated on clean text, and, in exploratory runs, training with noise raises the noisy accuracy with no loss on clean text. In four further domains, a fine-tuned Laya needs from 250 to 8,000 labels to be non-inferior to Jev, and does not get there on LIAR2. Under drift, the preregistered claim for a Bayesian retraining loop is not supported: the loop avoids needless retraining where the change does not degrade the model, at a cost equivalent to recalibration alone, and re-qualifying the threshold in every window keeps the promise more often where it does. On the monthly series of M3, neither decider predicts the direction of the next value better than a constant answer. Confidence separates right from wrong answers with an AUROC from 0.80 to 0.96, but it does not select faithful explanations, and exact coalition games of single decisions show what an explanation can still say through an API that rounds to two decimals. We release the frozen answers with a datasheet, a promise check and the code.
