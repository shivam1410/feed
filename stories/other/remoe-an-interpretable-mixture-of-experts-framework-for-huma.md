---
title: "ReMoE: An Interpretable Mixture-of-Experts Framework for Human Mobility Recovery Forecasting Across Disasters"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22133"
authors: ["Yilin Lyu, Kang Liu, Wei Wang, Qifan Zhang, Ling Yin, Yushi Bai"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22133v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Human mobility often declines sharply following disasters and subsequently exhibits complex recovery dynamics. Effective forecasting of this recovery is critical for timely assessment and resource allocation. However, existing approaches are often developed for individual events and operate as black boxes, limiting their transferability and interpretability beyond the events they were trained on. Recent studies have identified recurring post-disaster mobility recovery types across disasters, suggesting that recovery knowledge may be transferable. Motivated by this, we propose ReMoE, an interpretable mixture-of-experts framework for cross-disaster mobility recovery forecasting. ReMoE uses a feature-guided router to adaptively combine specialized experts that learn these heterogeneous yet reusable recovery types, producing a region-specific recovery pattern. It further refines this pattern through residual correction informed by forecasts of future hazard conditions. We evaluate ReMoE on a large-scale mobility dataset covering 18 disaster events spanning hurricanes, floods, winter storms, and wildfires. ReMoE is competitive in-distribution and achieves the strongest performance on unseen events and hazard types, with larger gains under greater distribution shifts. Further analyses show that ReMoE yields interpretable learning outcomes and maintains robust performance under uncertainty. Broadly, ReMoE offers a transferable and traceable forecaster that can support anticipatory post-disaster assessment.
