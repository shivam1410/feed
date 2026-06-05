---
title: "RL Excursions during Pre-Training: Re-examining Policy Optimization for LLM training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04272"
authors: ["Rachit Bansal, Clara Mohri, Tian Qin, David Alvarez-Melis, Sham Kakade"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.04272v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04272v1 Announce Type: new Abstract: The standard LLM training pipeline applies reinforcement learning (RL) only after pre-training and supervised fine-tuning (SFT). We question this status quo by training a LLM from scratch and applying RL, SFT, and SFT followed by RL directly to intermediate pre-training checkpoints. We find that RL is effective very early, and often matches the full SFT$\to$RL pipeline early as well. Through experiments on harder problems, we find that targeted pre-training data composition is a strong lever for RL effectiveness, even more so than model scale. Beyond reasoning accuracy, applying RL directly to base checkpoints expands the model's distribution; the sharpening effect reported in recent work arises only when RL follows SFT. The general capabilities of the model remain essentially unchanged by RL, while they degrade following SFT. Finally, we merge RL and SFT objectives by parallel averaging, which outperforms across all other training methods discussed, across metrics, while preserving general capabilities. Together, these results suggest that LLM training might benefit from an expanded use of RL.
