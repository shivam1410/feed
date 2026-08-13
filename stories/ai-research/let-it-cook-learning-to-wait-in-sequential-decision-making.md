---
title: "Let it Cook: Learning to Wait in Sequential Decision Making"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11511"
authors: ["Christopher Watson, Arjun Krishna, Dinesh Jayaraman, Rajeev Alur"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11511v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11511v1 Announce Type: new Abstract: In sequential decision making, an agent typically observes its environment and acts at every timestep. However, such active participation may not always be necessary; tasks such as brewing coffee include periods that are served equally well by letting the environment evolve without constant monitoring and control. During such periods, the agent could simply wait to conserve its resources, or redirect its attention to another task. We capitalize on these opportunities by training a "waiting policy" that decides where and how long to wait. This involves forgoing sensing to commit to a wait action, representing a deliberate pause for a set number of timesteps. We formalize "learning to wait" as minimizing the frequency of sensing and decision making without sacrificing task performance (e.g., the total amount of time to complete a task). To train a waiting policy, we propose an approach that employs reinforcement learning with lexicographically ordered objectives. In experiments across 4 discrete-state household tasks and 3 continuous-state environments, we show that our approach successfully learns waiting behaviors, and can adapt pre-trained policies to wait where appropriate. While different tasks permit different amounts of waiting without sacrificing task performance, our approach consistently finds solutions with significant waiting, sometimes waiting for over 50 percent of the task duration.
