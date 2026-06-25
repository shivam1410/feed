---
title: "What Do Language Priors Contribute to Darcy-Flow Inversion? A Mechanistic Audit"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24967"
authors: ["Taiga Saito, Yu Otake, Daijiro Mizutani, Sopheakpolin Mom"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24967v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24967v1 Announce Type: new Abstract: In ill-posed inverse problems, the recovered solution depends as much on the prior as on the data, yet much of the engineering knowledge that could serve as that prior is recorded qualitatively rather than in formal mathematical form. Here we test whether sentence embeddings can act as an inference-time interface for injecting geological descriptions into a learned Darcy-flow inverse solver. Across six synthetic geological classes and an exploratory transfer to a benchmark reservoir model (SPE10), we vary only the conditioning representation and find that text conditioning reduces reconstruction error by 81 % relative to a no-text counterfactual. Most of this gain comes from a categorical, class-level constraint whose value concentrates where the hydraulic head leaves the conductivity field underdetermined, while within-class geometric detail is secondary and pattern-dependent. Compared with a discrete class label, sentence embeddings add little dense-observation accuracy but improve training stability and enable paraphrase-based sensitivity analysis and open-vocabulary inputs. These results show that language priors can serve as an engineering-informatics interface for injecting geological knowledge into learned inverse solvers, while clarifying when they help and what signal they actually carry.
