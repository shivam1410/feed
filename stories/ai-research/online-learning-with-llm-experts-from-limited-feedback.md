---
title: "Online Learning with LLM Experts from Limited Feedback"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05820"
authors: ["Wang Wei, Soumyabrata Pal, Koyel Mukherjee, Franck Dernoncourt, Ryan A. Rossi, Branislav Kveton, Hoda Eldardiry"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05820v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05820v1 Announce Type: new Abstract: We study adaptive routing of prompts to large language model (LLM) experts to maximize response quality in an online setting with limited feedback. We formulate it as a bandit problem with $K$ actions that represent experts and $d$ features that encode prompts, over a horizon of $T$ rounds. We propose algorithms that strategically select and observe rewards to minimize regret. In the full-information setting, we achieve a regret of $\tilde{O}(d T / \sqrt{m})$, while in the bandit setting we achieve $\tilde{O}(d T \sqrt{K / m})$, where $m \ll T$ is a budget on feedback. Our experiments show that we efficiently learn high-quality routing strategies across diverse LLMs from limited feedback.
