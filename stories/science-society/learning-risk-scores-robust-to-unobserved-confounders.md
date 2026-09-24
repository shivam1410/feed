---
title: "Learning Risk Scores Robust to Unobserved Confounders"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27144"
authors: ["Ryan Edmonds, Yingxiao Ye, Sina Aghaei, Andr\\'es G\\'omez, \\c{C}a\\u{g}{\\i}l Ko\\c{c}yi\\u{g}it, Phebe Vayanos"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.27144v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27144v1 Announce Type: new Abstract: We consider the problem of learning risk scores to prioritize individuals for scarce resources or interventions, from historical observational data affected by unobserved confounding. Decisions about who receives scarce resources are often guided by risk scores based on recorded characteristics, such as responses to a survey. These risk scores are increasingly being learned directly from observational data: historical records of individuals' characteristics, allocation decisions, and outcomes. Standard methods such as inverse propensity weighting (IPW), which corrects for the bias introduced by the historical allocation policy, can be used to learn accurate risk scores if the historical decision process is fully explained by the recorded characteristics. In practice, however, historical decisions often depend on unrecorded information, causing learned risk scores to systematically under-prioritize exactly the individuals whose unrecorded circumstances drove past prioritization. We propose a method for learning risk scores that are robust to this kind of unobserved confounding, building on IPW. Since propensity weights cannot be reliably estimated under unobserved confounding, we instead treat them as belonging to an uncertainty set determined by the observable data and domain-informed estimates of the degree of confounding, combining sensitivity analysis from causal inference with Wasserstein distributionally robust optimization. The resulting robust risk score learning problem admits a sample-based approximation that we reformulate as an exponential cone program compatible with off-the-shelf solvers. We demonstrate the effectiveness of our approach on semi-synthetic data derived from datasets in the UCI Machine Learning Repository. Our method improves calibration by up to 29.2% over traditional benchmarks and up to 11.1% over the state of the art, without compromising other metrics.
