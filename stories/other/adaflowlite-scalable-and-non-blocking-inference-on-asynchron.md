---
title: "AdaFlowLite: Scalable and Non-blocking Inference on Asynchronous Mobile Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21691"
authors: ["Sicong Liu, Fengmin Wu, Yuan Gao, Bin Guo, Zimu Zhou, Hongkai Wen, Zhiwen Yu"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21691v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

The rise of mobile devices equipped with numerous sensors, such as LiDAR and cameras, has driven the adoption of multi-modal deep intelligence for distributed sensing tasks, such as smart cabins and driving assistance. However, the arrival time of mobile sensory data vary due to modality size and network dynamics, which can lead to delays (if waiting for slow data) or accuracy decline (if inference proceeds without waiting). Moreover, the diversity and dynamic nature of mobile systems exacerbate this challenge. In response, we present a shift to \textit{opportunistic} inference for asynchronous distributed multi-modal data, enabling inference as soon as partial data arrives. While existing methods focus on optimizing modality consistency and complementarity, known as modal affinity, they lack a \textit{computational} approach to control this affinity in open-world mobile environments. % \sysname pioneers the formulation of structured cross-modality affinity in mobile contexts using a hierarchical analysis-based normalized matrix. This approach accommodates the diversity and dynamics of modalities, generalizing across different types and numbers of inputs. Employing an multi-modal lightweight Swin Transformer (MMLST), \sysname facilitates real-time and flexible data imputation, adapting to various modalities and downstream tasks without retraining. Experiments show that \sysname significantly reduces inference latency by up to 80.4\% and enhances accuracy by up to 62.1\%, while achieving nearly a 50\% reduction in energy consumption, outperforming status quo approaches. Also, this method can enhance LLM performance to preprocess asynchronous data.
