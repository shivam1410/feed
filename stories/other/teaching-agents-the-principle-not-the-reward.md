---
title: "Teaching Agents the \"Principle\", Not the \"Reward\""
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07130"
authors: ["Shan Yang"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07130v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Reinforcement learning has achieved strong performance in many tasks by letting agents learn from nothing more than a reward signal. However, in more complex tasks, agents still struggle to learn good, generalizable policies, even with carefully designed rewards and abundant samples. We argue that this difficulty stems from the reward decoding burden: designers encode their knowledge of the desired behavior into rewards and penalties, and agents must infer this knowledge from long sequences of noisy scalars. To address this burden, we propose prescriptive policy learning (PPL), which directly teaches agents higher-level knowledge about the tasks, termed principles of behavior, such as how to maintain balance, how to accumulate energy, and how to land smoothly. Through appropriately selected key quantities and references, PPL can directly indicate at every step whether the agent follows the principles and to what extent. Our experiments show that agents can learn good, generalizable policies without any reward. Taught only simple heuristic principles, PPL agents outperform reward-based methods with far fewer samples. Their policies also transfer directly to harder settings and keep performing well, demonstrating their strong generalization ability. In summary, PPL provides a new approach in which rough knowledge of the desired behavior is enough for agents to learn good, generalizable policies, even when the system dynamics cannot be accurately modeled.
