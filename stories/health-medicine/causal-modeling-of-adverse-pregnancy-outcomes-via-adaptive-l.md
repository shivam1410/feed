---
title: "Causal Modeling of Adverse Pregnancy Outcomes via Adaptive LLM Proposals"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21079"
authors: ["Kavimayil P. Komarasamy, Saurabh Mathur, Ameet Soni, David M. Haas, Kristian Kersting, Sriraam Natarajan"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2608.21079v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21079v1 Announce Type: new Abstract: Adverse Pregnancy Outcomes (APOs) such as preterm birth and gestational diabetes can have long-term consequences for both the mother and child, yet an understanding of their causes remains elusive. Causal discovery in this domain is especially challenging due to a paucity of data and incomplete domain knowledge. As a result, pure data-driven methods fail, and Large Language Model (LLM) outputs remain inconsistent or contradictory. We introduce a neurosymbolic framework for generating plausible causal hypotheses that iteratively combines the broad prior knowledge of LLMs with empirical scoring on data. Our method treats the LLM as an adaptive proposal distribution, generating hypotheses that are scored against empirical data; the resulting high-scoring graphs are then used to update the LLM's context, steering subsequent generations toward more promising regions of the hypothesis space. We evaluate our approach on a real-world clinical dataset for modeling APOs and their risk factors, comparing our results against an expert-constructed causal graph. Our method recovers all expert-validated edges and identifies additional plausible causal relations not previously listed by experts, potentially providing new insights for targeted interventions.
