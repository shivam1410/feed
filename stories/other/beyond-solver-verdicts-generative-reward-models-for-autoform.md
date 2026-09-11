---
title: "Beyond Solver Verdicts: Generative Reward Models for Autoformalization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11085"
authors: ["Vikash Singh, Debargha Ganguly, Aman Goel, Ali Torkamani, Xiaoxue Han, Joseph Lilien, Ferhat Erata, Vipin Chaudhary"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11085v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11085v1 Announce Type: new Abstract: Neurosymbolic systems rely on mathematical solvers to guarantee reasoning correctness, yet solvers are fundamentally blind to whether a formal translation maintains strict reference-equivalence to a designated formalization. We formalize this vulnerability as Verdict-Preserving-Unfaithfulness (VPU): a failure mode where an incorrect encoding executes successfully and matches the expected verdict. We theoretically prove that structural, verdict-only verification heuristics are mathematically bounded to chance-level detection on these deceptively valid traces. To resolve this, we introduce Generative Verification (GenV), which distills an offline Z3-equivalence oracle into a reference-free, continuous reference-equivalence score by repurposing the language model's native vocabulary space. Mechanistic analysis via decision-projected logit lenses and sparse autoencoders shows this generative readout natively extracts precise spatial error coordinates without explicit localization training. Empirically, our oracle-mined verifier (GenV+HN) achieves 0.961 AUROC in reference-equivalence verification, generalizes zero-shot across unseen translators and divergent formal styles, and yields an 11.3-point downstream accuracy gain in agentic test-time compute allocation.
