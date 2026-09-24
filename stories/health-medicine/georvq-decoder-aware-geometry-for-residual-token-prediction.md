---
title: "GeoRVQ: Decoder-aware geometry for residual-token prediction in physiological signals"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27018"
authors: ["Bo Cui, Yaowen Zhang"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.27018v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27018v1 Announce Type: new Abstract: Residual vector quantization (RVQ) turns physiological waveforms into compact token sequences, but conventional masked modeling treats every incorrect token as equally costly. We propose GeoRVQ, a coarse-to-fine masked token model whose objective reflects the local response of a frozen waveform decoder. Decoder-induced costs define geometry-aware soft targets and expected distortion, while quantizer-causal prediction follows residual dependencies from coarse to fine levels. In a descriptive aggregate over MIMIC-IV Waveform, VitalDB, and CODE-15\%, GeoRVQ increases exact token accuracy from $.133\pm.004$ to $.143\pm.003$, reduces decoded distance from $.606\pm.006$ to $.393\pm.007$, and increases R-peak F1 from $.784\pm.004$ to $.837\pm.008$ under matched model and training conditions. Across 45 held-out code substitutions, decoder-induced cost has a Spearman correlation of $.85$ with realized decoded cost, compared with $.54$ for Euclidean codeword distance. These results indicate that decoder-aware objectives can improve waveform and event preservation without requiring a large increase in exact token accuracy.
