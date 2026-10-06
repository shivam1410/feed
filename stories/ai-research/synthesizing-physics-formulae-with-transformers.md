---
title: "Synthesizing Physics Formulae with Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03947"
authors: ["Shuwei Wang, Vadim Bulitko, Michael Youngblood, Ramon Lawrence, William Yeoh, Shinichi Nakagawa, Matthew R. G. Brown, Yu Wang"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.03947v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Finding a compact formula that fits a set of input-output pairs and predicts outputs on unseen inputs is a fundamental problem in science. Symbolic regression automates the search for such formulae: search-based methods explore the space of possible formulae directly, while transformers pre-trained on synthetic data produce formulae of comparable quality substantially faster. Existing transformers, however, are prone to overfitting --- they find formulae that fit the training data well but do not extrapolate to input ranges unseen during training. We address this by shaping the set of formulae used to train a transformer, and show that the resulting formulae extrapolate substantially better. Fine-tuning the transformer on data with noise-corrupted target values further makes the synthesized formulae robust to noise in the observations. On SRBench and LLM-SRBench our transformer synthesizes a formula in about ten seconds and extrapolates better than all evaluated methods at a comparable budget. Search-based methods surpass our accuracy only when given one to three orders of magnitude more time.
