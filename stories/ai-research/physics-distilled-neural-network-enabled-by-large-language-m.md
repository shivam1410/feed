---
title: "Physics-Distilled Neural Network enabled by Large Language Models for Manufacturing Process-Property Predictive Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11605"
authors: ["Ge Song, Kiarash Naghavi Khanghah, Anandkumar Patel, Rajiv Malhotra, Hongyi Xu"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.11605v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11605v1 Announce Type: new Abstract: Predicting process-property relationships in manufacturing is often challenged by high experimental costs and the limited interpretability of complex 'black-box' models. This paper proposes a novel knowledge distillation framework designed to achieve high-accuracy predictions in data-scarce scenarios. The framework integrates analytical physics priors, which are systematically extracted from scientific literature via Large Language Models, into a privileged teacher model. We employ a Graph-Masked Attention layer to capture the complex physical dependencies among input variables showing strict setpoints or a combination of static and high-frequency temporal signatures. This privileged knowledge is distilled into a lightweight student predictor for inference. The feasibility and robustness of the framework are evaluated through a comprehensive experiment across five diverse manufacturing processes. To ensure statistical reliability, given the small dataset sizes, a repeated K-fold cross-validation technique is employed to quantify model stability and generalization. Results indicate that the proposed framework consistently achieves high predictive accuracy across all evaluated domains. Most importantly, the architecture demonstrates significant fault tolerance by maintaining robust predictive performance even in scenarios where LLM-derived analytical priors are suboptimal or incomplete. Furthermore, the student predictor achieves an inference frequency exceeding 6000 Hz, which facilitates real-time edge deployment on standard industrial hardware. This work provides a scalable solution for bridging the gap between theoretical physics and real-time industrial monitoring in data-limited environments.
