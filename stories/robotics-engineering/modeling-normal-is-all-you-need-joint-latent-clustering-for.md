---
title: "Modeling Normal Is All You Need: Joint Latent Clustering for Anomaly Detection in Multimodal Cyber-Physical Systems"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06094"
authors: ["Alexander Apartsin, Yehudit Aperstein"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2607.06094v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.06094v1 Announce Type: new Abstract: Faults on a cyber-physical system (CPS) are too rare and unrepresentative to characterise, or even to select a model on, so detection must instead model normal behaviour; the standard point-adjusted evaluation, however, rewards detectors that never do. CPS normal behaviour is the union of many imbalanced, curved, thin-fringed operating regimes rather than a single blob; we state this structure as ten assumptions (A1-A10), abbreviated Massive, Implicit, Imbalanced Multimodality (MIIM). We model the normal law with a jointly learned latent representation plus explicit Gaussian-mixture mode clustering, scored in the latent rather than by a global density or a reconstruction residual, and evaluate under a deliberately fair protocol: raw point-wise metrics with no point adjustment, a trivial-detector difficulty split, prevalence-matched F1, and train-normal-only calibration. On three real CPS datasets (WADI, HAI, SKAB), the detector wins both the combined column and the difficult correlation/dynamics-fault column on all three, reaching difficult-subset AUROC 0.831 on HAI, 0.726 on WADI, and 0.610 on SKAB. The margin is largest on the two multimodal datasets the MIIM assumptions target and slimmest on the near-unimodal one, tracking multimodality as the thesis predicts, and it holds against three deep detectors (USAD, TranAD, GDN) re-computed with the same raw metrics, all of which collapse on the difficult subset. The methodological contributions are the MIIM assumption set, the difficulty-stratified fair protocol, and a latent-only score that drops reconstruction because a flexible decoder rebuilds the hard faults faithfully.
