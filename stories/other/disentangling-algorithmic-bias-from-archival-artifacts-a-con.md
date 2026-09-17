---
title: "Disentangling Algorithmic Bias from Archival Artifacts: A Controlled Audit of Vision-Language Model Valuation in Metropolitan Museum Archives"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17572"
authors: ["Manpreet Singh, Rhythm Bhatia, Rahul Joshi"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17572v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17572v1 Announce Type: new Abstract: Auditing vision-language models (VLMs) for societal bias requires distinguishing direct algorithmic valuation disparities from confounders embedded within archival metadata. In this study, we audit Contrastive Language-Image Pretraining (CLIP) models using historical artwork metadata from the Metropolitan Museum of Art Open Access collection (N = 1,500 total objects; N = 743 attributed works: Male n = 534, Female n = 209; n = 618 anonymous). We establish a quantitative audit framework evaluating zero-shot CLIP logit differential scores across three semantic prompt pairs (masterpiece, quality, and influence). Unadjusted evaluations demonstrate high score convergence without a statistically significant main gender effect under OpenAI CLIP (mu_F = -0.0067 vs mu_M = -0.0035, p = 0.1829) or OpenCLIP (mu_F = 0.0171 vs mu_M = 0.0237, p = 0.1224). Two One-Sided Tests (TOST) confirm statistical equivalence across Cohen's d >= 0.25 bounds (pTOST 0.20). High residual embedding variance (R^2 < 2%) indicates that global zero-shot valuation metrics operate near an embedding noise floor, showing that broad zero-shot prompt logit differentials are a coarse measurement instrument rather than proving absolute model fairness. We highlight two key caveats: (i) macro-level score equivalence reflects metric insensitivity to fine-grained visual-semantic features and does not preclude localized micro-level visual biases, and (ii) excluding 41.2% unattributed holdings reflects institutional survival bias. These results demonstrate the necessity of multivariate confound control, equivalence testing, and archival provenance auditing when assessing AI fairness in cultural heritage collections.
