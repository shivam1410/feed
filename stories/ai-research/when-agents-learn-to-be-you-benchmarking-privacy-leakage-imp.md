---
title: "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03700"
authors: ["Yongli Xiang", "Zhifang Zhang", "Bojun Yang", "Ziming Hong", "Lei Feng", "Miao Xu", "Tongliang Liu"]
date: "2026-08-03T20:00:00.000Z"
score: 75
guid: "2608.03700"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03700.png"
generated: "2026-08-05T20:00:21+05:30"
---

Persona skills distill personal interaction histories into portable and executable artifacts for downstream agents. While enabling flexible personalization, this process concentrates fragmented personal signals, amplifies their impact through reuse, and challenges defenses designed for individual records or retrieval-based memory. To systematically investigate the safety of the persona-skill pipeline, we introduce AntiSkillBench, an end-to-end benchmark for evaluating risks and defenses across the persona-skill pipeline. It comprises: (i) a dataset of 7,500 persona-grounded dialogue traces, constructed from 50 behaviorally rich profiles spanning diverse task scenarios; (ii) an evaluation suite that measures skill-level privacy leakage and agent-level attribute disclosure and behavioral impersonation across three skill-distillation strategies; and (iii) a defense evaluation covering four configurations across online and post-hoc interventions, including active risk suppression and passive provenance protection. Experiments across three frontier agents show that persona-skill risks persist across agent backbones and distillation protocols, extending from explicit attributes to communication styles and personality traits. Existing defenses exhibit limited and distillation-dependent effectiveness, failing to generalize across risk and distillation strategies. These results highlight AntiSkillBench as a challenging benchmark for developing privacy-preserving and authenticity-aware persona skills.
