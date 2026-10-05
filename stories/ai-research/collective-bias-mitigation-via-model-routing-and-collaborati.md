---
title: "Collective Bias Mitigation via Model Routing and Collaboration"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.03240"
authors: ["Mingzhe Du", "Luu Anh Tuan", "Xiaobao Wu", "Yichong Huang", "Yue Liu", "Dong Huang", "Huijun Liu", "Bin Ji", "Jie M. Zhang", "See-Kiong Ng"]
date: "2026-10-01T20:00:00.000Z"
score: 62
guid: "2610.03240"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.03240.png"
generated: "2026-10-05T19:10:08+05:30"
---

Large language models (LLMs) are increasingly deployed in public health, finance, and governance, requiring both accuracy and societal value alignment. Despite recent advances, LLMs often perpetuate or amplify bias embedded in their training data, posing challenges to fairness. While self-debiasing encourages an LLM to identify and correct its own biases, relying on a single model's intrinsic knowledge may be insufficient to address deeply ingrained stereotypes. To address this limitation, we introduce Collective Bias Mitigation (CBM), a framework that alleviates bias by learning fine-grained model behavior and fostering knowledge sharing among diverse LLMs. This work is the first to systematically explore the effective selection and organization of distinct LLMs to cultivate fairer LLM responses. Experiments show CBM substantially outperforms standalone baselines (e.g., in the top-7 setting, Committee lowers the age bias score from 0.25 to 0.10). Our Debating and Committee topologies achieve substantial bias reduction, with the latter balancing mitigation effectiveness and inference cost, highlighting the potential of CBM for fairer LLMs.
