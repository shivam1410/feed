---
title: "Learning in Markovian bandits with non-observable states and constrained decision epochs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27448"
authors: ["Thomas Hira, Victor Boone, Urtzi Ayesta, Ina Maria Verloop"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2606.27448v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27448v1 Announce Type: new Abstract: This paper studies the problem of regret minimization in Markovian bandits with \emph{non-observable states} and possibly \emph{constrained} decision epochs. The focus is restricted to a ``pure'' regret benchmark, that compares the performance of the learning algorithm to the best \emph{pure policy} which -- akin to optimal policies of stochastic bandits -- picks the optimal arm from start to finish without ever switching. We introduce a generalization of rested Markovian bandits, \emph{self-degrading Markovian bandits}, for which pure policies are always asymptotically optimal.We show that without prior knowledge on the underlying bandit, the regret of algorithms that switch arms rarely necessarily scales super-logarithmically for every bandit, i.e., as $\omega(\log(T))$, where $T$ is the learning horizon. Despite the unreachability of the logarithmic regime, we design UCB-NOM, an optimistic algorithm inspired by UCB, of which the regret is nearly logarithmic. Lastly, we show that given prior knowledge on the Markovian bandit in the form of a bound on the bias functions of its arm, a proper instantiation of UCB-NOM achieves $O(\log(T))$ regret. We further show that this prior knowledge allows for a $O(\sqrt{T \log(T)})$ worst-case regret bound for UCB-NOM. Notably, our regret bounds do not depend on the number of states of the underlying Markov chains. Our findings suggest that the non-observability of states is a mild inconvenience in self-degrading Markovian bandits.
