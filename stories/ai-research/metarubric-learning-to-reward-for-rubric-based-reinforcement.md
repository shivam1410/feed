---
title: "MetaRubric: Learning to Reward for Rubric-Based Reinforcement Learning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02824"
authors: ["Yuxuan Fan", "Jaehong Yoon"]
date: "2026-10-01T20:00:00.000Z"
score: 52
guid: "2610.02824"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02824.png"
generated: "2026-10-05T19:10:08+05:30"
---

Rubric-based reinforcement learning extends reward-driven optimization to open-ended tasks by assigning partial credit to individual response requirements. However, rubric judges can assign a high criterion score even when the information or action it requires is absent from the response, a failure mode we term Vacuous Credit. Such awards persist after the required information is removed and can reverse the sign of a response's GRPO advantage. To address this problem, we introduce MetaRubric, which alternates evidence-aware policy optimization with response-guided rubric adaptation. We construct counterfactual counterparts by changing one task-relevant fact in each prompt. During policy optimization, credit is assigned only when the response contains sufficient evidence to satisfy the required rubric criterion. After each policy-optimization stage, current policy responses guide revisions to original and counterfactual criteria while preserving the meaning of the original prompt's initial rubric as interpreted under each prompt's facts. We also adapt criterion weights at stage boundaries to better address observed policy errors. Across multiple backbones, MetaRubric improves PubMedQA accuracy by 6.00--20.40 percentage points over static-judge GRPO, with further gains on HealthBench-Hard and two multimodal medical benchmarks.
