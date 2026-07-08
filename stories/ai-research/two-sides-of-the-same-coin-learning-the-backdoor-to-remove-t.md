---
title: "Two Sides of the Same Coin: Learning the Backdoor to Remove the Backdoor"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05748"
authors: ["Qi Zhao, Christian Wressnegger"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2607.05748v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05748v1 Announce Type: new Abstract: The community has recently developed various training-time defenses to counter neural backdoors introduced through data poisoning. In light of the observation that a model learns poisonous samples responsible for the backdoor easier than benign samples, these approaches either use a fixed threshold of the training loss for splitting or iteratively learn a reference model as an oracle for identifying benign samples. In particular, the latter has proven effective for anti-backdoor learning. Our method, HARVEY, leverages a similar yet crucially different technique: learning an oracle for poisonous rather than benign samples. Learning a backdoored reference model is significantly easier than learning a reference model on benign data. Consequently, we can identify poisonous samples much more accurately than related work identifies benign samples. This crucial difference enables near-perfect backdoor removal as we demonstrate in our evaluation. HARVEY substantially outperforms related approaches across attack types, datasets, and architectures, lowering the attack success rate to the very minimum at a negligible loss in natural accuracy. The figure below shows an overview of our methods working principle.
