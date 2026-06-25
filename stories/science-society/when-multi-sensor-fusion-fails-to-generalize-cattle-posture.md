---
title: "When Multi-Sensor Fusion Fails to Generalize: Cattle Posture Classification Under Animal-Level and Temporal Distribution Shift"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24986"
authors: ["Leutrim Uka, Severino Pinto, Gundula Hoffmann, Marina M. -C. H\\\"ohne"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24986v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24986v1 Announce Type: new Abstract: Automated cattle posture-classification systems frequently report near-perfect accuracy, yet their robustness under realistic deployment conditions remains largely unknown. In particular, it is unclear whether multimodal sensor fusion improves generalisation or leads models to rely on context-specific signals that fail under distribution shift. Here, we evaluate the robustness of automated posture classification (lying versus standing) using collar accelerometers, rumen-bolus sensors, and environmental measurements collected from a pasture-based beef cattle herd across two consecutive years (2024-2025). XGBoost served as the primary model, with Logistic Regression, Random Forest, and Long Short-Term Memory networks evaluated as comparative baselines. Model robustness was assessed under progressively more stringent evaluation protocols, ranging from conventional random train-test splits to leave-one-animal-out validation and cross-year evaluation on an independent cohort of previously unseen animals recorded one year later. While multimodal models achieved strong within-year performance (macro-F1 0.94), the performance declined substantially under cross-year evaluation (macro-F1 0.49). Explainability analysis revealed persistent reliance on rumen-bolus activity and environmental variables even when predictive performance deteriorated. Distribution-shift diagnostics further confirmed substantial differences in feature distributions between recording years. Our findings demonstrate that commonly used evaluation protocols can substantially overestimate real-world performance and that multimodal sensor fusion may reduce, rather than improve, robustness under temporal distribution shift. More broadly, the results highlight that benchmark accuracy alone is insufficient to assess deployment readiness and underscore the need for robustness-centred evaluation in livestock-monitoring research.
