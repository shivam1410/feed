---
title: "VideoGen-Agent: Reinforcing Video Generation Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.24997"
authors: ["Binxu Li", "Haoyi Duan", "Yuhui Zhang", "Yaohui Zhang", "Zihao Lin", "Kaituo Feng", "Suozhi Huang", "Xiangyi Li", "Yu Li", "Chunyuan Li", "Shilong Liu", "Mengdi Wang"]
date: "2026-09-20T20:00:00.000Z"
score: 60
guid: "2609.24997"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.24997.png"
generated: "2026-09-23T19:07:00+05:30"
---

Recent advances in video generative models have enabled high-fidelity, temporally coherent video generation. However, these models often struggle to satisfy prompts requiring specialized knowledge, specific identities, physical consistency, or ordered events. In this paper, we present VideoGen-Agent, a multimodal agent trained through multitask agentic reinforcement learning to use external tools for video generation. The agent coordinates augmentation, generation, and verification tools through multi-turn interactions, using the prompt and intermediate observations to guide its decisions. We train a shared policy on a category-balanced dataset spanning six tasks. Supervised fine-tuning on teacher-generated trajectories establishes tool-use behavior, which is then refined through reinforcement learning. A category-aware hybrid reward evaluates tool-call validity, task-appropriate tool use, and generated video quality. We further introduce VABench, a held-out benchmark of 600 prompts covering procedural knowledge, single- and multi-entity identity preservation, physical consistency, scene composition, and multi-shot temporal structure. On VABench, VideoGen-Agent improves over its base text-to-video generator by 19.1 points, from 56.5 to 75.6. Upgrading the generation tools further raises the score to 86.1 without additional agent training. Human raters prefer the upgraded configuration over the strongest standalone baseline in 84.3% of comparisons. These results support learning tool use across video-generation tasks and show that the trained agent can benefit from subsequent advances in generation tools.
