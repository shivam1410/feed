---
title: "OPERA: Offline Policy-guided Expert Routing and Adaptation for Universal Biomedical Image Analysis"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25108"
authors: ["Zihan Li", "Feiyang Liu", "Dandan Shan", "Ruibo Wang", "Qingqi Hong"]
date: "2026-07-26T20:00:00.000Z"
score: 72
guid: "2607.25108"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25108.png"
generated: "2026-07-30T19:07:10+05:30"
---

OPERA addresses a key bottleneck in biomedical imaging: real-world deployment across diverse scanners, protocols, and patient populations causes distribution shifts requiring repeated domain-specific fine-tuning. The multi-agent ensemble uses offline policy learning to assign expert weights without gradient updates. Each agent undergoes confidence calibration through temperature adjustment. OPERA incorporates distribution-aware adaptation that dynamically adjusts class weights using unlabeled test data statistics, and instance-level routing assigns samples to suitable experts via inter-model agreement and predictive entropy. Evaluation spans nine datasets covering fundus photography, chest X-ray, CT, MRI, and multimodal diagnostics.
