---
title: "Learning Dynamic User Personas from Implicit Interaction Streams via Iterative Refinement"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26473"
authors: ["Haifeng Wu"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2607.26473v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26473v1 Announce Type: new Abstract: Personalizing large language models (LLMs) to individual users is essential for improving user experience, yet existing approaches typically rely on explicit preference supervision such as pairwise comparisons or demographic attributes, limiting their applicability in natural interaction settings. We propose IRIS, a framework that learns dynamic user personas directly from implicit interaction streams by extracting behavioral signals from everyday conversations and iteratively refining persona representations through a prediction-driven closed loop without requiring explicit feedback. We introduce an evaluation protocol based on behavior prediction, persona stability, and decision prediction. A proof-of-concept study on a synthetic interaction stream derived from public-domain autobiographical text shows that IRIS produces stable personas and distinguishes individual users while revealing limitations of memory-only approaches on recall-oriented metrics. We then validate IRIS on anonymized real-world Reddit r/AmItheAsshole (AITA) data, with personas built solely from each author's historical interactions. Across 100 authors, IRIS achieves the highest decision prediction accuracy among all evaluated methods (61.0%), outperforming static personas, memory-only retrieval, and no-personalization baselines. These results suggest that implicit behavioral modeling provides a scalable alternative to explicit preference learning for personalized LLMs and offers a practical foundation for adaptive conversational systems and embodied agents that require continuously evolving models of their users.
