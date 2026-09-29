---
title: "Beyond Teacher Assignment: Domain-Normalized Multi-Teacher On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35347"
authors: ["Xin Li", "Hao Jiang", "Xin Gao", "Annan Wang", "Yuchen Xie", "Jinghao Guo", "Xingwei Qu", "Yichi Zhang", "Chau Yuen"]
date: "2026-09-27T20:00:00.000Z"
score: 64
guid: "2609.35347"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35347.png"
generated: "2026-09-29T19:09:35+05:30"
---

Reinforcement learning can turn one language model into several specialists, each excellent at a single skill such as mathematics, coding or following instructions, but users need one model with all of these skills. Multi-teacher on-policy distillation (MOPD) merges them by letting the specialists teach one student: the student answers each prompt, and the specialist for that prompt's domain gives feedback on every token. This routing decides which specialist teaches, but not how strongly its feedback moves the shared student. In Qwen3.5 models at three sizes, we find that MOPD's student does not beat one taught by the best single specialist and gains little of the mathematics specialist's advantage. The feedback is unbalanced: instruction-following feedback is several times more spread out than mathematics feedback and dominates the student's updates. We propose Domain-Normalized MOPD (DN-MOPD), which keeps the routing and rescales each domain's feedback by its measured spread. On six public benchmarks, DN-MOPD improves the average score over MOPD at every size, across three random seeds and under two answer-length limits, and recovers most of the lost mathematics gain. Controls with fixed domain weights show that the gain comes mainly from turning down instruction-following feedback rather than turning up mathematics alone, and that fixed weights close to those DN-MOPD measures perform comparably. Combining specialists therefore requires deciding not only which one teaches, but also how strongly its feedback counts.
