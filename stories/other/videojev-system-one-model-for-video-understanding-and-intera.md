---
title: "VideoJev: System One Model for Video Understanding and Interaction"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18615"
authors: ["Yuhan Zhu", "Xiangyu Zeng", "Qingyi Si", "Chenxu Yang", "Yifei Li", "Luozheng Qin", "Junhao Zhou", "Dingyu Yao", "Jun Zhang", "Chuanyu Qin", "Zhiqiu Zhang", "Yuandong Yang", "Yuqi Xu", "Tianyu Zhang", "Hongcheng Guo", "Jiaqi Wang", "Nan Duan", "Limin Wang"]
date: "2026-10-12T20:00:00.000Z"
score: ""
guid: "2610.18615"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18615.png"
generated: "2026-10-14T19:00:21+05:30"
---

Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.
