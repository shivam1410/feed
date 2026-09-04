---
title: "From Zero to Hero: An Open LLM Ecosystem for Armenian"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03350"
authors: ["Erik Arakelyan, Khatun Avetisyan, Meri Davtyan, Heghine Grigoryan, Nane Khachatryan, Hayk Shahsuvaryan, Henrik Sergoyan, Vahan Martirosyan"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.03350v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03350v1 Announce Type: new Abstract: Pretraining data for Armenian, a morphologically rich and low-resource language, is scarce, and no open Armenian LLM has been released with the data and recipe needed to reproduce it. To address this gap, we curate and release two datasets. ArmWeb is an extensively validated corpus of 4.37M Armenian news documents. ArmSTEM is a parallel English-Armenian collection of 373K math and science problems with step-by-step solutions, translated into Armenian and verified through both answer-preserving LLM judgment and human evaluation. Continued pretraining of Gemma-4-E4B on these datasets yields arm-gemma-e4b, which outperforms every existing open Armenian model as well as its unadapted base, and is the first open Armenian LLM with complete training data and recipe. Our ablations show that news-only continued pretraining improves fluency while eroding knowledge, a pattern we also observe in existing Armenian models, and that a small share of verified translated STEM data reverses the loss. We further find that the largest public Armenian corpora overlap web-derived evaluation panels heavily, including a train/test self-overlap inside FineWeb-2. We openly release all data, models, and code.
