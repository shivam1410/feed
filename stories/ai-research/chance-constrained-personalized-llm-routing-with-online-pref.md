---
title: "Chance-Constrained Personalized LLM Routing with Online Preference Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22695"
authors: ["Ameya Anjarlekar, Rasoul Etesami, R Srikant"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.22695v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

We study personalized LLM routing, where a router selects among heterogeneous models with different costs and capabilities. The router must minimize cumulative inference cost while ensuring reliable realized response quality, even though user preferences are unknown and must be learned from feedback during deployment. We formulate this problem as a constrained contextual bandit and develop an algorithm that learns preferences while balancing cost and quality. Under a logistic preference model and a strict-feasibility condition, we establish sublinear expected cost regret relative to an optimal stationary randomized contextual oracle and a high-probability guarantee on realized cumulative satisfaction. The framework extends beyond LLM routing to broader online model-selection problems with reliability requirements.
