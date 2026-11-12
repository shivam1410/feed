---
title: "Read Less, Solve More: Token-Efficient Sparse Reading of External Content for AI Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.22237"
authors: ["Zedong Liu", "Jiaan Wu", "Xinyang Ma", "Le Xu", "Kai Wang", "Yuanchao Hu", "Dingwen Tao", "Guangming Tan"]
date: "2026-11-06T19:00:00.000Z"
score: ""
guid: "2608.22237"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.22237.png"
generated: "2026-11-12T19:00:28+05:30"
---

Web-facing AI agents repeatedly access webpages, documents, repositories, and tool responses, yet reading interfaces often expose entire objects when only sparse evidence is needed. This over-reading increases token and latency costs and can dilute relevant evidence. We present SparseRead, a reusable reading control layer that governs content admission without modifying the agent model. Its Read Intent Protocol tracks evolving needs and source coverage; Adaptive Reader Backends select how evidence is located and exposed; and the Budgeted Read Gate bounds cumulative raw exposure per episode with faithful full-view fallback. A unified Reader interface supports interchangeable evidence acquisition across heterogeneous resources. Across six models, including Claude Opus 5, and five scenarios, SparseRead reduces total tokens by up to 92.9% and wall time by up to 89.0%, preserving or improving task quality in 97% settings. On Web deep-search tasks, it reduces tokens by 31.0--43.0% and task completion time by 23.0--37.0%. Ablations validate the three designs, while integration with three agent frameworks demonstrates portability.
