---
title: "Beyond the Query: Do Retrieval Signals Improve Adaptive Multimodal RAG Routing?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12437"
authors: ["Qiaomu Li, Qiuyuan Zhang, Nong Ming"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12437v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12437v1 Announce Type: new Abstract: Adaptive RAG often uses retrieval-time signals to decide whether another retrieval, reranking, or multimodal step should run. We ask whether these signals add routing value once the query itself is already known. Across document, audio, and video RAG, we compare matched query-only and query+retrieval routers while holding the optional actions, router family, training procedure, and evaluation fixed. On the held-out final evaluation, adding the tested retrieval signals does not produce a reliable routing improvement over the query-only baseline. Some retrieval signals are associated with whether a later step will help, but that predictability does not consistently lead to bet- ter RUN/SKIP decisions. The main lesson is therefore methodological: retrieval-state features should not be credited with routing value unless they improve over a matched query-only control. Our results do not show that routing or retrieval state is generally useless; they show that the incremental value of retrieval signals must be demonstrated rather than assumed.
