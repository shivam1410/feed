---
title: "What Matters for LLM Persona Simulation: Signal Form in Cold-Start E-Commerce Advertising"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08840"
authors: ["Jiwoo Choi, In Ik Lee, Woo Sung Seo, Minho Lee, Yun Young Choi"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08840v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Estimating advertising performance in cold-start settings is challenging because historical logs are unavailable before launch. Large language models (LLMs) offer a potential alternative by simulating persona-conditioned user responses, but it remains unclear which design choices actually drive LLM-based persona simulation. Using real Google Ads e-commerce campaign data across five demographic segments, we identify three signal-form dimensions that affect simulation quality: (i) a demographic anchor without noisy rich attributes, (ii) a relative qualitative banner-blindness signal rather than quantitative anchors, and (iii) prompt phrasing. On this campaign, our method attains an MAE of 24.9 and a MAPE of 26.1%, a 51.3% lower MAE than the best tested non-LLM baseline and 77.3% lower than an LLM configuration using explicit CTR anchors. Systematic ablations show that minimal demographic descriptions achieve lower mean error than richer persona configurations, while relative qualitative cues substantially outperform the tested quantitative anchors. We additionally compare these configurations with direct-prior and rule-based baselines and with alternative LLM configurations.
