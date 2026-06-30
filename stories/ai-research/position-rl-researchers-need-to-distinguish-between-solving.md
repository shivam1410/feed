---
title: "Position: RL Researchers Need to Distinguish Between Solving Simulators and Using Simulators as a Proxy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28433"
authors: ["Matthew Vandergrift, Esraa Elelimy, Martha White"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2606.28433v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28433v1 Announce Type: new Abstract: One goal in reinforcement learning (RL) research is to understand general-purpose sequential decision-making, using benchmark simulators as a proxy for learning in deployment settings. When running experiments, however, the goal of achieving high performance in the simulator can mutate into focusing exclusively on solving the simulator. To achieve high scores, researchers may adopt solutions exclusively meant for solving simulators, rather than learning while the agent is deployed outside a simulator. Solving simulators is also worthy of investigation, but it is a fundamentally different RL research question. In this paper, we argue that RL researchers need to distinguish between two use cases of simulators: solving simulators and using simulators as a proxy for learning in deployment. We first discuss how these two use-cases are importantly different, in terms of constraints on how the agent can use the simulator, which algorithms are appropriate, and which evaluation metrics are appropriate. We then highlight several issues and misleading conclusions that can occur by not making the distinction between these two settings clear, supported with examples and simple experiments. This work is a call to the community to begin clearly distinguishing how they are using simulators in their work, hopefully sparking further discussion on which empirical practices work best in each setting.
