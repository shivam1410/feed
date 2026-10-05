---
title: "From Behavior to Provenance: Attributing Tabular Foundation Models to Synthetic Pretraining Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02347"
authors: ["Mohamed Bouadi, Nassim Bouarour, Shivam Dubey, Aditya Tanna, Vinay Kumar Sankarapu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02347v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Training-data attribution aims to identify which training examples shape model behavior, yet validating such claims is difficult because causal training influence is rarely observable. We argue that controlled synthetic pretraining makes attribution experimentally testable. Using O'PRIOR, a provenance-rich synthetic task generator for tabular foundation models, we construct a testbed in which every pretraining task carries explicit lineage over structural mechanisms, missingness, confounding, shortcuts, and distribution shift. We combine behavior-conditioned attribution with counterfactual retraining and provenance-aware interventions to test both task-level faithfulness and mechanism-level consistency. On held-out real tasks, removing the top-attributed 5% of synthetic tasks decreases mean ROC-AUC by 0.013, compared with 0.002$\pm$0.004 under random removal, while removing bottom-attributed tasks improves performance by 0.003. Within shortcut-provenance tasks, targeted removal yields an effect of 0.043 versus 0.016 for matched random removal. Provenance discrimination is more modest by ranking AUROC (0.55-0.62), despite substantial top-k enrichment, revealing that provenance association and interventional faithfulness need not coincide. Our results establish synthetic provenance as a controlled setting for verifiable contributive attribution
