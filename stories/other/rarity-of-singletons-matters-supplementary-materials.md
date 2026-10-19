---
title: "Rarity of Singletons Matters & Supplementary Materials"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22604"
authors: ["Pragatheeswaran Vipulanandan, Kamal Premaratne, Dilip Sarkar"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.22604v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Estimating missing-mass and unseen-species counts from finite samples relies heavily on rare-event occupancy statistics, particularly singletons. In small-sample regimes, these statistics can be highly variable, making classical estimators sensitive to sampling fluctuations and potentially unreliable. We propose a fragility-aware (FA) framework that explicitly quantifies this sensitivity and adaptively regularizes conventional missing-mass and unseen-species estimators. Using singleton-based fragility measures derived from probability mass and occupancy counts, we formulate an entropy--Kullback--Leibler (KL) optimization that adjusts the reliance on base estimates according to their fragility. The resulting objectives are strictly concave, admit unique closed-form solutions, and require no Poissonization or asymptotic approximations. The framework provides a lightweight correction to classical estimators, including Good--Turing and Good--Toulmin, while reducing reliance on potentially unstable rare-event statistics. Across 360 experimental configurations spanning synthetic distributions and real-world language corpora, our method remains competitive in stable regimes while improving estimation accuracy and stability in fragmented, long-tailed, and small-sample settings. The findings demonstrate that accounting for the fragility of rare observations can improve the reliability of inference about unobserved species and their associated probability mass.
