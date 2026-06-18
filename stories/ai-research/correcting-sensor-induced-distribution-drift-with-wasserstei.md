---
title: "Correcting Sensor-Induced Distribution Drift with Wasserstein Adversarial Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18561"
authors: ["Saraa Ali, Vladimir Bocharnikov, Fedor Ratnikov, Mikhail Hushchyn, Artem Ryzhikov, Denis Derkach"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.18561v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18561v1 Announce Type: new Abstract: The quality of recorded data depends on the stability of the sensor system that acquires it. Sensor motion and aging can degrade the performance and stability of downstream data-driven methods. We present a Wasserstein-GAN-inspired approach for unsupervised inference of physically interpretable transformation parameters that map a changed detector response distribution back to a nominal reference distribution. In contrast to standard generative modeling, the generator is used as a learnable calibration transformation whose trainable weights represent the sought parameters, while the critic provides a distributional distance signal via the Wasserstein objective. We validate the approach on a tracking-detector toy model with controlled layer shifts and demonstrate its application on high-granularity Geant4-simulated calorimeter data with cell-wise aging effects. The method recovers aging coefficients for individual cells with correlation to ground truth and improves agreement between calibrated and reference energy-sum distributions, while exhibiting the expected degradation at increasing channel-to-channel noise levels. These results indicate that adversarial distribution matching can serve as a data-driven component of calibration strategies in settings where direct labels for degradation parameters are unavailable.
