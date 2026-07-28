---
title: "Multi-Turn On-Policy Distillation with Prefix Replay"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.04763"
authors: ["Baohao Liao", "Hanze Dong", "Christof Monz", "Xinxing Xu", "Li Dong", "Furu Wei"]
date: "2026-07-15T20:00:00.000Z"
score: 70
guid: "2607.04763"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.04763.png"
generated: "2026-07-28T19:07:22+05:30"
---

We study on-policy distillation (OPD) for agentic tasks, where an LLM agent interacts with an environment over multiple turns and a student imitates a teacher over these multi-turn interaction histories. Fully online OPD is costly because each update requires fresh student rollouts through the environment and teacher queries at visited histories. We propose Replayed-Prefix On-Policy Distillation (ReOPD), an off-environment alternative that reuses pre-collected teacher trajectories as replayed prefixes: the student acts at selected steps, while the teacher provides dense per-step supervision without executing new environment interactions. We show that multi-turn OPD introduces a prefix trap: making histories more student-on-policy improves relevance to the student, but can query the teacher on histories where its target is unreliable. This creates a two-sided distribution shift between student occupancy and teacher reliability. ReOPD addresses this by treating multi-turn OPD as a reliability-aware prefix distribution design and implements it with a simple step-decaying sampling schedule that emphasizes early, lower-shift prefixes. Across mathematical reasoning with Python and search environments over multiple teacher and student model scales, ReOPD preserves or improves OPD-level accuracy, uses zero tool calls during student training, and is at least 4times faster per rollout than OPD. ReOPD therefore turns expensive agent-environment interaction into a reusable offline resource, enabling scalable distillation across tools, tasks, and environments.
