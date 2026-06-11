---
title: "IAPO: Input Attribution-Aware Policy Optimization for Tool Use in Small Multimodal Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11652"
authors: ["Yifan Yang, Zhen Zhang, Jiayi Tian, Liyan Tan, Zheng Zhang"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.11652v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11652v1 Announce Type: new Abstract: This paper investigates reinforcement learning (RL) methods for improving tool-calling capabilities in multimodal small language model (SLM) agents. While existing works have explored various reward designs to improve agentic tool-calling ability, these approaches face inherent limitations for SLM training, especially under multimodal scenarios. First, many existing methods evaluate tool use correctness through exact matching against certain ground-truth or predefined formats. However, this assumption is often unsuitable for multimodal tasks, where multiple tool use paths may be valid and annotated tool trajectories are typically unavailable. Second, such sparse and brittle binary rewards provide little guidance on how to improve the underlying decision process, making them particularly difficult for multimodal SLM to learn from. To address these issues, we propose Input Attribution-Aware Policy Optimization (IAPO), an RL algorithm for improving tool use in multimodal SLM by aligning the model's attribution across input components with that of a stronger teacher. Experiments on Qwen2.5-VL-3B show that the proposed method improves visual question answering accuracy by an average of 3% across six test sets compared with existing visual tool use work, by helping the model attend to the most relevant input evidence.
