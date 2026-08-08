---
title: "AVE-Compass: Towards Holistic Evaluation for Audio-Video Editing Abilities"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.24821"
authors: ["Yuqing Wen", "Yukai Huang", "Qianqian Xie", "Jiangtao Wu", "Yibin Lin", "Yikai Gu", "Jialu Chen", "Yuanxing Zhang", "Jiaheng Liu"]
date: "2026-07-16T20:00:00.000Z"
score: 60
guid: "2607.24821"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.24821.png"
generated: "2026-08-08T19:05:03+05:30"
---

While instruction-based video editing has advanced rapidly, real-world videos contain tightly coupled audio and visual signals, and editing one modality often requires coordinated changes in the other. Existing benchmarks primarily evaluate visual transformations on silent clips or isolated audio editing, leaving complex audio-visual editing and cross-modal consistency underexplored. We introduce AVE-Compass, a comprehensive benchmark with 145 curated source videos, 196 audio-visually coupled editing instructions, and 2,688 fine-grained checklist items. It evaluates Instruction Following, Fidelity Preserving, Realism, and Editing Intent through checklist-based MLLM judging and a dedicated realism rubric, complemented by automated cross-modal, video, and audio metrics. Extensive evaluation shows that state-of-the-art models still struggle to execute cross-modal instructions while preserving non-target content. We further propose AVE-Agent, a modular agent framework that decomposes complex instructions into dependent subtasks and iteratively improves editing results through self-reflection and evaluator feedback. AVE-Agent improves instruction execution, Fidelity Preserving, and audio-visual alignment in joint editing while maintaining competitive perceptual quality.
