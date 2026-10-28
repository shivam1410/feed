---
title: "Simulated petrological labels enable probabilistic mineralogy prediction from whole-rock geochemistry"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36429"
authors: ["Matthew J. Liu, Aaron D. Kaplan, Michael L. Whittaker, Kristin A. Persson"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36429v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Modal mineralogy, the mineral identities and abundances in rocks, guides geological studies and industrial resource extraction. While measuring modal mineralogy is time-intensive, whole-rock chemical measurements furnish elemental concentrations at higher throughput. Predicting mineralogy from elemental data, however, poses a one-to-many inverse problem, and labeled mineralogical datasets are too sparse to train on at scale. We address both challenges by simulating petrological labels that express multiple formation conditions per composition and at a scale unattainable by measurements. Nearly one million simulated labels supervise the middle component of a three-part model: a transformer encoder self-supervised on roughly 788,000 whole-rock compositions, the simulation-trained heads that predict distributions over mineral assemblages, and a recalibration layer that aligns the predictions with measured mineralogy. Zero-shot on 640 volcanic rocks, the model discriminates the presence of most mineral categories and predicts which rocks are richer in each mineral. However, the predicted abundances are systematically offset from measured values. Recalibration fit on as few as 25 labeled rocks recovers 76 percent of the likelihood improvement from fitting on the full 368-rock fitting set, while abundance error responds more slowly (11.0% zero-shot and 9.5% with the full fitting set). This work demonstrates how a machine learning model in the geochemical sciences can both leverage an imperfect simulator and mitigate its systematic biases.
