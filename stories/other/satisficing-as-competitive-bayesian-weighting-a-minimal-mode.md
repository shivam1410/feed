---
title: "Satisficing as competitive Bayesian weighting: a minimal model of goal-directed choice under an unattained target"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07270"
authors: ["Moto Shinriki, Yu Kono, Tatsuji Takahashi"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07270v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Animals and humans often do not maximize; they act relative to goals (aspiration levels) that are frequently not yet met. How can a goal that is not (yet) realized organize choice? Deacon (2012) calls such absence-referenced organization \emph{ententional}, and Garc\'{i}a-Valdecasas and Deacon (2024) argue that ends are best understood as constraints rather than as particular states. We examine this idea in a minimal formal setting: Risk-sensitive Satisficing (RS), a bandit learning rule that values each action by its share of past trials multiplied by its surplus or shortfall relative to an aspiration level. We show that RS can be rewritten as a Bayesian-like estimator, Attention Competitive Bayes (ACB), in which the aspiration level is the prior mean of every action and the finite budget of trials sets how strongly evidence can override it. Two consequences follow. First, actions that are no longer sampled are partially overridden by the goal rather than by past observations: their estimates relax toward the aspiration level without any data being discarded. This ``pseudo-forgetting'' distinguishes ACB from models with an explicit forgetting rate. Second, when the aspiration is unattainable, exploration does not settle; in Bernoulli bandit simulations, adjusting the aspiration level from evidence reduced regret (expected loss). ACB offers an analyzable model in which an unattained goal and a limited attentional resource jointly constrain behavior, and it yields testable predictions about how organisms revalue options they have abandoned.
