---
title: "SAGE: Retain-Aware Post-Hoc Sanitization of Final Unlearning Vector"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18309"
authors: ["Jingyuan Zhang, Yucheng Bai, Peixi Wen, Zhehao Huang, Zhengbao He, Hanling Tian, Xinwen Cheng, Haiyin Ran, Xiaolin Huang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.18309v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18309v1 Announce Type: new Abstract: Large Language Model (LLM) unlearning aims to remove undesirable knowledge or behaviors while preserving retained capabilities. Current unlearning methods all involve a trade-off between unlearning and retention. We have found that the retention activation bias can also be used to quantify the damage an unlearning method inflicts on retention, without considering the specific implementation of the unlearning process. This allows us to restore retention performance for any unlearning method using a post-hoc approach. Therefore, we propose a complementary post-hoc setting to sanitize the final update vector without rerunning the original unlearning pipeline. In this setting, we design SAGE, Spectral Activation-GEometry Sanitization, a source-agnostic correction for final unlearning updates. SAGE collects real module inputs from a small retain proxy, extracts their dominant activation geometry, and solves a source-anchored optimization objective in closed form, which suppresses update components aligned with high-energy retained directions while preserving the source method's forgetting carrier. Across multiple unlearning methods, model scales, and benchmarks, SAGE consistently relieves the retain-forget trade-off, identifying post-hoc sanitization of final vectors as a practical and underexplored axis for machine unlearning.
