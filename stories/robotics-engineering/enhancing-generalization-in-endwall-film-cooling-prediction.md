---
title: "Enhancing generalization in endwall film cooling prediction: Incorporating the superposition principle into transformer-based neural operators"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31633"
authors: ["Qineng Wang, Liming Song, Tianyuan Liu, Zhendong Guo"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31633v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

In this study, a physics-enhanced neural operator framework is proposed to enhance the generalization prediction ability of the cooling layout of a turbine endwall with variable number of film holes. Specifically, inspired by the film cooling superposition principle, we propose a film cooling prediction model, namely superposition-based deep neural operator (SDNO), that divides the endwall temperature field prediction into two stages. In the first stage, the cooling layout of a turbine endwall is divided into several sub-parts with randomly assigned film holes, and a Transformer-based neural operator network, namely Calculate Net, is designed to predict the temperature field of each sub-part. Then, in the second stage, another neural operator network, i.e., Super Net, is trained to combine the temperature fields predicted by Calculate Net for each sub-part and obtain the superposed temperature field of the full cooling layout. Additionally, instead of directly taking the film cooling contours as pixel plots, a signed distance function (SDF) which is sensitive to the variable locations of cooling holes, is designed to encode the location information of cooling holes. Furthermore, the proposed endwall film cooling prediction model is trained with the samples that changing the number of film holes from 1-5 with variable locations. Then, the trained prediction shows excellent generalization prediction ability, which can accurately predict the film effectiveness of the cooling layout with 10-20 film cooling holes that are unseen in the training samples. The proposed SDNO also improves prediction accuracy relative to the fully supervised baseline. With the above, the effectiveness of our proposed prediction model has been well demonstrated.
