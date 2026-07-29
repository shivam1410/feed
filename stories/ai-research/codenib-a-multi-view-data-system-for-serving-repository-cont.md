---
title: "CodeNib: A Multi-View Data System for Serving Repository Context to Coding Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25431"
authors: ["Zhongming Yu", "Hengjia Yu", "Boqin Yuan", "Shuting Zhao", "Yizhao Chen", "Aryan Dokania", "Mihir Jagtap", "Jiayu Chang", "Yitong Ma", "Yash Jayswal", "Wentao Ni", "Hejia Zhang", "Zhaoling Chen", "Gangda Deng", "Jishen Zhao"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.25431"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25431.png"
generated: "2026-07-29T16:31:06+05:30"
---

Coding agents repeatedly search, navigate, and retain context from evolving repositories, but disconnected indexes, language servers, and task-local histories force repeated discovery and obscure lifecycle costs. CodeNib builds reusable lexical, dense, and structural views per repository commit, maps outputs to repository-relative source ranges, maintains selected views across edits, and serves ranked search, symbol navigation, and bounded context through one runtime.
  Across 100 snapshots, we map quality-cost frontiers across the repository-context lifecycle. When outputs match an independent rebuild, graph and vector updates are 8.7times and 25.4times faster at the median. On the static-navigation subset matching normalized live-server locations (63% of 1,000 requests), the median per-request live/static latency ratio is 4.7times. Across five models, selected context policies preserve localization with 50--87% fewer trajectory tokens than paired grep/read. Together, these results support multi-view repository-context serving with explicit, operation-specific validity boundaries.
