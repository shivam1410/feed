---
title: "RadRef: A Reference-Free Metric for Radiology Report Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13168"
authors: ["Shelly Schwartz, Alan Ropp, Michael B. Sneider, Nur Yildirim, Cree M. Gaskin, Chirag Agarwal"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13168v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

AI-generated radiology reports are usually evaluated by comparison with a radiologist-authored reference, leaving no way to score them when no reference exists. We introduce RadRef, a reference-free metric that scores report claims against image-derived beliefs over a clinical finding vocabulary, weighted by relevance to the clinical indication. On ReXVal, RadRef achieves 73.1% agreement on non-tied same-radiograph report pairs with radiologist rankings, comparable to leading reference-based metrics overall. It is also competitive on false findings and has its clearest relative result on omissions (missed findings). We further evaluate 100 model-generated and 100 radiologist-authored reports from 100 MIMIC-CXR studies, all independently annotated by two board-certified radiologists. On omissions, RadRef attains Kendall's tau-b = 0.295, against 0.386 between the two readers themselves, and no compared metric differs significantly from RadRef on this target. The same image-grounded representation provides a false-finding readout, RadRef-FF, with tau-b = 0.32 on ReXVal and 0.29 in the reader study, without requiring a reference. Controlled perturbations confirm that RadRef depends on the radiograph, report, and clinical indication. RadRef enables image-grounded evaluation before a radiologist-authored reference exists, supporting quality monitoring of report-generation systems in clinical settings, and complements reference-based metrics when one is available.
