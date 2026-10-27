---
title: "Controlled Evaluation of EEG Foundation Models: Random Initialisation, Band-Power and Validation-Selected Probes"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32067"
authors: ["Mingyu Jeon, Suwan Cho, Jae Young Suh"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32067v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

EEG foundation models report downstream gains, yet their protocols seldom include three controls. These are the same encoder untrained, spectral features fitted on the same data, and a layer picked without looking at test scores. We therefore evaluate five publicly released EEG foundation models and an in-house JEPA-style model under one protocol with all three controls and several seeds, on five benchmarks and four added task families. The controls change the reading in three ways. First, picking the probed layer by its test score raises the layer-wise peak by an average of +0.034 and reverses the peak-versus-output gap in 9 of 36 cells. Second, with the layer picked on validation, random initialisation matches or beats pretraining for half of the models on sleep and emotion, and no model beats a five-band log-power baseline on emotion or motor imagery. Third, after full fine-tuning only 5 of 30 pairs gain beyond twice their seed spread, and the one clear loss of -0.290 AUROC persists under matched learning rates. From these results we draw four reporting practices, and we release every cell for re-analysis.
