---
title: "CURV: Enhancing Chart Understanding Through Curriculum Visual Grounded Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02833"
authors: ["Xuehang Guo", "Pingyue Zhang", "Ruiyi Zhang", "Zhenhailong Wang", "Hanrui Lyu", "Heng Ji", "Tong Sun", "Qingyun Wang", "Manling Li"]
date: "2026-08-02T20:00:00.000Z"
score: 65
guid: "2608.02833"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02833.png"
generated: "2026-08-06T19:05:18+05:30"
---

Chart question answering (CQA) requires multimodal large language models (MLLMs) to integrate visual comprehension with logical reasoning, yet current models struggle with accurate visual grounding and coherent reasoning chains. While extrinsic chain-of-thought prompting and visual cues significantly improve performance, current MLLMs lack intrinsic visual grounded reasoning capabilities, leading to inaccurate perception and reasoning disconnected from visual evidence. To address these limitations, we propose CURV, a curriculum learning framework that develops intrinsic visual reasoning capabilities by reformulating CQA as multi-step visual grounded reasoning, where each step coordinates logical reasoning with dynamic visual grounding through spatial attention concentration. To assist model learning, we further introduce CCQA, a three-level curriculum dataset with scalable synthetic generation across diverse chart types and reasoning patterns. Our curriculum systematically progresses from basic single-operation reasoning to complex multi-chart compositional tasks. Experiments demonstrate that CURV achieves up to uparrow20.50% improvements over baselines and is generalizable to real-world benchmarks (up to uparrow12.30%) and out-of-domain multimodal reasoning tasks (up to uparrow10.20%), validating the effectiveness of internalizing visual reasoning with dynamic grounding for enhanced chart understanding capabilities. Code is available at: https://xhguo7.github.io/CURV/.
