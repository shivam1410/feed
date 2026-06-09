---
title: "STARIXNet: Multivariate and Multi-attribute Deep Learning Approach to Real-Time Resource Allocation in Cloud Platforms"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07565"
authors: ["Ahmed Abdulaal, Maruf Aytekin, Thilaga kumaran Srinivasan, Tomer Lancewicki"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.07565v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07565v1 Announce Type: new Abstract: Intelligent scaling of microservices in cloud platforms is crucial for mitigating escalating compute costs while avoiding service disruptions. Current solutions are limited to the univariate space, typically focusing on CPU usage alone to drive scaling decisions. Moreover, they address the problem as a purely forecasting task, focusing on prediction precision while neglecting the greater risks of underestimation and delays in system responsiveness. Alternative solutions are computationally complex, making them impractical for large-scale, real-time deployments. To address these challenges, we present STARIXNet, a lightweight neural network that guides resource allocation decisions in the multivariate space by capturing spatio-temporal relationships among multiple system metrics. STARIXNet models multiple quasi-dependent attributes, in particular the (S)easonal, (T)emporal, (A)uto-(R)egressive (I)ntegrated, and e(X)ogenous patterns, then implements an aggregation policy to finalize scaling decisions, prioritizing service stability, followed by cost-efficiency, over raw forecast accuracy. We empirically demonstrate the performance of STARIXNet by benchmarking against existing solutions in real-world settings. STARIXNet is deployed for critical production microservices at Walmart achieving tangible savings ranging from 10\% to 50\%, in addition to intangible benefits through improved service stability and customer experience.
