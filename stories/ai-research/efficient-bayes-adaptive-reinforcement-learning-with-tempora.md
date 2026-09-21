---
title: "Efficient Bayes-Adaptive Reinforcement Learning with Temporal Logic Specifications"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.20954"
authors: ["Jonathan Hau, Alessandro Abate"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.20954v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.20954v1 Announce Type: new Abstract: We present a novel end-to-end model-based Reinforcement Learning (RL) algorithm for efficient policy synthesis under given Linear Temporal Logic (LTL) specifications (e.g., safety or reachability) in unknown environments. To do so, a Limit-Deterministic B{\"u}chi Automaton (LDBA) representation of the LTL task is synchronised with a Bayes-Adaptive Markov Decision Process (BAMDP) representation of the environment, which allows us to leverage an enhanced exploration-exploitation trade-off that is achieved via Bayesian RL, as opposed to traditional non-Bayesian approaches. We further propose a novel Bayes-Adaptive Monte-Carlo Planning (BAMCP) algorithm to allow for approximate Bayes-optimal strategy synthesis in the synchronised BAMDP construct. A range of finite- and infinite-horizon task experiments demonstrate the effectiveness of our approach in terms of both property satisfaction and sample efficiency, when compared to traditional model-free approaches. Additional ablation studies also successfully highlight the value of the novel BAMCP algorithm in comparison to classical BAMCP for LTL task satisfaction. Finally, we also showcase a successful application of our approach for \textit{cautious} RL, namely to reduce the number of task violations incurred during policy training.
