---
title: "A Clinical Evaluation of Conformal Prediction for Chest Radiograph Report Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10288"
authors: ["Nikolaos Kontogeorgis, Pascal Krezer, Klaus-Rudolf Kladny, Arne Estler, Christian F. Baumgartner, Lisa Koch, Saif Afat, Michael Muehlebach"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10288v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

While multimodal large language models (MLLMs) have improved automated radiology report generation, they remain prone to hallucinations, necessitating clinically meaningful risk-control methods. Conformal prediction (CP) provides statistical guarantees, yet existing CP approaches rely on uncalibrated automated extractors and fail to account for the clinical relevance of errors. We introduce clinical admissibility criteria (CLARITY), a framework for evaluating radiology reports that explicitly distinguishes clinically consequential errors from minor deviations. To eliminate reliance on automatic judges, we collected radiologist annotations of MLLM-generated reports using CLARITY. By benchmarking CP strategies and automatic evaluation metrics against these expert annotations, we demonstrate that commonly used admissibility proxies systematically fail to detect clinically relevant errors. Our findings reveal that automated admissibility judgments are largely decoupled from true clinical admissibility.
