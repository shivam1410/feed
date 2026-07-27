---
title: "Cross-Domain Off-Policy Evaluation and Learning for Contextual Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22012"
authors: ["Yuta Natsubori, Masataka Ushiku, Yuta Saito"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.22012v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.22012v1 Announce Type: new Abstract: Off-Policy Evaluation and Learning (OPE/L) in contextual bandits is rapidly gaining popularity in real systems because new policies can be evaluated and learned securely using only historical logged data. However, existing methods in OPE/L cannot handle many challenging but prevalent scenarios such as few-shot data, deterministic logging policies, and new actions. In many applications, such as personalized medicine, content recommendations, education, and advertising, we need to evaluate and learn new policies in the presence of these challenges. Existing methods cannot evaluate and optimize effectively in these situations due to the notorious variance issue or limited exploration in the logged data. To enable OPE/L even under these unsolved challenges, we propose a new problem setup of Cross-Domain OPE/L, where we have access not only to the logged data from the target domain in which the new policy will be implemented but also to logged datasets collected from other domains. This novel formulation is widely applicable because we can often use historical data not only from the target hospital, country, device, or user segment but also from other hospitals, countries, devices, or segments. We develop a new estimator and policy gradient method to solve OPE/L by leveraging both target and source datasets, resulting in substantially enhanced OPE/L in the previously unsolved situations in our empirical evaluations.
