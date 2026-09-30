---
title: "ANTMAN: Adaptive Need Tracking for Multi-Agent Navigation in Large Information Spaces"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33326"
authors: ["Jerry Wang", "Haibo Jin", "Xiaopeng Yuan", "Peng Kuang", "Haohan Wang"]
date: "2026-09-26T20:00:00.000Z"
score: 82
guid: "2609.33326"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33326.png"
generated: "2026-09-30T19:08:55+05:30"
---

Information-seeking agents increasingly operate over information spaces that are too large to process exhaustively. Yet many multi-agent systems organize computation around static partitions of the available space, causing coordination to grow with how information is segmented rather than with what the query still requires. We introduce ANTMAN, an adaptive coordination framework that treats evolving unresolved information needs as the unit of runtime coordination. ANTMAN maintains a revisable Need Graph that tracks unresolved requirements, accumulated evidence, prior attempts, and search progress, and uses this state to control worker selection, routing, and task-local recovery as new evidence is discovered. By separating the coordination policy from substrate-specific search interfaces, the same need-conditioned mechanism can operate across different information spaces. Experiments across multi-document question answering, controlled long-context scaling, and realistic structured navigation show that ANTMAN remains effective across settings, including when execution is delegated to substantially smaller worker models. Under a 16x increase in searchable context, ANTMAN increases active coordination by only 1.23x, compared with more than 15x for partition-driven baselines, while preserving strong answer quality.
