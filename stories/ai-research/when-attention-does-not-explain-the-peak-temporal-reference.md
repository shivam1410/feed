---
title: "When Attention Does Not Explain the Peak: Temporal Reference vs. Forecast Output in Attention-Based Time-Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07080"
authors: ["Yuji Akamatsu, Takao Yamanaka"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.07080v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Attention maps are often interpreted as evidence of what a forecasting model uses when making predictions. In our load-forecasting model, a CLS representation of historical demand queries 24 future exogenous horizon tokens through cross-attention, inviting a temporal interpretation in which highly attended horizons may appear to explain forecast peak timing. We test this interpretation using a horizon-level attention descriptor, $\Psi_{\mathrm{out}}$. Across 31 day-aligned windows of the Panama load dataset, the forecast achieves a median peak-time error of 0 h and a 51.6% exact-match rate, whereas the argmax of $\Psi_{\mathrm{out}}$ has a median error of 5 h and 0% exact match. The forecast peak is closer to the observed peak in 27 of 31 windows. This dissociation is not merely an argmax artifact: within $\pm1$ h, attention reaches only $1.16\times$, $1.11\times$, and $1.14\times$ the uniform baseline around observed, predicted, and weekly-naive peaks, respectively, indicating weak and non-selective concentration. Yet the attention profile is structured, with cross-window consistency of 0.83. Replacing 12 future weather features with their training-set means makes the profile nearly uniform, showing sensitivity to future weather variation rather than fixed horizon position alone. The dissociation is also reproduced across three random-seed runs. These results show that structured, input-sensitive, and reproducible horizon-level cross-attention need not provide a valid peak-selective explanation of forecast behavior. The observed behavior is instead consistent with an internal horizon-reference role for integrating future exogenous information, although this functional role is not causally established.
