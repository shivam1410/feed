---
title: "Exact Unlearning in Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04182"
authors: ["Thanh Nguyen-Tang, Raman Arora"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.04182v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04182v1 Announce Type: new Abstract: We formulate the problem of \emph{exact unlearning} in reinforcement learning, where the goal is to design an efficient framework that enables the removal of any user's data upon deletion request, i.e., the online learner's output after unlearning is \emph{indistinguishable} from what would have been produced had the deleted user never interacted with the learner. For any $\rho >0$, we show that there exists a reinforcement learning (RL) algorithm that is $\rho$-TV-stable and supports an exact unlearning procedure whose expected computational cost is only a $\rho \sqrt{\ln T}$ fraction of the computational cost of retraining from scratch. We construct such a $\rho$-TV-stable RL algorithm for tabular Markov decision processes (MDPs), which achieves a regret bound of $\mathcal{O}(H^2 \sqrt{SAT} + H^3 S^2 A + {H^{2.5} S^2 A}/{\rho})$, where $S, A, H$, and $T$ denote the number of states, the number of actions, the episode horizon, and the number of episodes, respectively. We also establish a lower bound of $\Omega(H\sqrt{\!SAT}\! +\! {SAH}/{\rho})$ for $\rho$-TV-stable RL algorithms, showing that our algorithm is nearly minimax optimal.
