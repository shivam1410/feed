---
title: "ReflectWorld-MM: An Entity-Oriented Multimodal Memory System for Open-Ended Video Streams"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.09759"
authors: ["Xiaokang Ma", "Yifan Sun", "Zhihong Jin", "Jie Gu", "Yudong Luo", "Shenyi Shao", "Chu Tang", "Jingmin Chen", "Li Pu"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.09759"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.09759.png"
generated: "2026-07-23T04:03:36+05:30"
---

Building assistants that can continually watch the world, remember what they see, and reason over their accumulated experience is a long-standing goal, and recently multimodal agents equipped with long-term memory over video streams have attracted increasing interest. Unfortunately, existing systems either keep their memory inside the model context or in a flat feature store, and organize it around frames rather than around the persistent entities a stream is really about, which confines them to bounded videos and weakens their ability to track who and what reappears over time. In this paper, we propose ReflectWorld-MM, an entity-oriented multimodal memory system for open-ended video streams. It consists of three parts. The first is a perception front-end that turns an audiovisual stream into entity-resolved observations under a bounded short-term memory. The second is a hierarchical long-term memory, grounded in human memory theory, that couples a multi-scale episodic memory, an evolving entity-centric semantic memory, and a procedural memory. The third is a complete realization, built for real-world operation, that ingests arbitrary streams and plugs into off-the-shelf assistants. Across six long-video and lifelong-memory benchmarks, ReflectWorld-MM achieves the best accuracy on all six, outperforming strong memory agents and a frontier model.
