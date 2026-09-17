---
title: "In-Context Robot Learning with VLM Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19138"
authors: ["Dongzhou Cheng", "Taoran Yi", "Ye Fang", "Xingwu Zhang", "Fan Feng", "Yixuan Li", "Gengxiong Zhuang", "Rongze Wang", "Shuai Yang", "Wei Song", "Weizhi Xue", "Minyan Wu", "Jie Gui", "Jiaqi Wang", "Tong Wu"]
date: "2026-09-15T20:00:00.000Z"
score: ""
guid: "2609.19138"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19138.png"
generated: "2026-09-17T19:00:24+05:30"
---

Enabling robots to adapt to unfamiliar environments as readily as humans remains a moonshot goal of embodied AI. No finite collection of demonstrations can cover every task and situation a robot will encounter, making the ability to learn from context at deployment essential for generalization. Such in-context learning (ICL), however, remains largely beyond the reach of existing robotic policies. The broad agentic capabilities of commercial vision-language models (VLMs), such as GPT-6 Astra, raise a compelling question: can these models learn from demonstrations, examples, and interaction feedback, then translate that information into executable and verifiable robot behavior from a new initial state without gradient updates or persistent changes to task-specific parameters? We introduce GPT-Policy, a general-agent framework for in-context robot learning. GPT-Policy integrates a context compiler that preserves task-relevant visual transitions, a VLM that proposes robot-tool actions, and a constrained controller that verifies and executes each action and reports its outcome. We evaluate its reliability and limitations through task success and efficiency metrics, matched comparisons across models, and controlled context ablations. In real-robot trials, human video demonstrations improve task completion even without robot action labels, while aligned action references yield further gains on contact-sensitive tasks. These findings position GPT-Policy as a step toward robot adaptation through in-context learning, providing an empirical foundation for translating the general-purpose capabilities of VLMs into physical behavior and clarifying the challenges that must be overcome for reliable deployment.
