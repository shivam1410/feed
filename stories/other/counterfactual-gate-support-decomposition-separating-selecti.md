---
title: "Counterfactual Gate-Support Decomposition: Separating Selection from Redistribution in Training-Data Filtering"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19343"
authors: ["Hyojung Han, Jongmin Kim, Seung-Hun Jeon"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19343v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

A training-data quality gate changes both which examples survive within regions of the input space and how training mass is distributed across those regions, so a gate-versus-random comparison does not isolate these mechanisms. We introduce Counterfactual Gate-Support Decomposition (CGSD), a four-arm, budget-matched design that crosses gate eligibility with support distribution and decomposes the observed gate effect into within-support selection, between-support redistribution, and their interaction. The practical constraint is finite-pool realizability: we characterize mass and token-assembly conditions under which the required arms can be constructed, together with a support-extinction case in which the ordinary design is undefined. On Korean-English and Korean-Japanese retrieval, the mean within-support selection component is the only one that exceeds its calibrated null band (+29.7 and +5.6 holdout items; 30/30 positive replicates), decisively in Korean-English and marginally in Korean-Japanese; redistribution and interaction remain unresolved at the available power. The same pattern holds for a second, unrelated gate family -- a model-confidence threshold rather than a deterministic verifier -- judged against its own null (+27.3 items, 9/9 positive), so the result is not a property of one gate's mechanism. On a mathematics gate, zero-eligibility supports leave the ordinary design undefined at every budget, while the extended design is constructible only inside narrow budget bands that an exhaustive scan locates and that the natural operating point misses -- the assembly condition separating a property of the pool from a limitation of the packer. CGSD therefore returns a decomposition, a constructible-but-underpowered design, or an explicit non-constructibility result, and says which; it prevents support redistribution from being silently interpreted as sample-level gate quality.
