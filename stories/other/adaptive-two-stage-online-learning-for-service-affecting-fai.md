---
title: "Adaptive Two-Stage Online Learning for Service-Affecting Failure Detection in Mobile Core Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18522"
authors: ["J. du Toit, G. Fita, J. Salzwedel, A. Stoltz, R. Wolhuter"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18522v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18522v1 Announce Type: new Abstract: Mobile network operators monitor aggregated traffic volumes to assess the operational health of core network infrastructure. Reliable failure detection is challenging due to strong temporal structure, non-stationarity, measurement artefacts, and extreme class imbalance, which limit static threshold-based monitoring. This paper proposes a two-stage online learning framework for traffic-based failure detection in mobile core networks. Stage I incrementally models normal traffic dynamics using lightweight regression with time-aware features. Stage II analyses prediction residuals together with contextual indicators to detect genuine service-affecting network failures. The framework operates fully online under a prequential evaluation protocol, enabling continuous adaptation with low computational overhead. Across linear and non-linear models, the proposed two-stage architecture achieves the best precision-recall trade-off, attaining the highest recall, F1-score, and AUC at acceptable false positive rates. These results demonstrate the importance of explicit residual decomposition for reliable failure detection in streaming mobile core network data.
