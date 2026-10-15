---
title: "Lag: A Mean-Field Optimal Policy for Online Assignment with Reusable Resources"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19038"
authors: ["Keerthana Gurushankar"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19038v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

We study online task assignment with reusable resources. This problem arises in peer reviewer assignment, skill-based call routing, rideshare matching, emergency dispatch, and crowdsourcing: Tasks arrive according to a geometric process and must be immediately assigned to servers that become temporarily busy, yielding rewards that depend on the task-server pair. The goal is to maximize long-run average reward. We cast the problem as a contextual restless multi-armed bandit (CRMAB). We derive an occupancy-measure LP (OCC-LP) that upper-bounds the reward of any work-conserving policy. From its dual we obtain Lag, a closed-form index policy. We introduce a scaling regime in which the number of copies of each server and the number of arrivals per step grow together. This regime yields the first deterministic fluid limit for a contextual bandit. In it, Lag is asymptotically optimal. Finally, we evaluate our algorithms on peer review datasets and call center routing. The Lagrangian index achieves 83-99% of the LP upper bound across all load levels. Moreover, the Lagrangian index policy significantly outperforms the natural greedy assignment scheme, improving reward by up to 12.3% on journal data and 36% on structured synthetic instances.
