---
title: "Mr.Dec: Daily-Scale Longitudinal Multimodal Modeling for 30-Day Readmission Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.16929"
authors: ["Minjun Kim, Jong Hak Moon"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.16929v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.16929v1 Announce Type: new Abstract: Predicting 30-day hospital readmission is essential for assessing patient stability and optimizing healthcare resources. As clinical risk evolves with the accumulation of evidence during hospitalization, capturing these dynamic trajectories is essential. However, many existing approaches compress the complex longitudinal history into fixed representations, often losing the granular, day-level clinical signals that reflect a patient's evolving physiological state. To address this, we propose Mr.Dec (Multimodal Readmission-risk prediction Decoder), which models each admission as a natural chronological sequence of daily multimodal events. By leveraging a Transformer Decoder, Mr.Dec integrates daily Electronic Health Record(EHR) updates and intermittent Chest X-ray(CXR) findings in a time-aligned stream, reflecting the actual clinical workflow. To ensure robustness, we utilize Disease-Specific Supervised Contrastive Learning as an auxiliary regularization to induce a diagnosis-aware structure in the latent space. Evaluations on the MIMIC-IV and MIMIC-CXR datasets show that Mr.Dec achieves state-of-the-art performance by preserving the integrity of the clinical sequence. Furthermore, our model identifies "Critical Days" within an admission, providing actionable and clinically grounded interpretations for real-time risk stratification. Code is available at: https://github.com/yejix-ai/MR.DEC
