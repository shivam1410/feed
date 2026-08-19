---
title: "An automatic-differentiation framework for time-lapse electrical resistivity tomography inversion of hydrologic dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14661"
authors: ["Pu Yang, Zhengyang Fang, Yuxin Liu, Xuan Su, Deshan Feng, Hang Chen"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14661v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14661v1 Announce Type: new Abstract: Time-lapse electrical resistivity tomography (TL-ERT) provides spatially distributed information on subsurface hydrologic changes. However, inversion of long monitoring sequences is computationally demanding. Modifying the data misfit, regularization, model parameterization, or petrophysical transformation may also require new gradient derivations and separate implementations. Here, we present AD-TLERT, a unified, GPU-accelerated framework for time-lapse ERT inversion based on automatic differentiation. The framework integrates model parameterization, differentiable petrophysical transformations, forward modeling, data misfit, regularization and auxiliary constraints into a single computational chain. Alternative inversion formulations can therefore reuse the same PDE derivative implementation without re-deriving the complete ERT sensitivity for each case. Comparisons with pyGIMLi showed close agreement in the forward responses, gradients, and recovered resistivity models. Under the tested configuration, AD-TLERT achieved an approximately 51-fold speedup. Synthetic experiments showed that inversion choices affect the amplitude, geometry, and temporal behavior of recovered anomalies. By propagating gradients through the embedded petrophysical relationship, AD-TLERT enabled direct water-content inversion and yielded more accurate estimates than post-inversion conversion for the tested model. A field application further demonstrated how ERT, temperature, and soil-moisture observations can be combined to image snowmelt-driven hillslope wetting. AD-TLERT provides an efficient and flexible framework for time-lapse ERT inversion and hydrologic interpretation.
