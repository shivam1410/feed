---
title: "Towards Fast GNN Surrogates for CO2 Migration in Complex Geological Formations"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17180"
authors: ["Rodrigo S. Luna, Thiago H. N. Coelho, Luiz S. L. Neto, Roberto M. Velho, Adriano M. A. Cortes, Renato N. Elias, Alexandre G. Evsukoff, Fernando A. Rochinha, Mauricio Araya-Polo, Herve Gross, Alvaro L. G. A. Coutinho"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17180v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17180v1 Announce Type: new Abstract: This chapter discusses how a data-driven machine learning approach can reproduce key aspects of the physical behavior of multiphase flows in complex geological formations. We propose an end-to-end graph neural surrogate tailored to CO$_2$ plume migration forecasting in geological storage. The method is evaluated on the SPE11A benchmark, a well-known industry test case designed to assess CO$_2$ storage scenarios and characterized by sharp gas-water interfaces, strong advective transport, and rapid convective mixing with fingering development. The benchmark is reformulated as a graph in which nodes represent computational cells and edges encode transmissibility-based interactions enriched with geometric attributes. Directional transport arising from grid geometry, permeability contrasts, and geological heterogeneity is captured through an anisotropic message-passing mechanism, where interaction weights are computed via geometry-conditioned edge embeddings, biasing message aggregation toward physically relevant transport directions. Temporal evolution is modeled in latent space using an autoregressive residual formulation trained with multi-step supervision. The proposed model produces competitive forecasts of gas saturation and liquid-phase density, which are key indicators for CO$_2$ storage monitoring, with cumulative errors that remain moderate over extended forecasting horizons.
