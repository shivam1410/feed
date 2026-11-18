---
title: "DeltaHarness: Self-Evolving Harnesses for Resource-Adaptive Tool Execution"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21688"
authors: ["Lecheng Yan, Jianze Lin, Xicheng Han, Xiantao Xu, Wenxi Li, Chenyang Lyu"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21688v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Tool-using agents rely on execution harnesses to organize and schedule tool operations. The same task and resource description can conceal runtime conditions that reverse the latency ordering of valid execution plans. Resolving this uncertainty requires firsthand execution in the target setting. We introduce DeltaHarness, an execution-guided policy-search method that adapts agent harnesses from cold-start measurements. Its QHI loop uses the observed response to update runtime dispatch, revise physical plans, and select experiments for later proposals. An independent confirmation panel controls policy replacement. With fixed dispatch, a revised materialization policy reduces complete-delivery latency by 30.0% on one video-editing task across three fresh pairs. On held-out tasks, the evolved policies reduce latency by 8.2% relative to the best fixed plan in one seed and by 4.6% relative to the initial proposal in another.
