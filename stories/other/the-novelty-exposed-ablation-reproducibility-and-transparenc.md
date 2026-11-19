---
title: "The novelty exposed: ablation, reproducibility and transparency in 40 technical reports of open-weight large language models (LLMs)"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.20003"
authors: ["Bahaeddin Türkoğlu"]
date: "2026-11-14T19:00:00.000Z"
score: ""
guid: "2611.20003"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.20003.png"
generated: "2026-11-19T19:00:31+05:30"
---

In 2025 alone, 48 new large language model (LLM) architectures were added to the Hugging Face transformers library, and many of them arrive with a technical report that presents the model as new. What is actually new in these models, and is it tested? We put this question to LLM technical reports. We look at three things: what the reference code shows about how new open-weight architectures differ from earlier ones; what 40 randomly sampled technical reports claim as new and whether they support it with ablation studies; and what they disclose for reproducibility and transparency. In the library, 39 of the 48 architectures added in 2025 take at least two of their three core blocks from another model, most often Llama, although part of this reflects how the library writes code. In the reports, 19 of 73 architectural or training novelty claims come with a controlled with/without comparison; 4 of 40 reports state more than one training run; 8 rerun the models they compare against under one setup; and 1 discloses data mixture, token count, and compute together. We also looked for known components given new names: none of five candidate cases hid its origin, though we did not study model names. We propose seven reporting rules for LLM release reports and apply them to two reports. We do not judge model quality, and an untested claim may still be true.
