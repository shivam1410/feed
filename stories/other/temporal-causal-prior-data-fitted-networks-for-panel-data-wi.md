---
title: "Temporal Causal Prior-Data Fitted Networks for Panel Data with Learned Reliability Signals"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20889"
authors: ["Shravan Talupula, Saurabh Sharma"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20889v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20889v1 Announce Type: new Abstract: Estimating causal effects in industrial time series requires handling temporal dynamics, time-varying treatments, and unobserved confounders. Existing causal foundation models (CausalPFN, CausalFM) operate only on static cross-sectional data; neural temporal methods (CRN, G-Net) require per-dataset training; and concurrent temporal-PFN proposals have not been demonstrated at industrial scale. None output explicit per-pair reliability signals alongside their CATE estimates. We introduce Temporal Causal Prior-Data Fitted Networks (TCPFN), a foundation model for zero-shot temporal causal discovery with learned reliability signals. TCPFN makes four contributions: (1) a Causal Judgment Head that jointly predicts null-effect probability, confounding strength, identifiability, mediation fraction, and causal regime; (2) a mixed training prior covering six causal regimes (independent, direct, confounded, mediated, time-varying confounded, feedback) plus CausalFM-style front-door and instrumental-variable priors; (3) a discrete-token panel-data architecture with cross-attention masking that prevents inter-horizon leakage; (4) zero-shot inference at industrial scale via FAISS-based context selection and one-step posterior correction. On 19 benchmark datasets across five domains, TCPFN achieves competitive zero-shot causal discovery: AUROC 0.96 on Tennessee Eastman, 0.93 on SWaT, 0.98 on Causal Rivers, 0.97 on CAUSRCA. The null detector reaches NullF1 0.94, AUROC 0.99. TCPFN scales to V=1,275 on a proprietary Kraft pulp-and-paper dataset in 6 hours on a single GPU; PCMCI, a CPU-only library, on a V=666 sub-panel of the same data took 81.5 hours, extrapolating by O(V^2) to ~12.5 days at V=1,275. TCPFN's top edges identify cross-subsystem causal relationships while PCMCI's surface within-instrument controller-measurement coupling -- a scalability case study.
