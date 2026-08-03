---
title: "Mirror Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.28737"
authors: ["Yunpeng Liu, Matthew Niedoba, Oluwanifemi A. Adekanye, Jason Yoo, Yingchen He, Berend Zwartsenberg, Frank Wood"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.28737v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.28737v1 Announce Type: new Abstract: We investigate imitation learning through the lens of third-person observation and propose a framework for mirror learning: acquiring actionable policies from passive observation. While behavior cloning (BC) excels under dense, well-aligned first-person data, it fundamentally fails to leverage the rich observational signals arising from third-person demonstrations that humans and animals routinely exploit. We introduce a method that composes (i) a learned perspective transformation that places learners in demonstrators' shoes using a fine-tuned video diffusion model and (ii) an inverse dynamics model that infers action trajectories in the learners' control space. This enables the synthesis of mirror data, pseudo first-person expert data generated from third-person observations of demonstrator behavior. Empirically, we show that mirror data alone can train effective policies, and that augmenting first-person BC training with mirror data further improves downstream policy performance. Our results suggest that modern generative world models implicitly encode sufficient structure to enable a scalable and safe alternative to teleoperation-heavy data collection.
