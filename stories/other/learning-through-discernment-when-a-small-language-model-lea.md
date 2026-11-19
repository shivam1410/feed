---
title: "Learning through Discernment: when a small language model learns from user feedback on the job, and when it decays"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23716"
authors: ["Sirisilp Kongsilp"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23716v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Small language models on devices could keep improving by learning, overnight, from their own daily work. Without a true outcome, however, something must decide which attempts are worth learning from, and both the model's own judgment and the user's reaction can be wrong. We study a small model (Qwen3 0.6B and 1.7B) with a LoRA adapter, fine-tuned each night on the attempts a judge accepts, over 127 lives of up to a year on WebShop and $\tau^2$-bench. We compare the true outcome, the user's stated verdict and the model's own judgment with a separate, frozen "feedback sense" that reads the user's reaction, built in three versions. Judging itself, the model improved and then decayed, over a year and whatever its adapter. A sense that took polite give-ups for success collapsed 3 of 5 lives; one built for discernment, which first asks whether the user gave a clear verdict, kept 4 of 5 near the oracle for two weeks, then faded on clean but scarce lessons, to the level of self-judging by day 60. When the user cannot see the outcome ($\tau^2$-bench), the sense read reactions correctly, yet 80% of its lessons were failures the customer had thanked. Across 97 lives, the share of failed attempts among the lessons predicted the outcome (Spearman $\rho$ = -0.81). In our experiments, learning from users held up only where the judge kept failures out and the user could see the outcome; lopsided lessons may also narrow the model.
