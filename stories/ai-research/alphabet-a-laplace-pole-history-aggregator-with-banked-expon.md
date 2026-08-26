---
title: "ALPHABET: A Laplace-Pole History Aggregator with Banked Exponential Transport"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24051"
authors: ["Daehwa Ko, JaeHyeon Kim, Oh Seong Kwon, Jay Hoon Jung"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.24051v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24051v1 Announce Type: new Abstract: Can a sequence model remain competitive with only a few thousand parameters and an explicitly auditable prediction interface? We introduce ALPHABET, a compact linear-time model that compresses temporal history into stable complex pole modes: a direct bank synthesizes its modal states back into the feature trajectory, an independent cascaded bank analyzes the transformed trajectory without resynthesis, and an affine head reads only modal energies and lag moments from both banks. We characterize the temporal information this descriptor retains: for a stationary, fully observed feature process, each mode energy is a frequency-localized measurement of the second-order spectrum, the continuum of such measurements identifies the spectrum, and almost every mode separates any fixed finite set of spectrally distinct classes. On a Gaussian control with matched low-lag statistics, the learned descriptor approaches the Bayes oracle where raw autocovariances remain at chance. Across the fixed 82-task registry, ALPHABET attains mean rank 3.97 in the complete ten-family comparison. At the common-width D=64 runtime anchor, its 6,437 parameters deliver 5.02 times faster inference and 3.93 times faster complete training steps than the nine baselines on average.
