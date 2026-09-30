---
title: "Understanding On-Policy Distillation: A Mechanistic Interpretability Perspective via Sparse Crosscoders"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35210"
authors: ["Zichao Yu", "Qianshuo Ye", "Xu Wang", "Difan Zou"]
date: "2026-09-27T20:00:00.000Z"
score: 58
guid: "2609.35210"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35210.png"
generated: "2026-09-30T19:08:55+05:30"
---

On-policy distillation (OPD) is a widely adopted post-training technique for LLM reasoning. It is commonly believed to transfer knowledge from a stronger teacher, yet what OPD actually distills into the student's internal representations remains unclear. We study this question with sparse crosscoders, which learn one feature dictionary shared by the student before and after OPD and the teacher. Standard crosscoder analyses, however, identify model-specific features but cannot tell how a model's use of its features changes, since all models are encoded into one set of feature activations. We therefore propose the swap readout, which reads each student checkpoint's feature activations on its own, measuring how training changes the student's use of each feature, even for checkpoints unseen by the crosscoder. Across three OPD settings, we find that OPD neither creates features nor passes on the teacher's own, and leaves the firing rates of over 98% of the student's frequently used features within 20%. We further examine the SFT warm-up on the teacher's rollouts that commonly precedes OPD and makes it more effective. Rather than adding features, the warm-up reweights the shared ones in two ways. First, it already raises and lowers many of the features that OPD later raises and lowers, doing part of OPD's work in advance. Second, it changes features that OPD alone would not, notably those for conversation format, reasoning style, and mathematical notation, and these changes persist through OPD. Imposing this reweighting on a directly distilled student's features, without changing its weights, brings its accuracy close to that of the warmed-up student, whereas the same change on shuffled features does not. Together, these findings suggest that OPD reweights existing features rather than acquiring new ones: the student learns from the teacher how to use the features they already share.
