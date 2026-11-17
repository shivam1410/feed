---
title: "HeteroWear: Sensor-Aware Self-Supervised Learning for Heterogeneous Wearable Activity Recognition"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.19027"
authors: ["Yasaman Mohammadpour, Pouya Shaeri"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.19027v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Self-supervised learning for wearable sensing is usually confined to a single dataset or device family, leaving open whether representations transfer across heterogeneous sensor configurations and whether gains come from pretraining rather than architecture or richer sensor input. We present HeteroWear, a sensor-aware self-supervised framework pretrained on an eight-dataset wearable corpus (173 subjects, 358,261 windows) spanning inertial and physiological signals across body locations, devices, and sampling rates. HeteroWear separates within-sensor temporal modeling from cross-sensor relational modeling using sensor-context embeddings, temporal and cross-sensor Transformers, and latent cross-attention fusion. Training combines structured sensor dropout, cross-configuration consistency, and per-axis masked sensor modeling; missing sensors are omitted rather than reconstructed. Under leave-one-dataset-out pretraining and subject-disjoint evaluation on PAMAP2, WISDM, HHAR, HARTH, and UCI-HAR, HeteroWear improves mean macro-F1 from 0.688 to 0.724 over the identical architecture trained from scratch, with the largest gain on HHAR (0.823 versus 0.741), and achieves the highest macro-F1 on four of five benchmarks relative to single-accelerometer supervised baselines. Held-out-device evaluation yields a mean +0.066 macro-F1 improvement. Under 50% test-time channel removal, HeteroWear retains 73.8% of full-channel performance versus 64.1% for the same architecture trained from scratch without sensor dropout. Ablations show that structured sensor dropout primarily drives robustness, while cross-configuration consistency and sensor-context encoding contribute to transfer.
