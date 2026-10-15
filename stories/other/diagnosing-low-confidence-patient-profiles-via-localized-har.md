---
title: "Diagnosing Low-Confidence Patient Profiles via Localized Harmful Covariate Shift Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19178"
authors: ["Olivier Lefebvre (Department of Computer Science, Universit\\'e de Sherbrooke, Sherbrooke, Canada), Hakima Laribi (Department of Computer Science, Universit\\'e de Sherbrooke, Sherbrooke, Canada), Dan Poenaru (Department of Pediatric Surgery, Montreal Children's Hospital, Montreal, Canada, Centre for Outcomes Research and Evaluation), Martin Valli\\`eres (Medical Physics Unit, Department of Oncology, McGill University, Montreal, Canada)"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19178v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Before deploying clinical prediction models, their reliability must be assessed to ensure safe use. Errors may arise from distribution shifts between training and deployment or from heterogeneous performance where the model systematically underperforms for certain patient subgroups. Yet most post-hoc diagnostic methods evaluate reliability only at the population level, checking whether the deployment data resemble the training data and whether the model performs well on average, without accounting for heterogeneity that may cause some patients to be disproportionately affected. We propose a unified diagnostic pipeline that combines both perspectives. MED3pa first discovers interpretable low-confidence patient profiles, and Detectron is then applied within each profile to test whether its degradation is associated with a detectable harmful covariate shift. Across three clinical prediction tasks and three injected subgroup shifts in MIMIC-IV, we find that shift detectability itself is informative. An injected age shift, undetectable at the population level, was nonetheless localized to specific degraded profiles, whereas sex- and race-related shifts were detected broadly and therefore offered little guidance for identifying the most affected patients.
