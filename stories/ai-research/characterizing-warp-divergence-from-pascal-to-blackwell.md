---
title: "Characterizing Warp Divergence from Pascal to Blackwell"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23402"
authors: ["Alpin Dale"]
date: "2026-07-25T20:00:00.000Z"
score: 55
guid: "2607.23402"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23402.png"
generated: "2026-07-29T16:31:06+05:30"
---

Since Volta introduced Independent Thread Scheduling (ITS), NVIDIA GPUs have been widely assumed to handle warp divergence in a fixed manner. We test this assumption across Ampere, Hopper, and datacenter and consumer Blackwell GPUs, using pre-ITS Pascal as a baseline. Combining cycle-accurate microbenchmarks, hardware counters, and static analysis of compiler-generated SASS, we separate stable behavior from architectural change. Across all tested generations, divergent paths serialize linearly with the number of paths k, following T(k) approx sk with no super-linear reconvergence penalty. Warp execution efficiency falls as 32/k, the penalty is independent of occupancy, and predication removes the serialization cost. The same behavior appears on Pascal, showing that this programmer-visible cost model predates ITS. The compiler-emitted reconvergence machinery, however, has changed substantially. Pascal uses a per-warp SSY/SYNC instruction stack, whereas later generations use barrier-register instructions. Deferred reconvergence beyond the immediate post-dominator falls from 29 cases on Ampere to 2 on Blackwell. Blackwell also introduces a two-tier convergence-barrier classification, uniform-branch instructions, and explicit partial-mask warp synchronization, none of which appear on Ampere or Hopper. Controlled bit-flip experiments indicate that the new barrier class is a static compiler classification with no observable runtime effect in our tests. Thus, divergence retains a stable and predictable performance cost even as NVIDIA's control-flow ISA and reconvergence mechanisms continue to evolve.
