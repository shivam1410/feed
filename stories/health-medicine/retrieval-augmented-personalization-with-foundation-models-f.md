---
title: "Retrieval-Augmented Personalization with Foundation Models for Wearable Stress Detection"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24985"
authors: ["Louis Simon, Mohamed Chetouani"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.24985v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24985v1 Announce Type: new Abstract: Personalization in wearable-based stress detection remains challenging due to substantial inter-individual variability in physiological and behavioral responses. While traditional approaches rely on user-specific fine-tuning or costly self-supervised pre-training on large datasets, we propose a lightweight alternative based on retrieval-augmented personalization. Our method leverages frozen, out-of-domain foundation models to retrieve similar patterns from a target user's history and encode them into a compact personalized embedding that modulates representations extracted by a lightweight transformer network. We evaluate our approach on the WESAD stress detection dataset with N=15 users, comprising wrist-worn physiological (EDA, BVP, temperature) and activity (accelerometer) signals, and report gains of +3.92\% in accuracy and +4.76\% in macro F1-score over a non-personalized transformer baseline, approaching supervised fine-tuning performance without requiring any labeled user data. We further show that temporal retrieval, where only prior user samples are available, achieves performance close to full intra-user retrieval, demonstrating robustness to limited user history. Finally, we explore personalization in a cross-dataset retrieval setting, leveraging embeddings from the K-Emocon dataset to personalize representations for stress detection on the WESAD dataset.
