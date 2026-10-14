---
title: "Historical Anchors for Scientific Forecasting on Human-Aware Knowledge Graphs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14023"
authors: ["Siu Tin Wu, Ryan C. Barron, Phoebe Upton Sanderbeck, Kim {\\O}. Rasmussen, George Tompkins, Maksim E. Eren"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14023v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Predicting which scientific connections will form next can point researchers toward the most promising leads. One successful approach learns representations by sampling paths through publication networks, represented by a hypergraph, that connect scientific entities, concepts, and researchers, approximating how knowledge and expertise move through the literature. Sampled paths are then used to train an embedding model to forecast scientific connections such as a property of a material. Performance, however, depends strongly on how many paths are sampled: too little sampling yields incomplete representations, while further sampling can eventually weaken prediction quality. The best sampling budget is therefore often identifiable only after future discoveries are known. We introduce Query--Anchor Agreement (QAA), a diagnostic requiring no future labels or separately trained model. QAA can be used to select a sampling budget, and refine or re-rank the resulting forecast to improve forecasting scientific connections. QAA compares the candidates a model predicts for a target with those most similar to the target's known historical examples, and identifies when these two views converge. Across thermoelectric-material and COVID-19 drug-repurposing benchmarks, repeated random-seed runs, and three sampling policies, QAA-selected budgets fall on average 1.86 percentage points below hindsight-optimal selection for broad candidate recovery. Further, promoting candidates supported by both views, under a capped fusion that bounds the anchor contribution, improves broad recovery across all six benchmark-policy settings, which define the types of network walks used for sampling.
