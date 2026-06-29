---
title: "Deployment-Side Adaptiveness in Multi-Horizon Volatility Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27688"
authors: ["Riku Green, Zahraa S. Abdallah, Telmo M Silva Filho"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27688v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27688v1 Announce Type: new Abstract: In financial forecasting, predictive performance depends not only on which model is trained, but also on how the trained model is deployed. We study this issue in multi-horizon volatility forecasting. Our starting point is that a trained multi-output (MIMO) forecaster does not define a single deployable predictor: by changing the inference-time rollout rule, the same trained model induces a family of forecasts with different accuracy and cost profiles. Across 20 stock-volatility series, three forecast horizons, and architectures ranging from linear models to PatchTST, we find that non-default rollout rules often improve over standard MIMO deployment. However, the best fixed rule varies substantially across architectures and horizons, making any single static replacement unreliable. We therefore evaluate validation-based deployment policies over the induced rule family. Under the primary MSE objective, validation-selected singletons provide a low-cost improvement over default MIMO, while small rule subsets recover much of the benefit of larger ensembles at substantially lower inference cost. We also find that policy rankings are metric-sensitive: MSE-selected policies do not transfer uniformly to QLIKE, a finance-standard volatility loss. These results show that inference-time deployment is a meaningful source of adaptiveness in financial forecasting, and that trained volatility forecasters should be evaluated not only by their architecture, but also by their deployment policy.
