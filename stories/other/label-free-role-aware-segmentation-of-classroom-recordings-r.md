---
title: "Label-Free Role-Aware Segmentation of Classroom Recordings: Recovering the Teacher from Transferable Structure"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23609"
authors: ["Nitin Jain, Tim F\\\"utterer, Babette B\\\"uhler, \\c{C}a\\u{g}atay Y{\\i}ld{\\i}z"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23609v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

How much the teacher talks and when are among the most informative and costly-to-measure signals of teaching. Yet, classroom audio is among the most sensitive data an AI system can process: recordings capture minors and fall under GDPR, preventing raw audio from leaving the recording device. We present a teacher-student segmentation pipeline designed to meet exactly this constraint: label-free at inference, running on a recording device, and requiring no per-session calibration. The pipeline chains a lightweight voice activity detector, compactly pretrained speaker embeddings, agglomerative clustering, and a small logistic regression that assigns the teacher role based on session-relative structure rather than voice identity. We show that our structural cue transfers across classrooms, languages, and acoustic conditions. In leave-one-teacher-out cross-validation on 292 recordings from 63 teachers across English and German corpora, our pipeline achieves teacher F1 of 0.81 and 0.87, respectively, outperforming both enrollment-based baselines and a 30-second supervised enrollment ceiling. On a commodity smartphone, its performance matches pyannote, a strong neural diarization tool, while running 4.8x faster at comparable peak memory at a real-time factor of ~0.18. We also find that transcribing filtered audio only marginally increases teacher's word error rate from $0.26$ to 0.28. Residual failures concentrate where teacher and student voices are not acoustically separable. However, we show how to flag these sessions label-free at inference so that they can be routed to human review, enabling selective, privacy-preserving deployment.
