---
title: "MIRA: Mid-training Rubric Anchoring for Source-Aware Data Selection"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2605.30288"
authors: ["Haowen Wang", "Yaxin Du", "Jian Yang", "Jiajun Wu", "Shukai Liu", "Yuxuan Zhang", "Pingjie Wang", "Siheng Chen", "Tuney Zheng", "Ming Zhou", "Xianglong Liu", "Bryan Dai"]
date: "2026-05-28T20:00:00.000Z"
score: 60
why: "Optimizes training data for specialized LLMs"
guid: "2605.30288"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2605.30288.png"
generated: "2026-06-04T02:25:37+05:30"
---

MIRA optimizes LLM training by selectively filtering data during mid-training—the phase where models learn advanced reasoning capabilities. Rather than treating all data equally, it uses learned quality rubrics specific to each data source, balancing scalability against semantic accuracy. This prevents low-quality data from degrading model capabilities during critical training phases while maintaining computational efficiency. For building specialized LLM agents—in protein structure prediction, climate modeling, materials science—training data quality directly impacts agent reliability and domain accuracy. MIRA's framework enables rapid iteration on domain-specific agents without collecting perfectly curated datasets, reducing engineering overhead. Valuable for quickly adapting LLMs to specialized scientific domains.

## From the source

MIRA is a source-aware filtering framework for mid-training data selection in LLM development that uses self-anchored rubric discovery to balance scalability and semantic accuracy across heterogeneous data sources.
