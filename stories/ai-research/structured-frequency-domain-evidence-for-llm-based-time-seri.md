---
title: "Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24113"
authors: ["Jungwook Seo, Sangwon Son, Minjeong Kim, Seungmin Han, Seojin Yoo, Sungyong Baik"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.24113v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24113v1 Announce Type: new Abstract: Time-series anomalies can appear not only as pointwise deviations but also as changes in recurring temporal structure, such as shifted periodicity or localized oscillatory fluctuations. However, existing LLM-based time-series anomaly detection methods mainly expose time-domain evidence through indexed values, plots, or de-seasonalized representations, leaving spectral structure implicit. We propose an evidence-augmented zero-shot TSAD framework that preserves indexed de-seasonalized observations while adding compact frequency-domain evidence computed with the Fast Fourier Transform (FFT). The evidence is constructed at two resolutions: global frequency-domain evidence summarizes sequence-level periodic context, while local frequency-domain evidence captures time-localized spectral departures. Experiments on AnomLLM with InternVL2-LLaMA3-76B, Qwen2.5-VL-72B-Instruct, Gemini-2.5-Flash, and GPT-4o, together with evaluation on the TSB-AD-U subset, show that explicit frequency-domain evidence improves LLM-based TSAD baselines. These results suggest that frequency-domain evidence can complement indexed and de-seasonalized time-domain inputs for zero-shot LLM-based TSAD.
