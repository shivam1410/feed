---
title: "Anytime-Valid Empirical Likelihood Inference from LLM Annotations with Adaptive Human Auditing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15197"
authors: ["Hongfu Gao, Jiang Hu, Pengfei Liu, Wang Zhou"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15197v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Large language models (LLMs) are increasingly used to annotate unlabeled data as a fast, low-cost alternative to human annotation. However, their outputs can be biased and miscalibrated relative to human labels, potentially leading to misleading analysis and inference. We propose AAELI (Adaptive Human Auditing and Anytime-Valid Empirical Likelihood Inference), an online framework for estimating the population mean of human labels under a limited auditing budget. AAELI uses LLM outputs to guide adaptive human auditing and combines them with audited labels through predictable empirical-likelihood $e$-processes to construct anytime-valid confidence sequences. Our main theoretical result shows that a predictably learned efficient projection preserves the first-order profile empirical-likelihood statistic under adaptive auditing, without requiring a prescribed convergence rate for the projection estimator. This yields an exactly anytime-valid betting construction whose continuous-mixture form incurs a scalar rather than vector-dimensional mixing penalty. Supporting results establish adaptive empirical-likelihood asymptotics and show that a learned audit rule attains the oracle variance within the stated class of augmented estimating-equation designs under the same audit-probability floor and long-run expected budget. Experiments on synthetic data and three real-world datasets demonstrate that AAELI maintains empirical anytime coverage while requiring fewer human audits than the strongest competing baseline to reach a target precision.
