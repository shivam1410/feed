---
title: "ICAE-Bench: Evaluating Coding Agents as Interactive Project Builders"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21217"
authors: ["Zhongyuan Peng", "Dan Huang", "Chuyu Zhang", "Caijun Xu", "Changyi Xiao", "Shibo Hong", "David Lo", "Lin Qiu", "Xuezhi Cao", "Jiyuan He", "Yixin Cao"]
date: "2026-07-22T20:00:00.000Z"
score: 68
guid: "2607.21217"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21217.png"
generated: "2026-07-25T21:42:33+05:30"
---

The recent emergence of vibe-coding workflows is changing what coding agents are expected to do. Instead of merely completing code under fully specified instructions, agents are increasingly expected to transform incomplete product intent into working software by combining various abilities including planning, requirement clarification, tool use, debugging, and repository-level construction. Yet existing benchmarks have not fully caught up with this shift, evaluating agents on static, fully specified tasks.
  In this paper, we introduce ICAE-Bench, a benchmark for evaluating coding agents under interactive project-building settings. The basic idea is to start from a fuzzy product requirement, simulating the dynamic paradigm with an automated User Agent. To make this setting both realistic and evaluable, ICAE-Bench introduces three key designs. First, to avoid the ambiguity of unconstrained fuzzy requirements, each task derives ambiguity from a precise real open-source repository with executable behavior. Second, to ensure high-quality and reproducible user simulation, ICAE-Bench grounds interaction through User Agent Data, allowing the User Agent to reveal hidden constraints without inventing new requirements or leaking implementation artifacts. Third, to evaluate open-ended repositories fairly, ICAE-Bench uses standardized black-box tests together with multi-dimensional diagnostics, including functional correctness, semantic and API similarity, structural fidelity, design quality, and interaction quality.
