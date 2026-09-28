---
title: "Paragraph Boundaries Are Not White Space:Compression Depth as the Signature of Hierarchical Structure"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.23551"
authors: ["Shuyang Xiang"]
date: "2026-09-19T20:00:00.000Z"
score: 38
guid: "2609.23551"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.23551.png"
generated: "2026-09-28T20:49:59+05:30"
---

Standard positional encodings represent position as a one-dimensional reading-order coordinate, but reading order alone does not determine hierarchical textual structure. We use a hierarchical rotary positional encoding (hRoPE) that represents paragraph, sentence, and token indices as separate channels, hold the token sequence fixed, intervene on the paragraph coordinate p1, and measure cross-paragraph attention with a token-distance-exact estimator. Attention is compressed relative to a token-distance-matched baseline in every corpus, but compression alone is not diagnostic of true structure: an architecturally identical channel with density-matched random labels is compressed too, more shallowly. What distinguishes real structure is the depth of compression, which is greater and corpus-dependent while the control's is not. Comparing eight corpus-only quantities across three constructs (lexical persistence, paragraph length, embedding-based coherence), none fully reproduces the cross-corpus ordering of depth, though embedding-based coherence comes closest. Compression depth, not its location, is the reproducible signature of genuine paragraph structure in our setting.
