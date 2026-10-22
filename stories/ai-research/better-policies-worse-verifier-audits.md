---
title: "Better Policies, Worse Verifier Audits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.29029"
authors: ["Daniel Cie\\'slak, Jacek {\\L}ubi\\'nski"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.29029v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Verifier stacks increasingly sit inside post-training and test-time compute loops. We study a specific control loop: a component verifier is evaluated on fresh policy outputs against the full success label and refreshed when that aggregate score falls. For a conjunctive target $y = F \wedge M$, its on-policy AUC is $(1-q)A_{\mathrm{own}} + qA_{\mathrm{cross}}$, where $q = \Pr[F=1 \mid y=0]$. As the policy masters $F$, $q$ can rise toward one, removing weight from $F$-failures and rewarding information about $M$. We call this on-policy audit collapse. We derive a sharp identified set, a complete-erasure threshold, and the exact point at which the audit can prefer a worse component verifier; its population optimum is the full-outcome predictor, not the component oracle. An exact oracle exhibits the collapse, a natural multi-label text control shows inversion can select a head with lower canonical $F$-AUC at the observed failure mixture, and a prediction-registered ECG study shows that acting on the audit can reduce off-policy $F$-AUC, transfer the damage to an unseen generator, and increase downstream constraint violations. Preserving own-failure support prevents the damage. Matching label-complexity bounds and a controlled-mixture audit give the corresponding repair: audit the component on its own failures, and keep those failures in the refresh distribution.
