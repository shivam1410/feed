---
title: "Generative Learning of Separatrices"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14743"
authors: ["Ellis R. Crabtree, Dimitris G. Giovanis, Anastasia Georgiou, George Datseris, Ioannis G. Kevrekidis"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14743v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14743v1 Announce Type: new Abstract: The identification and reconstruction of the boundaries separating basins of attraction in multistable, multidimensional dynamical systems presents a fundamental challenge in computational dynamics. These structures govern transition pathways and other important large timescale behavior, yet they remain typically under-sampled since their neighborhood does not get routinely visited during direct simulations. Traditional computational approaches face computational limitations in high-dimensional systems and require a priori knowledge of the dynamical system and its equations. Simplistic sampling methods such as random or uniform sampling of the phase space typically fail to quantitatively approximate separatrices and their structure altogether. We introduce and implement a framework that combines supervised classification with generative modeling to address this challenge. Our approach first trains neural network classifiers on uniformly or randomly sampled initial conditions labeled by their corresponding basins of attraction in the system of interest. Using uncertainty metrics of the trained classifier to quantify decision boundaries, the method then identifies these high uncertainty regions and boundaries of the classifier as preliminary approximate separatrices. Subsequently, score-based generative models are trained specifically on samples from high-uncertainty regions, ultimately generating densities of samples consistent with the empirical density of samples on or close to the manifold that constitutes the separatrix between basins in the sampled region. This approach leverages the complementary strengths of (a) discriminative models for global phase space partitioning and (b) generative models for detailed geometric sampling, resulting in a systematic, iterative, data-driven framework that produces empirically consistent reconstructions of (approximate) separatrix manifolds.
