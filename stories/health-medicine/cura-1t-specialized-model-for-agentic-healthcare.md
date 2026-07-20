---
title: "Cura 1T: Specialized Model for Agentic Healthcare"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15314"
authors: ["actAVA AI", "Haolin Chen", "Leon Qi", "Steve Brown", "Deon Metelski", "Tao Xia", "Joonyul Lee", "Qixuan Wang", "Kevin Riley", "Frank Wang", "Weiran Yao"]
date: "2026-07-14T20:00:00.000Z"
score: 75
guid: "2607.15314"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15314.png"
generated: "2026-07-20T19:05:49+05:30"
---

Healthcare spans high-stakes communication, expert reasoning, and workflow execution, yet specialized LLMs that cover these use cases together remain limited. A healthcare model must handle patient consultation, clinical reasoning over text and images, interactive diagnosis, and electronic health record (EHR) tool use. These capabilities fail in different ways, and a narrow update for one task can degrade another. We present Cura 1T, a healthcare-specialized LLM trained through a human-gated self-evolution loop. In each evolution round, a training agent plans a target capability, trains the model, evaluates benchmark trajectories, and refines the data mixture from observed failures. This data-centered loop improves the model through targeted synthetic and curated examples rather than a single generic medical-data update. Across the healthcare evaluation suite, Cura 1T ranks at or near the top among frontier baselines, while remaining competitive on out-of-domain reasoning and agentic benchmarks.
