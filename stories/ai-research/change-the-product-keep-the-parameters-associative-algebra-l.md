---
title: "Change the Product, Keep the Parameters: Associative Algebra Layers for Transformers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32814"
authors: ["Ilya Koziev", "Ivan Oseledets"]
date: "2026-09-25T20:00:00.000Z"
score: 62
guid: "2609.32814"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32814.png"
generated: "2026-09-29T19:09:35+05:30"
---

Fast matrix multiplication algorithms keep the product fixed and search for a cheaper way to evaluate it. We instead ask whether a Transformer's learned projections can use a different, cheaper product altogether. Building on an associative-algebra construction that replaces ordinary matrix multiplication with a sparser interaction table over the same weight blocks, we construct a family with quadratic arithmetic in the matrix dimension when the physical block size remains fixed, and derive finite-shape constraints for GPU execution. The construction is provably optimal for its bilinear rank by the Alder--Strassen bound and can be realized as row-typed rectangular projections compatible with causal masking and KV-cached decoding. We provide an empirical test of this approach by training two approximately 110M-parameter decoder-only Transformer LMs from the same recipe and 12.3B-token budget, differing only in their feed-forward layer: one uses ordinary dense matrix multiplication and the other uses the associative-algebra product. Across four prompt domains, the algebraic model achieves a 6.2--7.8\% increase in end-to-end generation throughput, while obtaining lower scores on all three reported downstream metrics. We treat these results as a feasibility and trainability check for the proposed approach at small scale, leaving further investigation to future work.
