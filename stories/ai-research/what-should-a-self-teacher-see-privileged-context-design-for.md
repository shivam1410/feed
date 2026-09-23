---
title: "What Should a Self-Teacher See? Privileged Context Design for On-Policy Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25623"
authors: ["Kanghui Tian, Siyuan Liu, Tianxiang Jiang, Shuai Dong, Yizhuo Li, Tian Ding, Yuan Guo, Songze Li, Haowen Hou, Congcong Wang, Yi Wang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25623v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25623v1 Announce Type: new Abstract: More privileged information does not always make a better teacher. We study this tension in on-policy self-distillation (OPSD), where a frozen copy of the base model scores the student's own rollouts under privileged context, conventionally a complete reference solution that bundles the final answer with one particular reasoning path. Holding the student view and training fixed within each scale, we compare that default against three abstractions compiled offline, a named strategy, a method-independent framing, and a problem category, and against an answer-only control that keeps the destination but removes the path. In the primary runs on competition mathematics, the best intermediate contexts improve the in-domain peak mean over the full solution by 1.4 points at 4B and 1.6 at 8B, while storing an order of magnitude fewer hint tokens. Comparisons across three seeds also show positive mean gains for the framing and category contexts at both scales. Answer-only conditioning remains competitive in the primary runs, within 0.2 points of the full solution at these scales. The preferred context varies with student scale and task. Initial teacher-student KL does not order downstream performance. What a self-teacher should see is therefore not everything it could, but the level of abstraction its student can still act on.
