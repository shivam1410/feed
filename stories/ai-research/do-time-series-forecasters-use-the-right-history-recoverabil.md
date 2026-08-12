---
title: "Do Time-Series Forecasters Use the Right History: Recoverability, Recovery, and Functional Use of Temporal Delays"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10433"
authors: ["Qipeng Qian, Yuntao Qian"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.10433v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10433v1 Announce Type: new Abstract: Forecast accuracy does not tell us which past inputs produced a prediction. We separate three questions for time-series models with known delay structure: can the true delay be recovered from the observed data, does the model report it, and does the forecast actually use the same history? We first derive input-conditioned recoverability measures that separate intrinsic ambiguity from model error. We then prove that a delay report can become arbitrarily reliable while forecast risk approaches the oracle even though the predictor still uses the wrong lag. This failure also appears in finite samples on the point-delay task: among forecasts with a correct delay report and normalized excess risk within 10\% of the oracle, the reported history is functionally unused under our matched masking test in 55.4\% of N-HiTS cases and 92.7\% of TCN cases. Finally, we show that routing the prediction through the reported history removes off-report bypass paths; a hard one-hot control achieves exact fixed-report alignment. The main conclusion is simple: a good forecast, even with a correct delay report, does not show that the model used the right history.
