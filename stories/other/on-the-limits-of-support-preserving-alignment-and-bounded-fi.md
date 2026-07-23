---
title: "On the Limits of Support-Preserving Alignment and Bounded Filtering"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18295"
authors: ["Aryan Dutt, Rui Mao, Anupam Chattopadhyay"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18295v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18295v1 Announce Type: new Abstract: We study whether alignment schemes that reshape a base model's output distribution, combined with bounded safety filters, can drive the probability of harmful behavior to zero in modern large language models. Recent research suggests that harmful behaviors can persist under preference-based alignment and that external filtering can be computationally hard in the worst case, but it remains unclear whether practical alignment pipelines that largely preserve internal representations can eliminate harmful behavior entirely rather than merely suppressing its most visible forms. We formalize this setting using support-preserving alignment operators together with bounded filtering algorithms under black-box, white-box, and statistical-query access, and analyze their ability to approximate an ideal eliminator that removes all harmful mass. Building on this framework, we provide computational and information-theoretic arguments indicating that, under these constraints, bounded filtering may fail to eliminate all harmful outputs supported by the base model's distribution. To evaluate these limits empirically, we analyze a range of state-of-the-art open-weight and hosted LLMs accessed via OpenRouter under bounded black-box, white-box, and statistical-query filters on adversarial prompts drawn from curated cybersecurity scenarios and PKU-SafeRLHF. Across models, filter classes, and query budgets, the estimated harmful-output rate decreases with additional filtering compute but consistently plateaus above zero, suggesting a persistent empirical harm floor.
