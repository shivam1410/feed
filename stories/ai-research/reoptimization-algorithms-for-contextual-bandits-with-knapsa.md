---
title: "Reoptimization Algorithms for Contextual Bandits with Knapsack Constraints"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11383"
authors: ["Zhen Xu"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11383v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11383v1 Announce Type: new Abstract: We study new algorithms for Contextual Bandits with Knapsack. In these problems, there are finitely many types of customers, products, and resources. Each product is made from a fixed combination of resources, and resources have finite capacity. A decision maker must assign each arriving customer one out of a set of multiple possible products. Every assignment of a customer to a product will generate a random reward, which equals an unknown linear function of customer and product features, plus a noise term. The objective is to jointly learn the mean reward function, and to make online assignments to minimize the expected revenue loss relative to an optimal policy that knows the reward function. We propose a natural and simple extension of the Upper-Confidence-Bound (UCB) family of algorithms and apply re-optimization techniques. We show that by taking advantage of re-optimization, our algorithm achieves an average regret of $O(\frac{(\ln T)^3}{T})$ where $T$ is the horizon length. Our bound significantly reduces the $O(\frac{1}{\sqrt{T}})$ bound in the literature for closely related dynamic-pricing problems that are based on re-optimization.
