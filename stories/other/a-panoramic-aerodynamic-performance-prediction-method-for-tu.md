---
title: "A panoramic aerodynamic performance prediction method for turbomachinery cascades using transformer-enhanced neural operator"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16066"
authors: ["Qineng Wang, Zhendong Guo, Liming Song, Tianyuan Liu"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16066v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16066v1 Announce Type: new Abstract: To enable flexible and rapid aerodynamic performance evaluation in turbomachinery design, this paper proposes a panoramic performance prediction framework. Unlike most previous prediction models that directly predict the objective functions of interest, our approach first predicts the basic parameters of the Navier-Stokes equations, such as temperature, pressure, and density. Utilizing these basic physical quantities, it subsequently predicts key performance parameters of the turbine stage meridian plane. By adopting this methodology, our proposed panoramic performance prediction framework functions similarly to a CFD simulator, capable of predicting various objective of interest to the designers. To enhance prediction accuracy, a transformer-enhanced neural operator (TNO) is introduced within this framework. Using the Rotor 37 blades as a reference, the proposed TNO is trained to predict the performance of a transonic compressor blade in the meridian plane. The TNO can accurately predict total quantities such as isentropic efficiency, mass flow, and distributions of total pressure ratio. Remarkably, the prediction error of TNO is observed to be smaller than that of state-of-the-art deep learning operators such as the FNO and DeepONet. Furthermore, the TNO is applied to downstream tasks, including sensitivity analysis and optimization of various objective functions. The results confirm that the TNO can operate almost like a CFD simulator, while reducing the computational cost of downstream tasks by four orders of magnitude. The effectiveness and reliability of the proposed TNO for solving different kinds of downstream tasks have been well demonstrated.
