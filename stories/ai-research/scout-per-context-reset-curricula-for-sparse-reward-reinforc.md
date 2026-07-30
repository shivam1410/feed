---
title: "SCOUT: Per-Context Reset Curricula for Sparse-Reward Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26417"
authors: ["Siddharth Aphale, Ayushman Singh"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2607.26417v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26417v1 Announce Type: new Abstract: Sparse-reward reinforcement learning often fails because rollouts from the unassisted evaluation start rarely reach later task stages. Reset curricula address this by starting some training rollouts from easier intermediate states, called scaffolds. Such a curriculum faces two decisions: scaffold access, obtaining informative starts, and scaffold allocation, deciding how quickly that assistance is removed. Most prior curricula pace removal on one shared schedule, which can fail when task instances, or contexts, learn at different rates. We introduce SCOUT, an online, learner-agnostic reset controller that gives every context its own curriculum. Using only binary rollout success, SCOUT removes assistance after sustained success, restores it after failure, and cautiously tests a harder start when progress stalls, without changing the reward, optimizer, or learner. A counting construction shows that synchronized global pacing can be insufficient when contexts need conflicting amounts of assisted practice. Across six navigation and manipulation settings, scaffold access improves learning and enables success in three where unassisted training fails within the reported budget. In a constructed pacing conflict, each tested global schedule leaves one group unsolved, while SCOUT solves both. Average success can conceal this failure, so we also report the least successful group. Group-level pacing works when learning differences follow known groups but can fail when they occur within one group. SCOUT needs no group labels and remains consistently strong in both cases. A reset curriculum should remove assistance at the scale where learning progress differs.
