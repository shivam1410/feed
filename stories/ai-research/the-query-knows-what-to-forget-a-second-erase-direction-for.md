---
title: "The Query Knows What to Forget: A Second Erase Direction for Linear Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13668"
authors: ["Dhruman Gupta, Aritra Das, Debayan Gupta"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.13668v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13668v1 Announce Type: new Abstract: Linear attention keeps a state of fixed size. At long context, many stored items share this state, and interference between them degrades retrieval. Gated DeltaNet-2 (GDN-2), like every delta-rule model before it, derives its erase vector from the key of the current token. However, the interference in its reads is measured through the query, and the erase step cannot reach it. We introduce the Query-derived Erase Direction (QED). QED adds a second erase direction derived from the query and orthogonal to the key. In the fast-weight view, a key-directed delta edit cannot change the key-orthogonal part of a read. It uses the editable part to cancel old-state content measured along the query. It also improves retrieval at every length past the training window, and it about doubles the usable context length on S-NIAH-1.
