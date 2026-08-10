---
title: "MiGHT-EHR: A Multi-task Graph Transformer for Heterogeneous Temporal Electronic Health Records"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06430"
authors: ["Anirudh Rayas, Yuan Wang, Pavan Turaga"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.06430v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06430v1 Announce Type: new Abstract: Learning from Electronic Health Records (EHRs) has gained significant attention due to its potential to improve clinical prediction. However, effective learning remains challenging because EHRs encode heterogeneous, temporally ordered clinical interactions. In particular, EHRs contain: (i) heterogeneous clinical entities, including patients, visits, diagnoses, prescriptions, and procedures, together with their heterogeneous interactions, (ii) longitudinal patient trajectories across hospital visits and (iii) shared statistical dependencies across related clinical prediction tasks. Existing EHR learning methods capture only a subset of these properties. To bridge this gap, we propose Multi-task Graph transformer for Heterogeneous Temporal EHRs (MiGHT-EHR), which jointly models all three within a unified representation learning method. MiGHT-EHR constructs a heterogeneous graph from EHRs in which nodes represent clinical entities and edges connect statistically associated entities identified via normalized point-wise mutual information. Across MIMIC-III and MIMIC-IV datasets, MiGHT-EHR outperforms state-of-the-art methods on average across four tasks: drug recommendation, prediction of length-of-stay, mortality, and readmission, with particularly strong improvements in mortality and readmission prediction. Furthermore, a post-hoc analysis of the learned representations reveals that patient neighborhoods are organized by clinical outcomes, salient medical concepts are recoverable as linear directions in the representation space, and task probabilities are well calibrated. Collectively, these findings demonstrate that MiGHT-EHR representations support diverse prediction tasks while preserving clinically interpretable structure.
