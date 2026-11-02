---
title: "StrictPRMBench: A Replayable Evaluation Benchmark for Auditing Fixed-Score PRM Aggregation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41333"
authors: ["Pengfei Zheng"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2610.41333v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Process reward models (PRMs) score reasoning steps, but best-of-N selection also requires a rule that aggregates those scores. We study that rule as a separate evaluation object. StrictPRMBench fixes mathematical reasoning pools, scorer evidence, and the source trace of a deletion intervention, so that different reducers face the same recorded selection problem. Across seven scoring checkpoints and two benchmarks, the stored N=32 outcomes give higher deletion-induced selection instability for product than geometric mean (GM) in all 14 cells. The equal-cell difference is +0.0965; a shared-problem bootstrap, conditional on these checkpoints and frozen pools, gives a 95% interval of [0.0846,0.1086]. A pre-injection-defined sensitivity excludes replacement slots that are either reducer's clean winner and retains 4,459 of 4,622 cell-problem records. The retained difference is +0.0986 [0.0875,0.1098]. Effects are heterogeneous: the two Qwen cells have positive percentile-bootstrap intervals on retained support but two-sided exact paired p-values of 0.0625 and 0.0703. Clean-pool Qwen accuracy does not detect a product advantage, but this is not an equivalence result. We provide versioned outcome records, CPU reanalysis, and an explicit evidence-availability contract. The contribution is a diagnostic evaluation protocol and a reproducible audit of recorded selector behavior, not a new PRM, a universally optimal reducer, or evidence of deployment-wide harm. Raw-score replay and outcome-record reanalysis are distinguished: missing primary edited-score vectors limit independent evaluation of new reducers under the same stress.
