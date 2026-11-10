---
title: "TrialJev: Open-Weight Single Pass Eligibility Scoring for Patient Trial Screening"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10145"
authors: ["Omar Ibrahim, Grant Hamblin, Benjamin Haibe-Kains"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10145v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Clinical trial screening requires assessing large numbers of patient-trial pairs to prioritize candidates for detailed eligibility review, often under restrictions on sharing patient records. We introduce TrialJev, an open-weight eligibility scorer that uses LoRA-adapted Qwen models and a pointer head to score natural-language answer options in a single forward pass, without autoregressive decoding. Trained on TREC Clinical Trials 2021 and evaluated on 6,975 eligible-or-excluded pairs from 50 unseen TREC 2022 synthetic patients, TrialJev achieves 80.97% (Qwen3.5-27B) and 81.84% (Qwen3.8-27B) accuracy, compared with 79.87% and 79.93% for LLMs fine-tuned on the same data to generate verdicts. In matched batch-1 measurements, verdict generation takes 2.45-2.70 times as long as the one-pass inference of TrialJev at 9B-27B. Under a common development-fitted decision correction, the two 27B TrialJev models reach 80.99% and 81.88% accuracy, compared with 81.28% for the proprietary hosted Jev API; paired confidence intervals include zero. TrialJev runs locally on a single GPU, requiring approximately 178 ms per pair at 27B, without transmitting patient text to an external model API. An A/B-logit ablation shows that avoiding decoding, rather than the pointer head alone, accounts for the measured efficiency advantage. TrialJev is intended for first-pass prioritization of candidate trials, complementing rather than replacing explanatory models and clinical review. Evaluation is limited to synthetic patients and implementation-specific timing, and clinical use has not been validated. Adapters, pointer heads, and model cards are released on Hugging Face.
