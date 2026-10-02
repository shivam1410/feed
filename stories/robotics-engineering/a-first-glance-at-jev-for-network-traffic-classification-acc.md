---
title: "A First Glance at Jev for Network Traffic Classification: Accuracy, Processing Time, and Cost"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00376"
authors: ["Shenghe Xu, Lifan Mei"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.00376v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

We evaluate Jev on ten dataset-defined application labels in CESNET-QUICEXT-25 using only the first ten packets' sizes, directions, and inter-packet times. To the best of our knowledge, this is the first empirical study of general-purpose decision models, represented here by Jev, for application classification of network flows. Across 52,000 records from 26 collection weeks following the training period, 40 fixed labeled examples raise Jev's accuracy from 9.80% to 28.42%. Random Forest and Extra Trees trained on 8,000 records achieve 69.95% and 66.80% and outperform Jev in every week. Increasing Jev's context to 150 examples yields 34.50% on the first test week. On a paired 100-record subset, Jev with 40 examples achieves 29% accuracy at a median request time of 0.750 s, versus 37% and 6.036 s for the generative language model OpenAI GPT-5.6 Sol with high reasoning effort through Azure; Jev also incurs lower API charges. The paired subset does not establish an accuracy advantage for either service, and the timing reflects different service configurations. Thus, labeled examples substantially improve Jev, but the tested Jev configurations remain less accurate than trained tree ensembles; unequal supervision budgets and fixed configurations prevent attributing the gap to a single cause.
