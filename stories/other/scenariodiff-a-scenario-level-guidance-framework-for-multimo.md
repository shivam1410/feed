---
title: "SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17164"
authors: ["Tuan-Binh Tran, Dat Nguyen Cong, Duc-Trong Le, Thanh Trung Huynh, Tung Kieu"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17164v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17164v1 Announce Type: new Abstract: Textual context such as news, reports, and logs can provide valuable signals for time series forecasting, especially when future dynamics are driven by external events that are not yet visible in historical values. Existing multimodal forecasting methods often either ask large language models (LLMs) to predict numerical values directly or fuse text and time series implicitly, making contextual influence difficult to interpret and control. We propose SCENARIODIFF, a hierarchical contextual reasoning framework for multimodal time series forecasting under noisy and weakly aligned documents. SCENARIODIFF organizes contextual information into three levels: a Historical Context Agent extracts stepwise evidence from raw documents, a Scenario Agent produces a qualitative scenario description for the forecast horizon, and an Anchor Guidance Agent generates sparse anchor points for event-relevant future regions. These structured signals condition a Multimodal Diffusion Transformer, while Anchor Blended Sampling locally refines generated trajectories without retraining. Experiments on the Time-MMD benchmark show that SCENARIODIFF is especially effective in event-driven domains, demonstrating the value of explicit hierarchical scenario guidance for multimodal time series forecasting. Our full implementation is available at https://anonymous.4open.science/r/ScenarioDiff_ICDM-2C4C
