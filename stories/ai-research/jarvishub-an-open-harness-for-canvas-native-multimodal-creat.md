---
title: "JarvisHub: An Open Harness for Canvas-Native Multimodal Creative Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23588"
authors: ["Yunlong Lin", "Zixu Lin", "Zhaohu Xing", "Biqiang Li", "Chenxin Li", "Haonan Wang", "Haitao Wu", "Hengyu Liu", "Jianghai Chen", "Kaituo Feng", "Kaixin Li", "Shawn Chen", "Shijue Huang", "Sixiang Chen", "Tsung-Yi Ho", "Wenxuan Huang", "Xiangyan Liu", "Xiaomeng Hu", "Xuanhua He", "Yan Sun", "Yunqing Zhao", "Zhiqin Yang", "Zehan Wang", "Zhengyang Tang", "Tianyu Pang", "Xiangyu Yue"]
date: "2026-07-25T20:00:00.000Z"
score: 75
guid: "2607.23588"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23588.png"
generated: "2026-07-28T19:07:22+05:30"
---

Creative AI is moving from single-step asset generation toward long-horizon multimodal production. Although recent generative models can synthesize high-quality images, videos, audio clips, UI elements, storyboards, slides, and other creative assets, real-world creative work requires more than isolated prompt-output interactions. It involves references, drafts, alternatives, edits, failed attempts, version relations, tool actions, evaluation signals, and human feedback, which together form an evolving project state. Existing prompt-based, chat-based, and node-based generation systems only partially support this state, as they often discard intermediate context, rely on linear conversations, or require manually specified workflows. Recent commercial systems indicate a shift toward agent-assisted creative production, but their closed architectures make it difficult to study how agents represent context, choose tools, revise artifacts, recover from failures, and maintain consistency over time. To address this gap, we introduce JarvisHub, a canvas-native creative agent harness for long-horizon multimodal creation. JarvisHub treats an editable canvas as the user workspace, the agent's external memory, action space, and shared project state, representing multimodal artifacts, dependencies, versions, and feedback as typed canvas nodes and links. Through a three-layer architecture of canvas state, protocol bridge, and agent runtime, JarvisHub enables agents to act within an inspectable and editable creative state. This design moves creative agents beyond isolated tool use toward sustained, human-steerable creative automation, where agents can progressively plan, generate, revise, and organize multimodal projects while users remain able to inspect, guide, and intervene throughout the process.
