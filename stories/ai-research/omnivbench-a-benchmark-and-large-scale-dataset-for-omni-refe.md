---
title: "OmniVBench: A Benchmark and Large-Scale Dataset for Omni Reference-to-Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.22069"
authors: ["Wenxue Li", "Peiyan Guan", "Haoyang Jiang", "Junxian Cai", "Hualuo Liu", "Chunjie Zhang", "Chong Guan", "Songlian Li", "Taiyi Wu", "Yongjian Yu", "Xiaotong Zhao", "Alan Zhao", "Eric Liu", "Xi Chen", "Yu Liu", "Lei Zhu"]
date: "2026-09-17T20:00:00.000Z"
score: 64
guid: "2609.22069"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.22069.png"
generated: "2026-09-21T19:05:57+05:30"
---

Reference-to-video (R2V) generation is evolving toward increasingly general and versatile reference control, giving rise to the emerging paradigm of omni R2V generation. However, existing benchmarks fall short of these emerging capabilities: their test cases cover limited reference types and compositions, and their evaluation protocols largely assess holistic reference consistency, overlooking whether reference factors are properly preserved, disentangled, and routed. Meanwhile, the high cost of constructing omni R2V training data makes suitable training resources scarce. To address these gaps, we introduce OmniVBench and the Omni-R2V Dataset for evaluating and training omni R2V models. OmniVBench expands R2V evaluation across broader reference types, fine-grained control tasks, and richer reference compositions, covering 7 task families and 18 fine-grained tasks spanning content, motion, style, structure, narrative, and multi-reference settings. We introduce factor-grounded evaluation with 12,172 case-specific checklist items, assessing whether intended reference factors are faithfully preserved, correctly disentangled and bound to their targets, and properly realized according to the instruction. We further introduce the Omni-R2V Dataset, bringing industrial-grade training resources for diverse R2V tasks to the broader research community. Drawing primarily on a large-scale corpus of professional video footage, it comprises 340K processed training samples spanning diverse reference types and multi-reference compositions. We develop task-specific pipelines for reference-target pair construction, offering a practical and scalable recipe for omni R2V data construction. Extensive evaluation of advanced open- and closed-source R2V models reveals clear performance gaps across task families and evaluation dimensions on OmniVBench, highlighting remaining limitations of current R2V models.
