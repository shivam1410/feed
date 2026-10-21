---
title: "TWIN-MoE: Two-stage Intra-Expert Imputation Network for Incomplete Multimodal Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24014"
authors: ["Liang Nathan Zheng, Jiyuan Liu, Wenhao Liang, Wei Emma Zhang, Weitong Chen, Lin Yue"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.24014v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Recent Mixture-of-Experts (MoE) approaches address missing modalities either by routing each missingness pattern to a dedicated expert, which scales poorly as the number of modalities grows, or by imputing the missing modality from representations contributed by multiple experts, which requires a costly retrieval mechanism. We show that routing induces expert-conditioned representation neighborhoods and derive an imputation-error bound controlled by their local feature dispersion. When these expert-conditioned neighborhoods are more compact than the global representation space, intra-expert aggregation admits a tighter worst-case reconstruction bound than unconstrained global aggregation. Guided by this analysis, we propose TWIN, a two-stage intra-expert imputation framework. Pre-imputation generates a context-conditioned estimate in the encoder embedding space and radially soft-clips it using modality-specific statistics maintained in an observed FIFO queue, this ensures that the pre-imputed modality stays in empirically calibrated region of the target modality space. Post-imputation refines the missing representation after MoE by aggregating expert-conditioned observed representations within the same sample. Across four missing-modality benchmarks under natural, random, and asymmetric dropout protocols, TWIN achieves state-of-the-art performance while using substantially fewer parameters than competing MoE-based imputation methods.
