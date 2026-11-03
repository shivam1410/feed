---
title: "Compositional Self-Improvement: Promises and Pitfalls"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00452"
authors: ["Changho Shin, Daiwei Chen, Brenden Lake, Frederic Sala, Ramya Korlakai Vinayak"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00452v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Although self-improvement is becoming increasingly important as tasks become more complex, models struggle to generate reliable supervision for harder, out-of-distribution instances. One way to address this challenge is to exploit compositional structure: models often solve simpler subproblems more reliably than full problems, so their subproblem predictions can be composed into supervision for harder ones. We systematically study when this kind of composed supervision supports self-improvement and when it fails. Our controlled experiments identify three failure modes: unreliable subproblem predictions, errors introduced by composition, and limited supervision coverage. Beyond controlled settings, these findings carry over to more realistic coding and reasoning tasks: composed labels are more accurate than direct self-generated labels and improve performance even on compositions longer than those seen during training, while the failure modes remain visible. Further, although these failure modes often keep compositional self-improvement from fully succeeding on its own, a short SFT warmup with compositional self-improvement can bootstrap reinforcement learning on tasks that require composing skills the model already has, particularly when direct exploration rarely succeeds. Together, these findings characterize when compositional self-improvement can provide sufficiently reliable supervision to expand model capabilities.
