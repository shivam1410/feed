---
title: "Applicability of memorization indicators for early spotting of overfitting while recalibrating sEMG-decoders on low sample sizes"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27855"
authors: ["Stephan J. Lehmler, Tobias Glasmachers, Ioannis Iossifidis"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27855v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27855v1 Announce Type: new Abstract: Deep learning models for surface electromyography (sEMG) can benefit substantially from subject-specific (re-)calibration, since no sufficiently large and diverse datasets are available to train fully generic decoders. However, for user acceptance, the number of repetitions that can realistically be collected during calibration is severely limited, which increases the risk of overfitting and, in extreme cases, can even degrade performance compared to the uncalibrated model. Classical overfitting indicators such as validation performance and regularization with early stopping are difficult to apply in this low-sample regime, as they require additional held-out data that is rarely available in practical calibration scenarios. In this work, we investigate a recently proposed class of memorization indicators based solely on the activation statistics of rectified linear units (ReLU) in deep neural networks, which can be computed directly from training data without any extra validation set. We conduct a transferlearning experiment on a benchmark sEMG dataset, where a convolutional neural network is first pre-trained on multiple subjects and subsequently fine-tuned on individual users using only a small number of repetitions. During calibration, we monitor both decoding performance and the activation behaviour of the last hidden layer. Our results provide first evidence that decreases in test accuracy during fine-tuning are ac companied by characteristic changes in activation rates, indicating that activation-based memorization indicators are a promising tool for early spotting of unsuccessful learning in low-sample sEMG calibration settings.
