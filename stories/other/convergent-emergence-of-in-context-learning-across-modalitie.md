---
title: "Convergent Emergence of In-Context Learning Across Modalities"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.14011"
authors: ["Nathan Breslow", "Seungwook Han", "Daniel Hyunsoo Lee", "Aayush Mishra", "Anqi Liu", "Daniel Khashabi"]
date: "2026-09-11T20:00:00.000Z"
score: ""
guid: "2609.14011"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.14011.png"
generated: "2026-09-16T19:00:23+05:30"
---

Few-shot in-context learning (ICL), the capacity of a model to infer abstract patterns from input-output examples provided in its prompt and apply them to new inputs, has been extensively studied in large language models trained for next-token prediction on human text. Recently, few-shot ICL has been demonstrated in autoregressive genomic models as well. This raises a question: does ICL emerge broadly across domains, and if so, what common structure is shared?
  To address both, we develop a controlled cross-modality framework that instantiates the same task suite in a variety of modalities to test what we call the Convergent Emergence Hypothesis: the idea that few-shot ICL, when it emerges, shares a common cross-modality difficulty profile - i.e., tasks that benefit from ICL in one modality tend to benefit in others. We show that paired-mapping ICL emerges across six modalities (language, genome, integer sequences, time series, images, and proteins), surpasses controlled baselines, and has correlated per-task effects across five of them. Together, these results provide support for the Convergent Emergence Hypothesis in some modalities, but not all.
