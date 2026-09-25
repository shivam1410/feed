---
title: "Calibration as a First-Class Criterion in LLM Evaluation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.26489"
authors: ["Mario Sanz-Guerrero", "Katharina von der Wense"]
date: "2026-09-21T20:00:00.000Z"
score: 55
guid: "2609.26489"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.26489.png"
generated: "2026-09-25T23:24:50+05:30"
---

Calibration of language models -- the alignment between expressed or implicit confidence and empirical correctness -- is a well-studied subfield within NLP. Methods to measure it already exist. The problem is adoption: outside this subfield, NLP research regularly introduces new models, datasets, and benchmarks without checking whether the model's confidence scores are meaningful. We argue that this adoption gap is a major obstacle to trustworthy LLM evaluation. Miscalibration causes problems in two distinct areas: at deployment, where overconfident mistakes cause real harm, and inside the research pipeline, where methods like LLM-as-a-judge, synthetic data generation, and active learning rely on calibrated confidence without verifying it. Standard calibration metrics only require two inputs per example: a confidence score and a correctness judgment. Most benchmarks in use today already provide both, meaning calibration can be reported immediately. For open-ended generation, however, defining these two inputs is still an open challenge. We argue that each NLP subfield should pair its main performance metric with a calibration score and call for treating calibration as an essential property of every model rather than a niche topic.
