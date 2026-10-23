---
title: "Prediction Is Not Calibration: Item Parameter Recovery and Representation Coupling in Knowledge Tracing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30211"
authors: ["Wenrui Yuan, St\\'ephanie M. van den Berg, Johannes Steinr\\\"ucke"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.30211v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Knowledge tracing (KT) models can estimate item parameters through an item response decoder trained solely for next-response prediction, yet predictive accuracy does not guarantee parameter recovery. We study 2PL, GPCM, and NRM decoders paired with LSTM, Transformer, and DKVMN encoders. Response-model derivatives show why discrimination and option slope updates depend directly on the scale and spread of estimated ability. Affine logit identities show how item-dependent shifts and rescaling in estimated ability are absorbed into item parameters without changing response probabilities. In simulations, difficulty, mean threshold, and correct-option intercept recovery remain high under shuffled order across representation widths, whereas discrimination and keyed option slope contrast recovery require wider item representations and degrade further under fixed item order. Separating the sequence item representation (width $d_S$) from the item parameter key (width $d_M$), and pairing a wide key with a thin sequence representation ($\mathrm{SK}(64,8)$), reduces fixed-order ability distortions and improves recovery and cross-order consistency without sacrificing test accuracy or increasing model size relative to a shared width-64 baseline ($\mathrm{SH}(64)$). On TIMSS and EdNet, widening $d_M$ consistently improves agreement with an offline IRT reference, while the trade-off from narrowing $d_S$ depends on the encoder's reliance on sequence width for prediction. These findings show why item parameters, especially discrimination and option slopes, must be evaluated separately from response prediction.
