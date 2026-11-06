---
title: "Optimistic Hedge in General-Sum Games: Fundamental Limits and Regret Bounds via Temporal Approximation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07078"
authors: ["Yuval Dagan, Nadav Eisen, Liad Erez, Tomer Koren"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07078v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Optimistic Hedge, a multiplicative weight update with one step of extrapolation, is one of the most natural regret-minimizing dynamics for games, and characterizing its regret has been a longstanding open question. Daskalakis, Fishelson and Golowich proved that if all $m$ players in a finite general-sum game follow Optimistic Hedge with a fixed learning rate, each player's regret is polylogarithmic in the horizon $T$. Subsequently, Ha showed that an appropriate choice of learning rate makes each player's regret bounded independently of $T$. This bound, however, is non-constructive and its dependence on the number of actions $n$ is not explicit, leaving open whether Optimistic Hedge can achieve a constant regret bound which is polynomial in the size of the game. We show that the answer hinges on the number of players. In two-player games, there is a learning rate for which Optimistic Hedge guarantees $O(n\log n)$ regret independent of the horizon. In three-player games, however, no such bound is possible: for any learning rate up to an absolute constant and for sufficiently large horizon $T$, there is a game with $n$ actions per player in which some player's regret is $2^{\Omega(n)}$, and more generally, for every $m\ge3$ we construct $m$-player games in which some player's regret is $2^{\Omega(mn)}$; for learning rates above $2^{-\Omega(mn)}$, that player's regret even grows linearly in $T$. Our upper bound is based on a temporal approximation framework for the analysis of Optimistic Hedge. Starting from the variance-based RVU bound of Daskalakis et al., we approximate the losses over time-localized windows by well-behaved functions, whose total variation is a small fraction of their cumulative variance. In $m$-player games, the same framework gives a significantly simplified proof of the recent $O(\sqrt{m}\log n\log T)$ regret bound due to Ha.
