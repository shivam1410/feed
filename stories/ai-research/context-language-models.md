---
title: "Context Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37725"
authors: ["Rulin Shao", "Shannon Zejiang Shen", "Junjie Oscar Yin", "Yuetai Li", "Minheng Wang", "Hamish Ivison", "Radha Poovendran", "Nathan Lambert", "Teng Xiao", "Mike Lewis", "Wen-tau Yih", "Luke Zettlemoyer", "Pang Wei Koh"]
date: "2026-09-28T20:00:00.000Z"
score: 84
guid: "2609.37725"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37725.png"
generated: "2026-09-30T19:08:55+05:30"
---

We introduce Context Language Models (CLMs), language models that natively manage their own context. We implement this by treating the context as a file and allowing the model to make unrestricted updates to this file. This allows the model to learn what is most important to maintain in context, and naturally extends to multi-agent systems where multiple agent contexts coexist as files. Building CLMs zero-shot with existing models outperforms SOTA context management strategies across a variety of tasks: 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus, 5% higher scores with 59% fewer FLOPs on 12-hour EdgeBench, and 65% greater improvement with the same compute on a 24-hour multi-repository agent-swarm task. Moreover, by shifting context management from external harness control to intrinsic model behavior, CLMs naturally enable both in-context and parametric learning of context-management strategies. We show that CLMs can be steered with natural-language instructions evolved through a standard skill-optimization loop, improving held-out accuracy by up to 35.9 points on a context-management task while reducing compute. We also introduce an online reinforcement learning method for CLMs, improving Qwen3.5-9B performance on BrowseComp-Plus by 47.6% while using 12% fewer FLOPs. Finally, we co-design Suffix Cache Reuse for CLM serving, further reducing server-side compute by 35% relative to standard SGLang at matched performance.
