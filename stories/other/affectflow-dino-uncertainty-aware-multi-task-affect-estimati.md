---
title: "AffectFlow-DINO: Uncertainty-Aware Multi-Task Affect Estimation via Conditional Rectified Flow"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13250"
authors: ["Salah Eddine Bekhouche", "Abdellah Zakaria Sellam", "Fadi Dornaika", "Abdenour Hadid"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.13250"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13250.png"
generated: "2026-07-18T21:58:10+05:30"
---

We present AffectFlow-DINO, a multi-task learning system for the 11th ABAW challenge that extends a standard deterministic architecture with a conditional rectified-flow head to model the inherent ambiguity of in-the-wild facial behavior. Instead of predicting a single affect estimate, the model learns a conditional generative distribution, enabling uncertainty-aware one-to-many predictions through Monte Carlo sampling. The system jointly estimates continuous valence-arousal, classifies eight facial expressions, and detects twelve Action Units from static face images. Built on a frozen DINOv3 ViT-S/16 backbone, extensive ablation studies show that rectified-flow decoding consistently improves deterministic prediction, particularly for valence-arousal estimation (CCC-V +0.058). We further show that post-hoc threshold calibration effectively recovers performance on severely imbalanced rare classes (e.g., Fear: 3.8% rightarrow 33.1%) without retraining. Combined with backbone fine-tuning and flow retuning, the final model achieves P_{MTL=1.177}, substantially outperforming the official challenge baseline of P_{MTL}=0.45.
