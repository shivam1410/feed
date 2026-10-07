---
title: "Understanding and Enhancing Backdoor Persistency in LLM Agent Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.07510"
authors: ["Qiusi Zhan", "Nian Lyu", "Stephanie Ding", "Arnav Mehta", "Xander Davies", "Daniel Kang"]
date: "2026-10-04T20:00:00.000Z"
score: 70
guid: "2610.07510"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.07510.png"
generated: "2026-10-07T19:11:01+05:30"
---

Developers can build LLM agents by adapting third-party models through benign post-training. We study a supply-chain threat in which an attacker supplies a model with a backdoor: hidden behavior that produces malicious outputs when a particular input pattern appears. Focusing on software-engineering agents, we ask whether such backdoors survive the developer's supervised fine-tuning (SFT) and subsequent task-level reinforcement learning (RL). We observe that benign SFT substantially reduces attack success, but subsequent RL often preserves the residual behavior and sometimes even increases attack success. Our analysis of backdoor erosion during SFT identifies two factors that may favor survival: initial backdoor strength and gradient compatibility with benign training. These factors motivate PersistBD, which refines an already-backdoored model before release to improve its persistency through the benign post-training process. On Qwen2.5-Coder-7B, PersistBD raises attack success from 20% to 74% after SFT and from 20% to 76% after SFT-RL, while maintaining comparable benign task performance. Together, our results show that backdoors can remain active through benign post-training and that adversaries can deliberately increase their persistence. This highlights a supply-chain risk for AI developers and motivates stronger techniques for detecting and mitigating inherited backdoors when adapting third-party models into agents. Our code is available at https://github.com/uiuc-kang-lab/PersistBD.
