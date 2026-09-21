---
title: "FRAUDSkill: Structured Frozen-Weight Skill Optimization for Audio Anti-Fraud Detection"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18766"
authors: ["Chengxian Hu", "Zhiming Ma", "Mingjun Pan", "Yifan Wang", "Shun Zhang", "Qifan Wang", "Zhilei Zhao", "Yijin Zhou", "Yuxi Zhao", "Huiyuan Liu", "Peidong Wang", "Peng Chen"]
date: "2026-09-15T20:00:00.000Z"
score: 60
guid: "2609.18766"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18766.png"
generated: "2026-09-21T19:05:57+05:30"
---

Large audio-language models have shown promise for anti-fraud detection by directly processing speech and reasoning over fraud-related evidence. Their deployment, however, requires predictions to follow a predefined label space and a structured decision protocol consisting of service-scenario identification, fraud detection, and conditional fraud-type classification. Existing fine-tuning and prompt-based approaches typically encode task knowledge, constraints, and decision rules into model parameters or manually maintained prompts, making them difficult to adapt as fraud patterns and labeling policies evolve. To this end, we propose FRAUDSkill, a structured frozen-weight adaptation framework that leaves the underlying audio-language model unchanged while optimizing an external layer of skill programs, route-specific policies, and decision rules. We further combine structured output control with validation-guided multi-path inference to ensure protocol-compliant predictions. On the TeleAntiFraud benchmark, FRAUDSkill achieves 73.50% Macro-F1, outperforming the shared frozen-model baseline by 31.96% while reducing invalid outputs to 1.94%. Extensive experiments demonstrate that external skill optimization provides an effective and adaptable solution for structured audio anti-fraud detection without modifying the underlying model. The source code is available at https://anonymous.4open.science/r/FRAUDSKILL-114514.
