---
title: "Some Memories Must Fade: Persistence and Decay of User Memories in Model Parameters"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25235"
authors: ["Sanidhya Vijayvargiya, Rahul Lokesh"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.25235v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Parametric memory allows Large Language Models to internalize knowledge directly into their weights, offering a potentially powerful alternative to retrieval-based memory (RAG). However, existing approaches to parametric memory are difficult to deploy as they largely mirror the Continual Learning (CL) objective of retaining information indefinitely. This is neither sustainable nor sufficient for a memory system, which must govern knowledge across its lifecycle by retaining stable facts, reinforcing recurring observations, updating changed beliefs, and allowing transient information to fade. We propose a system for parametric memory management consisting of a memory substrate (handling information storage and forgetting) and a learned policy (what to remember, how deeply, and for how long). Our substrate is a fixed-capacity LoRA adapter that consists of k-hot rank combinations which store facts without catastrophic interference and maintain an independently controlled temporal decay, enabling outdated information to fade while long-term facts persist. On this substrate, we train a lightweight controller that governs each incoming user event to ensure the memory system reflects the user's true, updated belief state. To evaluate how memory systems manage user memory, we introduce a controlled dataset of long-horizon user trajectories with varying persistence of facts based on changing belief states and user-behavioral shifts, and probe queries that test recall while information is valid and abstention after it expires. Our policy learns to effectively manage user memory over its entire lifecycle, balancing recall and abstention to achieve 86% of oracle performance, unlike CL and RAG baselines that primarily default to one of the two behaviors. By providing the first system to manage memory directly in model weights, this work establishes a foundation for long-horizon parametric memory.
