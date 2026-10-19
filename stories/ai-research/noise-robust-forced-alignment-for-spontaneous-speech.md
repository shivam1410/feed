---
title: "Noise-Robust Forced Alignment for Spontaneous Speech"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22583"
authors: ["Laurin Wagner, Mario Zusag"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.22583v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

We show that forced aligners degrade on spontaneous, noisy real-world speech, and that fillers, laughter, and disfluencies corrupt word boundaries, impacting many downstream applications. We revisit the classical GMM-HMM aligner with upsampled WavLM features instead of MFCCs, explicit phone units for fillers and non-lexical vocal events trained on verbatim-annotated spontaneous speech, and a discriminative projection fitted on clean and noise-corrupted feature pairs to improve robustness. The pipeline is self-bootstrapped from 149h of curated audio without manual or external boundary targets. On conversational (Buckeye) and disfluent (FluencyBank) speech it reaches word-boundary MAEs of 20.6 and 76.9ms, 19% and 17% lower than the strongest of ten baselines. Catastrophic misalignments (>200ms) are 2.7 times rarer than Montreal Forced Aligners (MFA) best model even after widening MFA's search beam, which we show removes a large pruning artifact from its conversational error; event units halve the error next to laughter, while being meaningfully more robust than existing aligners.
