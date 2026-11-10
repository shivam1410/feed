---
title: "TripletAD: Weakly Supervised Anomaly Detection in Embedding Space with Rare Anomalies and Scarce Labels"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10352"
authors: ["Sumit Wadhwa, Souvik Nath"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10352v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Many practical anomaly detection problems come with only a handful of confirmed anomalies, and the unreviewed remainder of the data cannot be trusted to be normal. We study this setting under a curated-label protocol, in which unconfirmed anomalies are removed from training rather than relabelled as normal, and propose TripletAD, a weakly supervised detector that learns a triplet-margin embedding and calibrates a linear scoring head with two soft penalties: a partial cross-entropy on labelled anomalies and a relative-contrast hinge that separates the mean scores of anomalous and normal samples. Because every mined triplet contains a labelled anomaly, the few labels are reused across the entire training set instead of being diluted by it. On 24 ADBench datasets whose inputs are pre-trained embeddings (text, image and speech vectors), TripletAD outperforms established state-of-the-art weakly supervised detectors (DevNet, PReNet and DeepSAD) and gradient-boosted trees when anomalies are rare. At a 1% anomaly rate it has the highest mean AUCPR of six methods, 20% above DevNet; on the naturally rare Speech dataset it doubles the best baseline (0.394 vs. 0.196 AUCPR); and on MVTec-AD it is best when only a quarter or half of the anomalies are labelled. Pooled over 70 rare- or sparse-label settings, it has the best average rank (2.21 of 6) and outperforms each baseline under Wilcoxon signed-rank tests with Holm correction. When anomalies are more frequent it performs on par with these methods. The method needs no per-dataset tuning and is insensitive to its loss weights and training length; on raw tabular features, gradient-boosted trees remain the stronger choice.
