---
title: "Offline KL-Regularized Reinforcement Learning with Stochastic Transitions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17603"
authors: ["Andrew Liu"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17603v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

KL-regularized reinforcement learning is the objective behind RL fine-tuning of language models, and its data are often collected by the reference policy itself. However, beyond bandits and deterministic transitions, little is known about how much offline data it needs. In this work, we study finite discounted Markov decision processes with unknown stochastic transitions, $K$ state-action pairs and effective horizon $H$. For data that cover the regularized optimum with concentrability $C\geq 4$, every estimator needs $\Omega(KCH^3/(\epsilon\max\{\epsilon,\beta\}))$ samples on some instances when $\epsilon$ is small, where $\beta$ is the temperature. Under a fixed design, pessimistic soft value iteration with a variance-aware penalty attains this rate with high probability, up to logarithmic factors, when $\beta\geq 1.4H$. When the data come from the reference policy itself, we show that it covers the optimum up to a power law whose exponent grows as $H/\beta$; in the same temperature range, this power law alone gives the estimator a sample complexity polynomial in $1/\epsilon$, with no coverage assumption. For $\beta\geq H$ the power can also increase the sample size needed by a factor polynomial in $1/\epsilon$. Finally, the plug-in estimator, which is minimax optimal with a generative model, can fail on reference data at small temperatures when many actions are rarely seen, while the pessimistic estimator does not.
