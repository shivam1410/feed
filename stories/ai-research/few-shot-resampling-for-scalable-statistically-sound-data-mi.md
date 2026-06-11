---
title: "Few-Shot Resampling for Scalable Statistically-Sound Data Mining"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11235"
authors: ["Leonardo Pellegrina, Fabio Vandin"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2606.11235v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11235v1 Announce Type: new Abstract: A key step in knowledge discovery is the evaluation of data mining results. In several applications, including pattern mining, graph analysis, and others, this step includes the evaluation of the statistical significance of the results, to avoid spurious discoveries due only to noise or random fluctuations in the data. While specialized procedures have been developed for some specific applications, resampling-based approaches are widely used, in particular for complex analyses where analytical results cannot be derived. However, current resampling-based approaches require the generation and analysis of thousands of resampled datasets, and are therefore impractical for large datasets or computationally intensive analyses. In this paper, we introduce FewRS, a simple and effective resampling-based approach to assess the statistical significance of data mining results with rigorous guarantees on the probability of false discoveries. Our approach can be used in every situation where resampling-based approaches are applied. FewRS builds on our derivation of a novel bound to the supremum deviation of test statistics representing the quality of data mining results. We prove that FewRS needs to generate and analyze an extremely small number of resampled datasets, leading to a highly scalable approach with wide applicability. We test our approach on common tasks such as pattern mining and network analysis. In all cases, our approach results in a reduction of up to two orders of magnitude in running time compared to the state of the art, while preserving high statistical power, enabling the statistical validation of data mining results on large-scale real-world datasets.
