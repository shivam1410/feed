---
title: "Data Fusion and Contrastive Alignment for Unconstrained IR Molecular Structure Elucidation"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26164"
authors: ["Ethan J. Mick, Campbell A. Sweet, Matthias J. Young, Derek T. Anderson"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.26164v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26164v1 Announce Type: new Abstract: Automated molecular structure elucidation from infrared (IR) spectroscopy data has seen significant advancements in recent years, but its broad applicability is limited by a reliance on pre-determined chemical formulas provided as auxiliary model inputs. This limits model predictions to isomer identification rather than full molecular structure prediction. Although transformer models have been shown to identify molecular isomers with high accuracy, their reliability for unconstrained structure elucidation is comparatively low and poorly understood. In this work, we propose and evaluate key modifications to the traditional encoder-decoder transformer. To better address the vast chemical space of the unconstrained problem, we implement a novel Mixture-of-Experts (MoE) decoder module that utilizes non-additive aggregation via linear-order statistics and the Choquet integral. We further modify the transformer to utilize these non-additive operators when aggregating spectral representations as well. Together with an auxiliary contrastive alignment loss term, these enhancements improve Top-K prediction accuracy by over 10 percentage points compared to baseline IR-only models. Through sub-structure fragment analysis of molecular predictions, we further confirm that infrared spectra encode the vast majority of relevant chemical information, implying that the higher performance of isomer-ranking models is largely due to underrepresented or overlapping absorption bands for molecules in the explored chemical space. Ultimately, by demonstrating the efficacy of automated molecular structure elucidation from measured IR spectra, this work serves to significantly broaden the utility of AI in analytical chemistry.
