---
title: "MemSFT: Mitigating Alignment Tax with an External Parametric Memory"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25614"
authors: ["Jiarui Wang", "Xiang Shi", "Jiaqi Cao", "Rubin Wei", "Xiquan Wang", "Hao Sun", "Jingzhi Wang", "Zhiqi Yang", "Qipeng Guo", "Bowen Zhou", "Zhouhan Lin"]
date: "2026-07-27T20:00:00.000Z"
score: 70
guid: "2607.25614"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25614.png"
generated: "2026-08-05T20:00:21+05:30"
---

Adapting Large Language Models (LLMs) to specialized domains often incurs an alignment tax, as fine-tuning on domain-specific tasks can cause catastrophic forgetting and substantially degrade performance on general tasks. We propose MemSFT, which mitigates the alignment tax by decoupling domain specialization from backbone parameter updates through a plug-and-play parametric memory. The memory is trained to imitate the behavior of a non-parametric retriever operating over domain data, thereby memorizing knowledge and patterns that would otherwise be accessed through retrieval. Once trained on a specific domain, the memory can be reused across LLMs of different sizes. During generation, a learned router dynamically fuses the output distributions of the memory and backbone at each decoding step, allowing domain expertise to be invoked selectively. Across biology, geoscience, and law, evaluations with models ranging from Qwen3-8B to Qwen3-235B-A22B show that MemSFT consistently improves domain performance with negligible degradation in general performance, whereas full SFT suffers severe forgetting on general tasks. Overall, our results demonstrate a practical path to decoupling general model capabilities from domain-specific knowledge at the parameter level, thereby equipping LLMs with new specialized capabilities without compromising their general capabilities.
