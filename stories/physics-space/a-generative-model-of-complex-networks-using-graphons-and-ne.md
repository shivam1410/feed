---
title: "A Generative Model of Complex Networks Using Graphons and Neural Inverse Operators"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02439"
authors: ["Wooseong Choi, Italo'Ivo Lima Dias Pinto, Chen Sun, Gaurav Gupta, Dong Song, Paul Bogdan"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.02439v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Generative graph models are central to understanding and simulating complex networks. However, existing approaches have complementary strengths and limitations. Mechanistic models offer interpretability but rely on instance-specific estimation methods. Deep generative models, on the other hand, offer amortized inference at the cost of interpretability and are largely limited to graph sizes seen during training. Scientific applications motivate a framework that retains the strengths of both paradigms. We bridge them by formulating both the generative model and parameter recovery in function space. A multifractal step graphon extends standard step graphons with a recursive construction that compactly parameterizes complex networks. This formulation admits a neural inverse operator to recover its parameters, enabling inference on unseen graph sizes. We evaluate our model, trained only on synthetic multifractal step graphon realizations, against both paradigms. Against a graph foundation model pretrained on empirical networks, our method achieves the best average performance on three of four metrics in a zero-shot graph-generation benchmark, indicating that the model transfers to real-world graphs. We also apply our method to single-observation networks, a regime largely inaccessible to deep models that require training corpora, where it performs comparably to an instance-specific method that optimizes on each graph. In a multi-subject EEG case study, the inferred parameters track a reversible change in brain state more sensitively than traditional network statistics. Together, these results indicate that mechanistic interpretability and amortized inference can be effectively unified in a generative graph model to enhance our understanding of complex networks.
