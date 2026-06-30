---
title: "When Can Conformal Risk Control Certify LLM Outputs? Bounds, Impossibility, and Adaptation for Structured Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.29054"
authors: ["Varun Kotte"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.29054v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.29054v1 Announce Type: new Abstract: Large language models (LLMs) deployed for structured generation (NER, JSON extraction, QA, and classification) lack formal reliability guarantees, and standard heuristic abstention policies miss user-specified risk targets by 7.5--12.5%. We characterize when conformal risk control (CRC) can certify structured LLM outputs and when it provably cannot. First, we prove an impossibility result: when the base risk (\mu > \alpha), any distribution-free method must abstain on at least ((\mu-\alpha)/(1-\alpha)) examples, yielding a closed-form feasibility test: one can check whether CRC will work before running it. Second, we analyze a certification hierarchy across Hoeffding, empirical Bernstein, and a betting-based e-CRC bound, with strict gains in low-variance/large-sample regimes: the Hoeffding-to-Bernstein step delivers the largest gain (+37% certified configurations), while e-CRC adds value when calibration data is scarce (10% certification at 20% data versus 0% for Hoeffding). Third, we validate adaptive conformal inference (ACI) under cross-dataset shift, reducing risk-target violations from 71% to 21%, with residual failures concentrated exactly where the impossibility bound predicts. Across six open-weight models (3B--72B parameters), eight datasets, four tasks, and six nonconformity scores, hard NER/QA/CLS configurations are uncertifiable at (\alpha = 0.10); relaxing to (\alpha = 0.30--0.40) unlocks practical certification (47% NER, 40% QA, 60% CLS). The framework gives a three-step deployment recipe: check feasibility, select the bound and score, then mitigate shift.
