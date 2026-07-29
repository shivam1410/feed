---
title: "AMRD: Adaptive Multi-Teacher Relational Distillation for Lightweight Speech Emotion Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25289"
authors: ["Yuqi Li, Yi-Cheng Lin, Xianglong Wang, Kuo Yang, Xiaoqin Feng, Yixuan Wang, Huiran Duan, Yingli Tian"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.25289v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25289v1 Announce Type: new Abstract: On-device speech emotion recognition (SER) is critical for real-time applications, yet large self-supervised models that excel at SER are too costly for edge devices. Multi-teacher knowledge distillation can compress them into a lightweight student, but two challenges remain: teacher reliability varies across batches, and logit-level distillation ignores inter-sample relational structure. We propose Adaptive Multi-teacher Relational Distillation (AMRD) to address both. A one-class SVM on each teacher's logit similarity matrix assigns per-batch weights favoring more coherent teachers. A relational distillation loss aligns teacher and student similarity matrices, capturing structure that logit matching misses. On IEMOCAP and CREMA-D datasets across four student architectures, AMRD outperforms single-teacher distillation baselines in most settings, and ablations confirm both components yield complementary gains.
