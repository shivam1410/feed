---
title: "AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.26510"
authors: ["Guoxin Chen", "Shuang Sun", "Fanzhe Meng", "Xinyu Tang", "Ruihua Song", "Wayne Xin Zhao"]
date: "2026-11-18T19:00:00.000Z"
score: 40
guid: "2611.26510"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.26510.png"
generated: "2026-11-20T19:04:50+05:30"
---

Task success alone does not specify which behaviors post-training should reinforce. Even successful teacher trajectories can contain unsupported assumptions, unproductive repetition, or superficial verification. We propose Skill-FT (Skill-Guided Fine-Tuning), which uses natural-language skills to suppress undesirable habits and elicit underrepresented effective behaviors during teacher rollouts, then fine-tunes a target model on the resulting trajectories. We introduce AutoMaster, an autonomous post-training system in which an LLM agent develops these interventions through trajectory analysis, skill design, data selection, and feedback from rollouts and target-model evaluation. Across Terminal, Search, and software engineering tasks with 4B and 9B target models, AutoMaster improves mean performance over Vanilla SFT on successful unguided teacher trajectories by 1.42-8.99 percentage points, with the teacher, task pool, training set size, and SFT recipe held fixed. Together with the ablations and trajectory analyses, these results suggest that behavioral shaping can make a fixed model a more effective teacher. We further find that retaining skill instructions during SFT yields higher mean performance than removing them across all six settings, despite their absence at evaluation and identical supervised outputs. These findings suggest that preserving skill context as part of a training demonstration can support better behavioral internalization.
