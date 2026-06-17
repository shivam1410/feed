---
title: "The Critical Role of Model Selection in Causal Inference: A Comparative Analysis of Classification Models within the InferBERT Framework for Pharmacovigilance"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17113"
authors: ["Csaba Kiss, Roland Molontay, Gabriele Pergola"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17113v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17113v1 Announce Type: new Abstract: Distinguishing causal adverse drug events (ADEs) from spurious correlations remains a central challenge in pharmacovigilance. The InferBERT framework integrates transformer models with Do-calculus, but its success hinges on the underlying classification model. This study evaluates the impact of model choice in InferBERT, assessing whether simpler models suffice, if domain-specific pre-training helps, whether scaling to LLMs improves causal detection, and the effect of post-hoc calibration. We performed a comparative study on two benchmarks: Analgesics-induced Acute Liver Failure (AILF) and Tramadol-related Mortalities (TRAM). Four models were evaluated-XGBoost (baseline), ALBERT (original InferBERT), BioBERT (biomedical transformer), and Med-LLaMA (medical LLM)-using 5-fold cross-validation repeated over 20 runs. We measured accuracy, Expected Calibration Error (ECE) pre- and post-isotonic regression, and Jaccard concordance of causal terms with PRR, ROR, and EBGM; significance was tested with paired t-tests. BioBERT achieved the highest accuracy on both datasets, while Med-LLaMA underperformed despite its size and parameter-efficient fine-tuning. Domain-specific pre-training was decisive. Calibration improved ECE but had mixed effects on accuracy and causal discovery. BioBERT's superiority also yielded the strongest concordance with traditional pharmacovigilance signals. These results show that domain-specific pre-training provides a clear advantage over simpler baselines and larger LLMs. Investing in manageable, domain-aware models is more effective for computational pharmacovigilance than simply scaling model size.
