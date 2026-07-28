---
title: "Multimodal Surface EMG Hand Gesture Recognition Using Query-Based Transformers for Prosthetic Control"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22779"
authors: ["Federico Del Pup, Elisa Tentori, Manfredo Atzori"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.22779v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22779v1 Announce Type: new Abstract: Hand gesture recognition via surface electromyography (sEMG) is fundamental to prosthetic control. In this field, deep learning approaches have become the gold standard. However, current architectures struggle to scale; model performance typically decreases as the number of hand movements increases. Performance degradation is tied to the increased statistical complexity of decoding expanded gesture sets and compounded by the limitations of state-of-the-art methods, which primarily rely on low-latency unimodal convolutional architectures. Convolutions operate locally, limiting model's ability to capture long-range sequential patterns. Unimodal setups cannot leverage complementary information from coordinated signals characterizing movement execution, such as inertial and eye-tracking data. These limitations motivate architectures that integrate local and global features across multimodal physiological sequences. To bridge this gap, this study introduces EMG-CrossFormer, an end-to-end hybrid convolutional-transformer for seamless multimodal integration. EMG-CrossFormer combines representations from an arbitrary number of unimodal encoders through cascaded cross-attention fusion layers, and decodes the fused representations using learnable gesture queries. EMG-CrossFormer was evaluated on four NinaPro datasets (DB2, DB3, DB7, and DB10) and benchmarked against six state-of-the-art models using an increasing number of modalities. Using only sEMG, EMG-CrossFormer achieved mean accuracies of 72.33%, 52.48%, 79.16%, and 73.49% on DB2, DB3, DB7, and DB10, respectively. Incorporating inertial signals improved performance to 90.66%, 80.40%, 92.79%, and 92.06%. These results show that joint local-global feature modeling improves sEMG-only decoding and that multimodal fusion substantially amplifies this benefit, underscoring the value of both design principles for complex hand gesture recognition.
