---
title: "Imperfect Is Perfect: Learned Column Prefilling for Branch-Price-and-Cut"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.21001"
authors: ["Haoran Liu, Yu Yang"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.21001v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Column generation folklore warns that initial columns hurt: a warm start may bias the dual and slow the root of branch-price-and-cut. We show the opposite once the columns are imperfect in the right way. Preloading the support of the optimal root LP, the best columns one could know in advance, fails to finish on half of our hardest instances; a pool of ordinary routes that need not belong to any optimal solution, held outside the master and priced at the current smoothed dual, speeds the root up. Because the columns need not be optimal, producing them becomes a learning task: a neural edge scorer guides a constructive generator that builds the pool in seconds. A second network predicts the initial center of Wentges smoothing from the instance file, and with it the direction of the smoothed pricing queries; the solver's own updates run unchanged. With prefill and center in place, exact pricing dominates root pricing time, so we rebuild bucket-graph labeling around its dominance test for the GPU and certify on the CPU. Inside RouteOpt, the state-of-the-art exact solver for capacitated vehicle routing, the pipeline reaches the same certified root bound in 13.2% of vanilla RouteOpt's root pricing time over 95 instances with 300 to 1000 customers, prefill alone in 26.1%, and 17.5 times faster in the best case. In an exact branch-price-and-cut solver for unrelated parallel machine scheduling, prefill with smoothing and the learned center certifies all 25 benchmark instances, 12 times faster than the solver's own column generation, which certifies 20 of them.
