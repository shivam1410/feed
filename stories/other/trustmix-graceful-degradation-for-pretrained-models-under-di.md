---
title: "TrustMix: Graceful Degradation for Pretrained Models under Distribution Shift"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07206"
authors: ["Juliusz Ziomek, Maike Osborne, Yee Whye Teh"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07206v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Predicting beyond the training domain necessarily requires assumptions about how the ground truth extrapolates, yet in most neural networks these assumptions are made only implicit through the architecture. We propose TrustMix, a lightweight post-hoc method that makes a pretrained model's extrapolative behaviour explicit and controllable. TrustMix combines the predictive distribution produced by a pretrained model with a user-specified fallback distribution $p_0(y|x)$, such that as the out-of-distribution (OOD) deviation statistic grows, we collapse towards $p_0(y|x)$. TrustMix provides graceful degradation: the predictive distribution converges toward the fallback distribution as the OOD signal grows. The fallback distribution $p_0(y|x)$ can reflect domain knowledge, if available, or rely on a domain-agnostic stationarity assumption. TrustMix does not require retraining of the base model and can be applied to both regression and classification problems. We evaluated TrustMix on several synthetic and real-world distribution shifts, including tabular, image, and natural language processing tasks. We tested TrustMix on datasets such as CIFAR-10/100 and ImageNet and on numerous architectures including Convolutional Neural Networks (CNNs) and Transformers. TrustMix remains competitive in-distribution while improving predictive uncertainty under distribution shift, with gains in predictive likelihood for regression and calibration for classification. Finally, we showed that TrustMix can provide useful predictive distributions for decision-making applications by utilizing it as a surrogate for Bayesian Optimisation.
