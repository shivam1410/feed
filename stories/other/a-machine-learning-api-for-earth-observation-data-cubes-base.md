---
title: "A Machine Learning API for Earth Observation Data Cubes Based on openEO"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13453"
authors: ["Brian Pondi, Jonas Hurst, Rolf Simoes, Jonas Starke, Marius Appel, Edzer Pebesma"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13453v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13453v1 Announce Type: new Abstract: Earth Observation (EO) data are increasingly organized as spatio-temporal data cubes, while machine learning (ML) methods operate on tabular feature matrices or structured tensor inputs. This mismatch forces platform-specific transformations that are difficult to reproduce or transfer across cloud infrastructures. The openEO specification provides a unified interface for EO data access and processing across heterogeneous backends, but lacks a standardized approach for ML integration. We propose a process-level ML specification for openEO structured into three stages: model initialization, model actions (training, tuning, inference, validation), and model management. It supports classical algorithms such as Random Forest and SVM, as well as deep learning architectures for time-series and spatial patch-based modeling, including TempCNN, Temporal Attention Encoders, and foundation model inference. Three prototype implementations in R and Python demonstrate feasibility across diverse technology stacks. A crop type mapping use case demonstrates cross-backend interoperability by submitting an identical process graph to independent R and Python backends and comparing predictions and evaluation metrics. Two further use cases demonstrate deep learning on time series and foundation model inference, each executed on a dedicated backend. The prototypes reveal, however, that full cross-backend portability requires deeper harmonization of serialization formats and execution semantics than the process level alone can enforce; backend library versions and preprocessing conventions outside the specification's boundary also affect reproducibility. Addressing both through explicit backend conformance profiles represents the most important near-term direction. The specification advances the reproducibility, portability, and accessibility of ML workflows on EO data cubes across cloud platforms.
