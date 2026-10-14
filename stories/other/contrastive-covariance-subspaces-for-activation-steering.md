---
title: "Contrastive Covariance Subspaces for Activation Steering"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14025"
authors: ["Alexandros Xenos, Manos Plitsis, Niki Foteinopoulou, Yannis Panagakis, Ioannis Patras"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14025v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Activation steering controls large language model behavior by adding a direction to hidden activations during inference. For steering to work well, that direction must be a pure signal for the target concept: any confound entangled with it, such as an incidental topic or writing style, is injected into the residual stream alongside the concept itself and degrades the generated text. We introduce Contrastive Covariance Steering (CCS), a training-free method that eliminates this confound variation. CCS projects steering vectors to a low-dimensional subspace obtained in closed form by solving a contrastive variance objective, which retains the directions along which the target concept varies while suppressing directions shared with the other classes. Across three LLMs and four steering domains, CCS consistently beats all baseline steering methods in all $12$ model-domain settings. The largest relative improvement occurs on AxBench and Emotion where we outperform the next strongest steering baseline by $48$ to $70\%$ and $13$ to $27\%$, respectively. Furthermore, CCS outperforms naive difference-of-means steering by up to $151\%$, showcasing the importance of deconfounding concepts. A toy experiment verifies our motivation on why: planting a topic nuisance into the training data reduces unprojected steering by $46\%$, whereas CCS loses only $12\%$ and recovers most of the gap to an oracle that explicitly deletes the planted direction. A human study with $23$ raters on $296$ generations reproduces the LLM judge's ranking. Our extensive ablation verifies the importance of our method's components and robustness to the number of nuisance classes. Finally, we extend our method to multi-turn conversations, where CCS sustains both concept expression and fluency, matching system prompt performance as other steering methods drift.
