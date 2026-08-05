---
title: "CAPEval: A Decoupled Caption Evaluation across Understanding and Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02589"
authors: ["Zhipeng Liu", "Haochen Wang", "Zhaoxiang Zhang"]
date: "2026-08-02T20:00:00.000Z"
score: 60
guid: "2608.02589"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02589.png"
generated: "2026-08-05T20:00:21+05:30"
---

Captions serve as a primary supervision signal for both multimodal understanding and text-to-image generation. However, previous evaluations treat the caption quality as a single scalar objective, which conflates two distinct properties: (1) how much visual information a caption covers and (2) how reliably the image supports its stated claims. To this end, we design a decoupled caption evaluation benchmark, CAPEval (Coverage And Precision Evaluation), with human-written ground-truth captions and human-verified atomic checklist items. Specifically, CAPEval decomposes caption quality into Coverage and Precision. The former quantifies how thoroughly a caption covers ground-truth factual content, while the latter reflects the factual correctness rate of all claims expressed in the caption. We select 10 captioners and further conduct controlled downstream end-to-end experiments with them from four model families, where the caption source is the only variable. Empirically, we find a consistent task-dependent dissociation: Coverage serves as the stronger correlate for understanding performance, whereas Precision acts as the dominant predictor for generation performance. This decoupled evaluation paradigm not only delivers a more fine-grained diagnosis of caption quality, but also offers actionable guidance for selecting and optimizing captioners tailored to different downstream tasks.
