---
title: "One Temperature to Rule Them All?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13077"
authors: ["Aviv Orly (School of Physics and Astronomy, Tel Aviv University, Israel), Ori Shem-Ur (School of Physics and Astronomy, Tel Aviv University, Israel), Yaron Oz (School of Physics and Astronomy, Tel Aviv University, Israel)"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13077v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Inference-time sampling is a central mechanism for improving large language models, with temperature controlling the tradeoff between reliability and diversity. While recent work suggests that varying temperature across samples can improve multi-sample inference, simple fixed-temperature schemes remain the standard in practice. We investigate this discrepancy in the canonical pass@K setting, asking when temperature diversity is useful, and when a single tuned temperature suffices. To this end, we analyze per-question success probabilities across multiple models and datasets, tracking how they vary with sampling temperature. We identify several consistent properties of these profiles, including that harder questions are less likely to share efficient sampling temperatures, although this trend is only logarithmic in hardness. We then derive an efficient method for evaluating the theoretically optimal multi-temperature allocation scheme, and show that although such a scheme improves performance, its gains over single-temperature baselines are typically modest when temperature is tuned as a function of the sampling budget K. We explain this phenomenon through mathematical mechanisms that we call dulling effects, and show how they ensure the robustness of temperature choices across different question distributions. Our results clarify when multi-temperature sampling is useful, and how temperatures should ideally be chosen.
