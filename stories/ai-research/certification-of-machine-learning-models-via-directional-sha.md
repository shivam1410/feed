---
title: "Certification of Machine Learning Models via Directional Sharpness"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.25004"
authors: ["Gefei Tan, Adria Gascon, Sarah Meiklejohn, Mariana Raykova"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.25004v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.25004v1 Announce Type: new Abstract: In machine learning, model certification has been identified as an important method for gaining assurance about a model's trustworthiness and quality. A model's quality is largely determined by its ability to generalize, i.e., to perform well on data beyond what it was trained on. It is not possible to certify generalization directly, however, as it depends on unknown data and is not directly measurable. Proxies such as test accuracy can be misleading when the training process is perturbed (intentionally or accidentally), and metrics such as sharpness -- which has an empirically supported link to generalization -- are computationally expensive and can also serve as unreliable signals when training deviates from a prescribed procedure. In this work, we propose directional sharpness, a metric designed to efficiently and reliably indicate generalization despite potential training deviations. We provide empirical and analytical evidence that directional sharpness (1) correlates more strongly with generalization than existing metrics and (2) identifies models with poor generalization more reliably than existing metrics. Furthermore, directional sharpness is efficiently computable in model auditing settings, where the verifier has access to training data, and via zero-knowledge proofs that certify quality without revealing training data.
