---
title: "A Gold-Standard Study of What Makes a Lightweight Game-Playing Agent Strong"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06854"
authors: ["Nima Kelidari, Mohammadsaeed Haghi, Mahdi Salmani"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06854v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06854v1 Announce Type: new Abstract: Reinforcement learning agents for imperfect-information card games are only as strong as the opponents they train against, and they are hard to grade, since they beat a random opponent over 99 percent of the time and only tie copies of themselves. So we build a strong, fixed, rule-based expert for Gin Rummy and use it only as a yardstick, never for training. It beats every agent we trained 70 to 99 percent of the time. Across more than a hundred runs, we isolate what makes a lightweight agent stronger. Trust region updates, a well-aimed reward, a curriculum of tougher opponents, warm starting, and keeping the best checkpoint all help, and stacking them lifts a self-play champion from about 30 to 36 percent against the expert. Several ideas did not pay off. Short-term and longer-term reward shaping, learned state embeddings, imitation and DAgger, and a live large language model opponent were each unhelpful, too slow, or too heavy to train at scale. Comparing MLP, convolutional, set-based, attention, and recurrent encoders shows that extra capacity does little to break the ceiling, suggesting the limit is information rather than network size. We add standard baselines (neural fictitious self-play and information set Monte Carlo search) and confirm the approach carries over to Leduc Hold'em, where the optimum is computable. The result is a lightweight, game-agnostic recipe that trains competitive agents without training on the expert, for any game a small model can handle, reported with robust statistics and released as a reusable package.
