---
title: "OmniReasoning: Pushing the Limits of Audio-Visual Joint Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.39490"
authors: ["Junming Lin", "Yuxuan Wang", "Zhenxin Lei", "Yuxin Liu", "Ruixun Liu", "Yinsong Yan", "Ling Wang", "Minghao Han", "Yunfei Chu", "Shun Lei", "Xueyao Zhang", "Qize Yang", "Jin Xu", "Yiwu Zhong"]
date: "2026-09-29T20:00:00.000Z"
score: 65
guid: "2609.39490"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.39490.png"
generated: "2026-10-06T22:55:59+05:30"
---

Recent advances have enabled unified omni-modal models in understanding audio, vision, and language. However, existing benchmarks, training data, and learning methods largely treat the modalities independently, leaving the capability of audio-visual joint reasoning poorly evaluated and insufficiently elicited. We address this gap with a benchmark, data engine, and learning method. First, we introduce OmniReasoningBench, a benchmark where both audio and visual evidence are indispensable. It comprises 1,150 multiple-choice and open-ended questions across two tasks, reasoning over video and reasoning beyond video. Second, we develop a data engine OmniQA. It automatically constructs evidence-grounded QA pairs that explicitly necessitate audio-visual joint reasoning, together with time-stamped clue chains that guide the annotation of thinking process. Besides our benchmark, this engine produces training data OmniReasoning-SFT-112K and OmniReasoning-RL-19K. Finally, we propose an on-policy self-distillation method Modality-Factored Self-Distillation (MFSD). It evaluates each sampled response under modality-specific clue contexts, disentangling the contributions of individual clues and their cross-modal interactions for token-level credit assignment. With our training data and learning method, our model OmniReasoning-30B-A3B achieves 50.0% on OmniVideoBench and 42.5% on OmniReasoningBench, improving the base model Qwen3-Omni-30B-A3B-Thinking by 12.8 and 9.3 percentage points, respectively. Moreover, it delivers substantial gains on general and long-video benchmarks, including Video-MME-v2. We hope our work offers a solid step for facilitating future research in omni-modal joint reasoning.
