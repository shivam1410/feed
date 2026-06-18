---
title: "Self-CTRL: Self-Consistency Training with Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18327"
authors: ["Itamar Pres, Laura Ruis, Melat Ghebreselassie, Belinda Z. Li, Jacob Andreas"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 73
guid: "oai:arXiv.org:2606.18327v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18327v1 Announce Type: new Abstract: Language models (LMs) that faithfully describe their own behavior can more easily be audited, understood, and trusted by users. This paper describes Self-Consistency Training with Reinforcement Learning (Self-CTRL), a method that optimizes for consistency between a LM's self-explanations and behavior on related inputs by updating explanations to better predict behavior or updating behavior to better match explanations. We apply our method in two domains. First, we study a formal probabilistic reasoning task in which LMs must learn to imitate a family of biased samplers and evaluated on their ability to report the associated biases. We find that consistency training improves the correlation between self-reported and behaviorally-measured latent biases from $R^2=0.24$ to $R^2=0.64$ on a set of held-out distributions, matching the generalization of direct ground-truth supervision. Second, we study a constitutional AI domain in which LMs must describe when they will refuse or comply with user requests. Here, Self-CTRL produces rules that faithfully describe the model's behavior on held-out requests, improving the refusal predictions of a third-party auditor model from $36\%$ to $92\%$. In the other direction, behavior updates improve alignment, reducing HarmBench failure rate from $15.0\%$ to $0.5\%$ without substantially increasing refusal on harmless prompts. By aligning explanations and behavior, our work provides a general recipe for training AI models to be safer, more transparent, and more controllable.
