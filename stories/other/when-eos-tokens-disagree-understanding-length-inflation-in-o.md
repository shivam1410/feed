---
title: "When EOS Tokens Disagree: Understanding Length Inflation in On-Policy Distillation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.20511"
authors: ["Yuxiao Yang", "Tianrun Yu", "Shangzhe Li", "Kaixiang Zhao", "Xuchao Zhang", "Chetan Bansal", "Huaxiu Yao", "Taylor W. Killian", "Weitong Zhang"]
date: "2026-09-16T20:00:00.000Z"
score: ""
guid: "2609.20511"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.20511.png"
generated: "2026-09-18T20:52:59+05:30"
---

We study length inflation in on-policy distillation (OPD), where student responses can become excessively long and even exhaust the generation budget. We identify termination-token mismatch between base students and post-trained teachers as an important source of this behavior. Across Qwen3, Llama, and Gemma, the two models can place their stopping probability on different EOS tokens, even when their declared stopping sets are identical. This mismatch can suppress the student's preferred termination action without reliably transferring the teacher-preferred alternative. We show that aligning the decoding stopping set alone is insufficient, while treating functionally equivalent EOS tokens as a shared semantic stopping action substantially mitigates mismatch-induced length inflation across all three model families. To further understand how termination behavior evolves over training, we study OPD across different K2-Horizon training stages. This stage-wise analysis shows that termination preferences can shift substantially during training, while also revealing a distinct length inflation late in the OPD run that persists beyond termination alignment. Together, these results identify termination mismatch as an important, but not exhaustive, source of OPD length dynamics. We release an implementation incorporating the proposed termination-handling corrections.
