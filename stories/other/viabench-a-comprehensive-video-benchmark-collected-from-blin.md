---
title: "VIABench: A Comprehensive Video Benchmark Collected from Blind Individuals for Visual Impairment Assistance"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14660"
authors: ["Yunfeng Liu", "Yuandong Yang", "Jiarui Han", "Zhenpeng Huang", "Yuqing Tang", "Xiangyu Zeng", "Gangshan Wu", "Limin Wang"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.14660"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14660.png"
generated: "2026-07-19T19:52:10+05:30"
---

Visually impaired individuals (VIIs) encounter significant daily challenges due to limited access to visual information. Although Multimodal Large Language Models (MLLMs) have achieved impressive results on general vision and language tasks, their practical utility in real-world blind assistance still remains largely underexplored. To fill this gap, we introduce VIABench, a comprehensive video benchmark specifically designed to evaluate MLLMs in Visually Impaired Assistance scenarios using first-person videos recorded or shared by VIIs themselves. VIABench defines three core tasks, each targeting a distinct requirement in visual assistance. Proactive Reminder: Assesses the model's ability to interpret ongoing video content while proactively anticipating and verbally describing upcoming navigation-critical events; Visual Question Answering (VQA): Evaluates the model's capacity to answer user-posed questions about the environment or objects within the video; Vision-Guided Interaction: Tests context-aware reasoning to accomplish intentional interactions between user and environment. To ensure a robust and fair evaluation, we propose a rigorous benchmarking pipeline that supports both online (real-time) and offline settings. Our experiments demonstrate that current MLLMs still struggle to deliver comprehensive support for VIIs, especially in the Proactive Reminder task, which demands accurate anticipation and real-time responsiveness. We hope VIABench will drive future research toward developing customized MLLMs for real-world assistance, ultimately improving navigation and interaction experiences for visually impaired individuals. Code and data will be released at https://github.com/MCG-NJU/VIABench.
