---
title: "Robust blind unmixing: A geometric approach to overcoming basis variation"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04091"
authors: ["Dumitru Mirauta, Vladimir V. Gusev, Michael W. Gaultois, Matthew J. Rosseinsky, Yannis Goulermas"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.04091v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Signal separation problems are common in science. A prominent example of this occurs during the use of diffraction or spectroscopy to identify the individual components of a mixture by measuring it. In the simplest case, the measured signal is a linear combination of basis patterns corresponding to the constituent parts. The unmixing problem is to infer all or some of these basis patterns and abundances of components from measurements of distinct mixtures. One of the core challenges of this task is the variation of the basis from mixture to mixture due to noise and the exact physics of the measurement process. This is usually addressed with tailored model-based and parametric methods that are then limited in use to specific application domains by the nature of the assumptions made. We propose a novel geometric approach to unmixing problems which views the generation of data during measurement through a metric space lens, thereby shifting the focus from parametrised models to a general relationship between basis transformations and the corresponding geometry. We take advantage of the optimal transport distances to capture commonly occurring basis variations, and use minimisation of in-class variance of candidate solutions to drive the optimisation. We pay special attention to the one-dimensional case due to its practical importance and availability of efficient distance and transport map routines. The effectiveness of our approach is demonstrated on a range of unmixing tasks using random Gaussian mixture models, simulated powder X-ray diffraction, and laboratory hyperspectral imaging datasets.
