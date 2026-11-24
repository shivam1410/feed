---
title: "RUIBench: What Makes a Good Robot-Use Interface?"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.31115"
authors: ["Yanzhe Chen", "Zhijun Cao", "Zechen Bai", "Wenzheng Zeng", "Kevin Yuchen Ma", "Yiqi Lin", "Guoqiang Liang", "Xiaokang Liu", "Ke Sun", "Kevin Qinghong Lin", "Mike Zheng Shou"]
date: "2026-11-22T19:00:00.000Z"
score: 40
guid: "2611.31115"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.31115.png"
generated: "2026-11-24T19:04:06+05:30"
---

Foundation models can reason about complex physical tasks, yet translating this intelligence into reliable robot execution remains challenging. We argue that a critical, often overlooked factor is the robot-use interface (RUI), which determines how agents express and execute physical actions. To systematically study its impact, we introduce RUIBench, comprising 30 manipulation tasks across five suites spanning world knowledge, in-context learning, discovery, dynamic interaction, and contact-rich manipulation. We further develop RUIKit, a unified framework that crosses six action abstractions with two interaction forms, yielding 13 interfaces under shared perception and control. In simulation, changing only the RUI shifts a frontier agent's success rate from 45% to 81%, and that of a fine-tuned 4B model from 13% to 47%. Our analysis reveals that effective interfaces reduce unnecessary decisions while preserving essential feedback, with their benefits shaped by agent behavior and physical uncertainty. We further uncover a verification gap, where agents frequently declare success despite observable failures, revealing the need for task-level verification beyond individual actions. Together, these findings establish RUI design as a critical factor in embodied agent reliability.
