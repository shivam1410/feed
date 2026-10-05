---
title: "X-Tree: Tokenizing Reusable Experience for Efficient Agent Generalization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32993"
authors: ["Sitao Cheng", "Xunjian Yin", "Zhiyuan Sun", "Yuxuan Li", "Ruiwen Zhou", "Xiangru Jian", "Victor Zhong"]
date: "2026-09-25T20:00:00.000Z"
score: 77
guid: "2609.32993"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32993.png"
generated: "2026-10-05T19:10:08+05:30"
---

Multi-step agents are trained on flat action streams: SFT and RLVR weight every token uniformly and ignore the sub-procedures that recur across tasks, the hierarchy that lets humans plan top-down from reusable routines. This structure sits unused, and flat training uses each scarce trajectory less fully than its content allows. Recent agents do use that structure, but only as LLM-written skills in context, never in the weights, so their gains do not generalize beyond retrieval. We instead recover this hierarchy from the data itself and train on it, with no LLM calls. Following text tokenizers, which build a vocabulary by counting alone, we score action spans by reusability and merge canonicalized actions into a reusable eXperience tree (X-Tree). Each X-Tree node captures how a frequent and success-bearing skill is composed from sub-skills, guiding efficient generalization. We integrate X-Tree into three training settings: offline RL, with each node as a training instance; online RLVR, with an adaptive skill bonus; and on-policy self-distillation, with X-Tree as the self-teacher's privileged context. Across WebArena, ScienceWorld, and WebShop at three model scales, X-Tree improves over standard recipes at matched data and budget by up to 4.5% SR on WebArena, 5.8% SR on ScienceWorld and 4.1% success on WebShop. Matched analyses attribute the gains to the X-Tree structure and the three integrations.
