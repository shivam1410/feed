---
title: "Training-Free Lexical-Dense Fusion for Conversational-Memory Retrieval"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04194"
authors: ["Christian Lysenst{\\o}en"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.04194v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04194v1 Announce Type: new Abstract: Retrieving the few past turns that answer a new query across long multi-session histories is the retrieval bottleneck behind long-term conversational memory (LoCoMo, LongMemEval). Recent concurrent work, Nano-Memory, shows that scoring a session by the maximum query-turn similarity (late interaction, "Turn Isolation Retrieval") beats mean-pooled session embeddings. We do not claim that effect; we replicate it and ask what a training-free, CPU-only retrieval stage should add around it. We report four findings. (1) Fuse: score-level fusion of the late-interaction dense score with BM25, under a single leave-one-conversation-out weight, adds +8.8 to +17.2 points of LoCoMo Hit@1 over late interaction alone across six encoders (all p<1e-4), reaching Hit@1 0.752 / NDCG@5 0.829 (e5-large-v2), +11.2 pp over BM25. (2) An off-the-shelf web-search cross-encoder reranker over the fused top-10 hurts here, degrading Hit@1 by 6.9 pp (one reranker, one configuration). (3) A pooling-operator ablation shows top-k late interaction matches max-similarity, but a naive smooth-max (log-sum-exp) collapses for half the encoders. (4) The late-minus-early gap is large for all six encoders and tends to be larger for larger ones, while the marginal fusion gain shrinks; on LongMemEval-S, a lexical regime where BM25 saturates, the net fusion gain over BM25 is small and not significant. A per-category analysis frames the gain as a division of labor: dense late interaction helps most on multi-hop and temporal questions but trails BM25 on adversarial ones. The contribution is a controlled, reproducible account of a strong training-free retrieval recipe, not the late-interaction retriever itself (Nano-Memory's). We make no claim to a complete memory architecture; this is a retrieval-stage study.
