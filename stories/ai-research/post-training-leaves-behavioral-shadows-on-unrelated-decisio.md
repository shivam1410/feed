---
title: "Post-Training Leaves Behavioral Shadows on Unrelated Decisions"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29233"
authors: ["Ziyang Zhang", "Yubin Jing", "Yuanhao Zeng", "Yuyao Li", "Haofan Wang", "Yichen Gong"]
date: "2026-09-23T20:00:00.000Z"
score: 65
guid: "2609.29233"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29233.png"
generated: "2026-09-29T19:09:35+05:30"
---

We find that language models can transfer capabilities through task-unrelated text. Post-training typically improves language models using task-specific data. Prior work on subliminal learning shows that information about these updates can pass through unrelated generations, but has largely focused on traits or preferences using extensive teacher outputs. We introduce Active Taskless Distillation (ATD), which achieves capability transfer using only a single word from the teacher per prompt. ATD probes the behavioral shadow of post-training by selecting prompts where the teacher and student's shared public ancestor is nearly indifferent between two ordinary words. A student initialized from this ancestor learns solely from the resulting prompt-word pairs, without target-task examples, teacher logits, or teacher parameters. In the primary coding experiment with Qwen2.5-1.5B, 5,664nses yield a 5.34 pp gain on HumanEval+ over an exact nuisance-matched control thadisrupts prompt-resperiments showtransfer in scientific knowledge, commonsense reasoning, and reading comprehensins across additional model generations, sizes, and families. Functional analyses show that the learned sid composable, andthat its strength tracks the teacher's update strength.
