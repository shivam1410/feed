---
title: "xMICD: Explainable Representation of Multiple ICD Codes"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00935"
authors: ["Pat Vatiwutipong, Kumkup Keeratisiwakul, Albert Phuoc Kien Van Truong, Nutcha Yodrabum, Wasin Pansiritanachot, Marvin N. Wright, Thanapon Noraset"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2608.00935v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00935v1 Announce Type: new Abstract: Electronic Health Records (EHRs) are widely used for clinical risk prediction using machine learning. International Classification of Diseases (ICD) codes provide structured information about patient diagnoses, but representing them effectively remains challenging. Existing approaches often face a trade-off between predictive performance and interpretability: grouping-based representations are interpretable but may lose information, while embedding-based representations achieve strong predictive performance but are difficult to interpret. We propose Explainable Representation of Multiple ICD Codes (xMICD), a method for constructing low-dimensional patient representations from sets of ICD codes. xMICD combines clinically meaningful diagnostic groupings with similarity in a pre-trained ICD embedding space. Instead of using binary group membership, the method assigns codes to groups via similarity-based relative assignments, yielding features that reflect how closely a patient's diagnoses align with each clinical group. Experiments on large-scale EHR datasets demonstrate that xMICD achieves predictive performance comparable to embedding-based representations such as ICD2Vec across multiple clinical prediction tasks. At the same time, the resulting features remain clinically interpretable because each dimension corresponds to a recognizable diagnostic group. xMICD therefore provides a practical way to integrate embedding-based semantic relationships into interpretable clinical feature spaces for machine learning models.
