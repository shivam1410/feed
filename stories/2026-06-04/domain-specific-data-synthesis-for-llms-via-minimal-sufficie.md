---
title: "Domain-Specific Data Synthesis for LLMs via Minimal Sufficient Representation Learning"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2605.30039"
authors: ["Tong Ye", "Hang Yu", "Tengfei Ma", "Xuhong Zhang", "Jianguo Li", "Peng Di", "Peiyu Liu", "Jianwei Yin", "Wenhai Wang"]
date: "2026-05-28T20:00:00.000Z"
score: 65
why: "Synthesizes specialized training data for LLMs"
guid: "2605.30039"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2605.30039.png"
generated: "2026-06-04T02:25:37+05:30"
---

DOMINO synthesizes high-quality training data for LLMs in specialized domains by learning domain patterns from a few reference examples, without requiring manual descriptions. This inductive approach dramatically improves LLM performance on domain-specific benchmarks like code generation for specialized libraries. For LLM agents deployed in specialized scientific fields—protein folding research, climate modeling, materials science—access to domain-appropriate training data is critical. Agents must understand specialized vocabulary, conventions, and problem-solving approaches specific to their field. DOMINO enables rapid domain adaptation without requiring expert annotation, making LLM agents deployable in new scientific domains faster and at lower cost. Particularly valuable for emerging fields where training data is sparse.

## From the source

DOMINO enables domain-specific data synthesis through an inductive approach that learns domain representations from reference examples, improving code benchmark performance without requiring explicit domain descriptions.
