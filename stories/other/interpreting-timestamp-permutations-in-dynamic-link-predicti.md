---
title: "Interpreting Timestamp Permutations in Dynamic Link Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23753"
authors: ["Ilia Karpov, Kirill Koloskov, Valeriy Kuleshov, Dmitry Ilvovsky"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23753v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Timestamp permutations are used to test whether dynamic link predictors exploit temporal information, but a performance gap can reflect changes in training, evaluation history, or both. We separate these effects with a crossed diagnostic and measure input exposure: whether altered histories actually change the predictor's inputs. On MOOC, TCL trained with binary cross-entropy gains approximately eight pairwise-accuracy points from original-chronology training under either evaluation history, while changing history at fixed weights gives only 0.03 points. The small history contrast reflects unchanged inputs for 68.37% of queries, stable rankings for most others, and cancellation of gains and losses. Under original evaluation history, suppressing explicit time encoding reduces the training contrast from 8.03 to 3.64 points, a paired reduction of 4.39 points (95% interval [3.68, 5.09]) across six seeds. DyGFormer shows corresponding training and history contrasts of 22.34 and 0.38 points across two seeds, despite greater exposure. Partial history permutations further separate nominal intervention strength, input changes, and aggregate accuracy. These comparisons turn a single permutation gap into interpretable statements about training conditions and model responses, while leaving the internal mechanisms of temporal learning open.
