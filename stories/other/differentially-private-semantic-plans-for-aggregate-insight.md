---
title: "Differentially Private Semantic Plans for Aggregate Insight Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16283"
authors: ["Behrooz Razeghi"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16283v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16283v1 Announce Type: new Abstract: \texttt{URANIA} provides end-to-end differential privacy (DP) for summaries of data-dependent clusters. However, its cluster--keyword release does not directly provide collection-wide aggregates for semantic concepts defined independently of the protected corpus. Records may express several concepts, records expressing the same concept may be assigned to different clusters, and cluster identities need not correspond across analyses. Consequently, cluster-level statistics do not directly provide comparable measurements of predefined concepts across collections or repeated analyses. We introduce \texttt{DP-SPIN}, a trusted-curator framework for aggregate measurement and summarization over semantic concepts fixed independently of the protected target records. Each record is mapped to a bounded sparse nonnegative vector over these concepts, whose sum forms a semantic sketch. A differentially private mechanism releases a semantic plan containing admitted concepts and noisy masses; normalized semantic-support values and support bins are obtained by post-processing. For user-level privacy, each user's aggregate contribution is clipped to a fixed bound. The language model receives only the plan and fixed decoding instructions, while a public verifier checks concept mentions, reported values, comparisons, and rank claims against the released plan. The final summary is differentially private by post-processing. We establish record- and user-level DP guarantees under add/drop and replacement adjacency. We evaluate \texttt{DP-SPIN} under record-level privacy on CFPB complaint narratives, Amazon All Beauty reviews, and Yelp restaurant reviews, and under user-level privacy on Amazon and Yelp. We compare \texttt{DP-SPIN} with non-private plan and summary references, DP keyword and category histogram baselines, and a \texttt{URANIA}-style baseline with a fixed public keyword vocabulary.
