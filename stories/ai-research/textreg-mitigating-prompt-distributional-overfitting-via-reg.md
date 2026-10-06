---
title: "TextReg: Mitigating Prompt Distributional Overfitting via Regularized Text-Space Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2605.21318"
authors: ["Lucheng Fu", "Ye Yu", "Yiyang Wang", "Yiqiao Jin", "Haibo Jin", "B. Aditya Prakash", "Haohan Wang"]
date: "2026-10-04T20:00:00.000Z"
score: 55
guid: "2605.21318"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2605.21318.png"
generated: "2026-10-06T22:55:59+05:30"
---

Large language models (LLMs) are highly sensitive to the prompts used to specify task objectives and behavioral constraints. Many recent prompt optimization methods iteratively rewrite prompts using LLM-generated feedback, but the resulting prompts often become longer, accumulate narrow sample-specific rules, and generalize poorly beyond the training distribution. We study this failure mode as prompt distributional overfitting and argue that it reflects a lack of representation control in discrete text-space optimization. We formalize this view through representational inefficiency, a dual-factor measure that decomposes prompt inefficiency into capacity cost and scope narrowness, attributing distributional prompt overfitting to their coupled growth during optimization. We propose TextReg, a regularization framework that realizes a soft-penalty objective through regularized textual gradients, combining Dual-Evidence Gradient Purification, Semantic Edit Regularization, and Regularization-Guided Prompt Update. Across multiple reasoning benchmarks, TextReg substantially improves out-of-distribution (OOD) generalization, with accuracy gains of up to +11.8% over TextGrad and +16.5% over REVOLVE.
