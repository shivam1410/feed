---
title: "Pretraining for Sample-Efficient Neural Interfaces"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13507"
authors: ["Ben Tang, Zachary Spalding, Gregory B. Cogan"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13507v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13507v1 Announce Type: new Abstract: Brain-computer interfaces (BCIs) decode neural activity to restore lost function. Typically, training a high-performance neural decoder requires a large labeled dataset to be collected from every new subject. One way to reduce the labeled data cost is self-supervised pretraining, which learns general neural representations from unlabeled recordings that accumulate across subjects. However, for intracranial electroencephalography (iEEG) recordings, self-supervised learning has been challenging due to differences in contact placement and neuroanatomy between subjects. We propose MAPA, an otherwise vanilla masked autoencoder with two spatial encodings, an anatomical region embedding and a relative positional encoding, which together enable it to learn neural representations that transfer to unseen subjects and across various tasks. MAPA sets a new state of the art across all three regimes of the Neuroprobe benchmark without fine-tuning: within-session, cross-session, and cross-subject. In the cross-subject regime, a linear probe on MAPA's features needs only ${\sim}164$ labeled trials to reach the accuracy that takes 3,500 without pretraining. Our results show that self-supervised pretraining can scale across heterogeneous iEEG recordings and reduce the labeled data needed for accurate decoding in new subjects.
