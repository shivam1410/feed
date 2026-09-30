---
title: "VoxMem: Benchmarking Multimodal Memory in Large Audio Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32607"
authors: ["Yang Xiao", "Vidhyasaharan Sethu", "Eun-Jung Holden", "Ting Dang"]
date: "2026-09-25T20:00:00.000Z"
score: 70
guid: "2609.32607"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32607.png"
generated: "2026-09-30T19:08:55+05:30"
---

Spoken conversational systems must recover information from prior interactions (i.e., memory), yet relevant information in speech extends beyond what was said to who said it, how it was spoken, and what was audible, information that exists only in the audio signal and cannot be recovered from a transcript. Beyond what to remember, memory also demands diverse operations: retrieving a single fact, integrating evidence across turns, tracking an evolving state. Real interactions further unfold across sessions, meaning information accumulates across distinct episodes rather than a single continuous recording. Existing benchmarks fall short on all three dimensions: they focus primarily on lexical content, adopt limited and ad hoc memory operations, and treat memory as a single-session problem. We argue that principled memory evaluation requires jointly characterizing the acoustic evidence to be retained and the operations applied to it, and introduce a taxonomy along these two axes. Building on this taxonomy, we present VoxMem: 3,196 evaluation instances over 34,743 spoken sessions (177 hours) crossing four acoustic evidence types (speech semantics, speaker identity, paralinguistic cues, environmental sound) with four memory operations (information extraction, multi-session reasoning, temporal tracking, and answer refusal), grounded in multi-session histories and stratified across context budgets from 8K to 64K tokens. Evaluating 15 LALMs, no model exceeds 40% at 32K. Models retain what was said far better than who said it, how, or what was audible, a gap that widens for complex operations, grows with history length, and manifests as qualitatively distinct failure modes across evidence types. VoxMem aims to provide a foundation to measure and drive progress on the full scope of spoken conversational memory.
