---
title: "From Hybrid Mechanistic--Data-Driven Modeling Toward Neuro-Symbolic AI: What, Why, and How"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22811"
authors: ["Moein E. Samadi, Andreas Schuppert"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2607.22811v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22811v1 Announce Type: new Abstract: Hybrid mechanistic/data-driven models, which combine first-principles with learned components, are increasingly used in process engineering and scientific machine learning. Common hybrid modeling designs are specified primarily through their architectures and training losses, which offers a limited basis for a shared semantic interface to compare or verify them across domains, with comparatively little attention paid to epistemic uncertainty in the mechanistic part. We bridge hybrid modeling and neuro-symbolic (NeSy) AI by reconstructing these designs as instances of NeSy interface. The resulting translation, Hybrid-to-NeSy (H2N), places mechanistic knowledge on the language side, learned modules on the belief side, and validity domains together with constraints on the logic side. For each design, H2N then yields an explicit NeSy inference functional and a logic-belief decomposition. From this decomposition we derive two metrics: structural violation rate (SVR), measuring whether the learned belief respects the mechanistic structure; and belief dispersion (BD), measuring how concentrated the learned plausibility is, serving as a hybrid model's epistemic uncertainty in its mechanistic part. We instantiate H2N on a case study of a structured hybrid model for binary classification under label noise and show that models with higher SVR and BD exhibit greater variability in held-out accuracy. Under structural distribution shift, H2N further quantifies a model's uncertainty during extrapolations, whereas test accuracy reveals the same shift only post hoc.
