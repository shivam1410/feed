---
title: "LLM-as-a-Discriminator: When Synthetic Tables Still Look Real"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09865"
authors: ["Manel Slokom, Malek Slokom, Thierno Kante"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09865v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09865v1 Announce Type: new Abstract: Privacy and data sharing are often in tension. Many organizations use synthetic data to reduce privacy risk and still share useful data. For tabular data, auditing privacy remains hard. In many cases, even humans cannot easily tell if a table is real or synthetic. In this paper, we propose a method based on LLM discrimination. We ask an LLM to classify each table sample as REAL or SYNTHETIC. We test two settings: C1 with table only, and C2 with table plus distributional metadata. We use LLaMA as an open model and Gemini as a reference model. In our experiments, we run three synthesis models, CTGAN, TVAE, and Gaussian Copula, on two public datasets, UCI Adult and ACS Census. We collect 451 valid trials. Our results show clear differences between models. On Adult, LLaMA reaches DRS=0% in reported cells, while Gemini reaches DRS=100% for CTGAN and TVAE. On Census, LLaMA predicts SYNTHETIC for most samples, while Gemini stays high in C1 but drops for CTGAN and TVAE in C2. We also compare with a classifier two-sample test (C2ST) and record linkage as distributional baselines, and with a human pilot of 2 annotators and 240 trials. Our results show that LLM discrimination is a practical privacy audit signal when model choice, per provider reporting, and data encoding are handled with care. For reproducibility, code and experiment scripts are available at https://github.com/SlokomManel/LLM-as-a-Discriminator.
