---
title: "Inverting the Bellman Equation: From $Q$-Values to World Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21173"
authors: ["Alistair Letcher, Mattie Fellows, Alexander D. Goldie, Jonathan Richens, Jakob N. Foerster, Oliver Richardson"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21173v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21173v1 Announce Type: new Abstract: Model-based and model-free reinforcement learning are traditionally viewed as separate paradigms: instead of learning a model of the transition kernel $P$, model-free agents typically estimate value functions tied to a specific policy and reward. In this paper, we challenge this dichotomy by proving that value-based agents trained on a sufficiently rich set of reward functions, e.g. using goal-conditioned RL, implicitly encode a unique and accurate world model. To extract this model in practice, we introduce \textit{$P$-learning}, an inverse analogue to $Q$-learning that samples from an agent's $Q$-values, policies and rewards to decode its internal model of the environment. We then provide sufficient conditions on the type and number of goals for which agents encode the true kernel $P$, covering both stochastic and deterministic MDPs over finite or continuous state spaces. Even when our assumptions are violated, we empirically demonstrate that agents trained on a handful of reward functions encode accurate dynamics in $\texttt{Reacher}$, $\texttt{MountainCar}$ and stochastic variants of $\texttt{FourRooms}$. Surprisingly, we find that policies trained exclusively on a \texttt{Reacher} agent's implicit world model are quasi-optimal on out-of-distribution, velocity-based goals despite position-only training -- suggesting that agents contain hidden generalisation capabilities and providing a new lens into the connection between model-based, model-free, and goal-conditioned RL.
