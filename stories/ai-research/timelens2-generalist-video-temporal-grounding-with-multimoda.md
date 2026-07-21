---
title: "TimeLens2: Generalist Video Temporal Grounding with Multimodal LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17423"
authors: ["Yuhan Zhu", "Changlian Ma", "Xiangyu Zeng", "Xinhao Li", "Zhiqiu Zhang", "Songze Li", "Jun Zhang", "Tianxiang Jiang", "Yuandong Yang", "Ziang Yan", "Zikang Wang", "Xinyu Chen", "Haoran Chen", "Shaowei Zhang", "Limin Wang"]
date: "2026-07-18T20:00:00.000Z"
score: 65
guid: "2607.17423"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17423.png"
generated: "2026-07-21T19:05:01+05:30"
---

Video multimodal large language models (MLLMs) can describe what happens in a video, but rarely identify when the supporting evidence occurs. We study generalist video temporal grounding, in which one model predicts a variable-cardinality set of evidence intervals across video lengths, domains, query forms, and viewpoints. Existing training strategies are misaligned with this set-valued task: long-video labels often rely on brittle one-pass annotation, while reinforcement-learning rewards either fail to distinguish non-overlapping predictions or require fragile segment matching. TimeLens2 treats temporal evidence as an interval set throughout supervision and optimization. TimeLens2-93K constructs reliable multi-span supervision through caption-derived proposals, independent localization, cross-agent consensus, semantic verification, and boundary refinement. Our temporal Wasserstein reward computes exact one-dimensional \(W_1\) between uniform distributions over merged interval supports, providing dense, matching-free feedback under unequal cardinalities and equivalent fragmentation; temporal IoU complements it with precise-overlap feedback. Across seven benchmarks, TimeLens2-2B outperforms all size-matched baselines on every benchmark, while the 4B and 8B variants achieve state-of-the-art performance, surpassing open-source models with up to 397B parameters. The 2B, 4B, and 8B variants improve over their Qwen3-VL backbones by 14.2, 13.0, and 18.1 mIoU points, respectively.
