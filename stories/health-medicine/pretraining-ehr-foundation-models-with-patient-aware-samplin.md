---
title: "Pretraining EHR Foundation Models with Patient-Aware Sampling"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22114"
authors: ["Joshua Placidi, Yuxuan Liu, Jinpei Han, Marek Rei, A. Aldo Faisal"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2607.22114v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

Standard EHR pretraining concatenates patient records into one stream, mixing patients and overweighting longer records. Patient Sampling instead distributes training signal across patients via stochastic weighting. Tested on MIMIC-IV v2.2 and v3.1, this improved Macro AUROC and AUPRC on downstream clinical tasks, demonstrating that sequence construction—not just architecture—is a critical design choice for autoregressive EHR foundation models.
