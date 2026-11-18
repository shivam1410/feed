---
title: "More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.17610"
authors: ["Seyed Mahmoud Sajjadi Mohammadabadi"]
date: "2026-11-12T19:00:00.000Z"
score: ""
guid: "2611.17610"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.17610.png"
generated: "2026-11-18T19:12:26+05:30"
---

Evaluations of multi-agent language models often compare communicating architectures against a single greedy pass. This practice confounds coordination with sample multiplicity and inference compute. We synthesize nine primary empirical evaluations comprising 516 unique multi-agent configurations organized along a resource vector R with six dimensions and a baseline ladder with four categories. Against baselines with a single pass (Category A), multi-agent accuracy differences are negative overall and near zero when omitting the largest contributing study. When evaluated against baselines matched on sample count (Category B) or resource budget (Category C), multi-agent systems average -0.042 in accuracy, and multilevel random effects modeling on the log odds scale remains negative across sensitivity checks. Multi-agent accuracy equals or falls below the baseline in 74% of these comparable contrasts, and study means are nonpositive in almost all evaluated studies. Across studies reporting both baselines, moving from a greedy pass to a sampled baseline shifts accuracy differences by -0.038 on average. Because communication adds no information when agents share identical evidence, positive returns require partitioned evidence, external verification, or error diversity across models. We provide a reviewer checklist and accounting utilities.
