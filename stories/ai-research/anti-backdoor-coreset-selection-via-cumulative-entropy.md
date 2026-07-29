---
title: "Anti-Backdoor Coreset Selection via Cumulative Entropy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25502"
authors: ["Qi Zhao, Christian Wressnegger"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.25502v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25502v1 Announce Type: new Abstract: Recent training-time defenses against neural backdoors isolate a benign subset from poisoned training data, to learn a backdoor-free model from it. In this paper, we formulate this defense strategy as a coreset selection problem, giving rise to so-called "Anti-Backdoor Coreset Selection." Since poisonous samples have (a) lower prediction uncertainty and are (b) less frequent than benign samples, coreset selection naturally focuses more on samples associated with benign functionality than the backdoor functionality. We use the Cumulative Entropy as selection criterion to further facilitate this effect. The metric tracks the learning dynamics of training samples and allowing us to select benign samples with high informativeness for the coreset. Additionally, we unlearn the chosen samples in each epoch to facilitate the separability between benign and poisonous samples. Together, this yields an exceptionally effective training-time defense that constructs a benign coreset to train a backdoor-free model. Unlike prior defenses that compromise natural accuracy and fail against certain attacks, our method mitigates backdooring attacks consistently with a negligible impact on natural performance.
