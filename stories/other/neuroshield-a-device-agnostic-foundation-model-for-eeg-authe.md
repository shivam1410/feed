---
title: "NeuroShield: A Device-Agnostic Foundation Model for EEG Authentication"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20673"
authors: ["Matin Fallahi, Patricia Arias-Cabarcos, Thorsten Strufe"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20673v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20673v1 Announce Type: new Abstract: A central challenge in EEG authentication is that models are typically tied to the acquisition settings in which they are trained. In particular, variations in headset hardware, channel layout, and signal duration create heterogeneous recordings that existing models are not designed to handle, causing each new headset or dataset to be treated as a separate model-development problem. This fragmentation limits multi-dataset learning, hinders knowledge transfer, and reduces model reusability. To address this limitation, we present NeuroShield, a reusable foundation model for EEG authentication that learns identity-discriminative embeddings from variable-channel and variable-length EEG recordings through a dual-stage transformer architecture. We pretrain NeuroShield on three public EEG datasets comprising 15{,}762 subjects and 28{,}116 sessions, and evaluate transfer on two unseen downstream datasets. Our evaluations show that, after fine-tuning, NeuroShield reduces equal error rate by 0.44--8.06 percentage points relative to the state of the art. NeuroShield further generalizes to segments longer than those seen during training and operates across channel layouts not encountered during pretraining. These results establish NeuroShield as a reusable and adaptable EEG identity encoder across heterogeneous recording settings. We release NeuroShield as open source to support reproducibility and community adoption.
