---
title: "Variance Fingerprints: Component-Wise Identification of Content Factors by Augmentation Design"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14260"
authors: ["D. Hudson Smith"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14260v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Augmentation-based self-supervised learning can recover the content shared across views without separating its underlying factors into individual coordinates. We ask whether augmentations can be designed to make those factors identifiable. Our approach allows content factors to fluctuate across augmented views while preserving their mean for each source instance. Each instance receives a fixed, recorded set of augmentation strengths that controls how much its factors fluctuate. When factors respond differently to changes in these strengths, their patterns of variation provide information that distinguishes them. Under suitable decoder and support assumptions, we prove that these differences identify individual factors in a conditional Gaussian model, up to permutation, scaling, and translation. We then develop a learner that uses the recorded strengths to estimate these patterns jointly across instances, enabling learning from few views per instance. Synthetic experiments demonstrate near-perfect factor recovery through nonlinear mixing. Controlled dSprites experiments show improved coordinate alignment using augmentations that target known factors, even without telling the learner which augmentation corresponds to which representation coordinate. These results suggest a route to component identification in self-supervised learning: augmentation design can supply identifying information beyond shared content alone.
