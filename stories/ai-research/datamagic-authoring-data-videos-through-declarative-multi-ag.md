---
title: "DataMagic: Authoring Data Videos through Declarative Multi-Agent Orchestration"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33403"
authors: ["Yupeng Xie", "Zhenyang Wang", "Liangwei Wang", "Jiayi Zhu", "Zhouan Shen", "Yuyu Luo"]
date: "2026-09-26T20:00:00.000Z"
score: 78
guid: "2609.33403"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33403.png"
generated: "2026-10-02T21:40:09+05:30"
---

Data videos communicate data insights through dynamic charts, voice narration, and synchronized animations, and have become a widely adopted form of data storytelling. However, producing them requires expertise in data analysis, narrative design, and video editing. Static visualization tools lack narrative and animation capabilities; authoring tools rely on pre-prepared charts rather than raw data; and pixel-level models generate videos end-to-end but cannot guarantee data accuracy or provenance. End-to-end automatic generation faces two core challenges: how to uniformly represent charts, narration, and animations together with their temporal relationships, and how to efficiently search a vast design space for narrative-coherent compositions. We present DataMagic, which authors data videos from raw tabular data through declarative multi-agent orchestration. First, the declarative specification DVSpec unifies charts, narration, and animations with data-bound references and declarative synchronization, ensuring data provenance and automatic audio-visual alignment. Second, a "Generate-then-Orchestrate" multi-agent strategy generates candidate scenes in parallel and then optimizes narrative coherence through global orchestration. DVSpec provides a shared state for three complementary interaction modes, bridging full automation with fine-grained human control. Evaluations on 109 real-world samples show that even the most advanced LLM (e.g., GPT-5) achieves only 2.13/5 with execution success rates between 48.62% and 86.24%; DataMagic improves quality to 3.89 (+83%) with success rates above 95%, with the most significant gains in animation and narrative dimensions. A user study shows that, compared to a conversational LLM workflow, DataMagic improves creation efficiency (79.7% reduction in task time) and reduces perceived cognitive load. Project page: https://github.com/HKUSTDial/DataMagic.
