---
title: "Flagging Batch Shift in Flow Cytometry using Jeffreys Divergence between Gaussian Mixtures"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31321"
authors: ["Jonathan Legrand (MONC, IMB), Aguirre Mimoun (Centre m{\\'e}dico chirurgical Magellan), Audrey Bidet (Centre m{\\'e}dico chirurgical Magellan), Pierre-Yves Dumas (Centre m{\\'e}dico chirurgical Magellan), Christ{\\`e}le Etchegaray (MONC, IMB), Baudouin Denis de Senneville (IMB, MONC)"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.31321v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Machine learning models for clinical flow cytometry are usually evaluated on data drawn from their training distribution. In routine practice, however, acquisition conditions and reagents may change, potentially making predictions unreliable without warning. We propose a model agnostic criterion for prediction reliability based on a notion of distance from the training distribution: each patient sample is represented by a Gaussian mixture model, and its Jeffreys divergence to a reference fitted on the training data is estimated using Monte Carlo integration. We illustrate our approach on real-life shifted cohorts of acute myeloid leukaemia patients, using a classifier trained to predict NPM1 mutation status. First, we show graphically and statistically that pairwise divergences capture acquisition cohort structure. We then calibrate a rejection threshold on a subset of shifted cohort samples and evaluate it on held-out subjects. Across 20 runs, the misclassification rate of rejected samples was 2.5 times larger than for retained samples. These results suggest that input divergence can help identify unreliable predictions, providing a strong candidate component for abstention frameworks, along with quality control measures and classifier confidence.
