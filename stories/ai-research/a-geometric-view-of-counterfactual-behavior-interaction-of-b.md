---
title: "A Geometric View of Counterfactual Behavior: Interaction of Boundary Proximity and Local Support"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04209"
authors: ["Ioanna Gemou, Matteo Gamba, Randall Balestriero, Ritambhara Singh"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.04209v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04209v1 Announce Type: new Abstract: Counterfactual explanations seek small, semantically meaningful changes to an input that alter a model's prediction, and are widely used to interpret and audit machine learning systems. In modern vision, language, and multimodal systems, pretrained encoders map inputs to representation spaces, and downstream classifier heads impose decision boundaries within those spaces. As a result, the feasibility and distance of nearby counterfactuals depend on boundary placement relative to the data. Yet models with similar predictive performance can differ substantially in whether such changes are achievable and how far representations must move. This work examines this variation using a standardized local search probe across several pretrained encoders and linear classifier heads. Results show that despite similar predictive performance, models differ substantially in their counterfactual behavior. Under fixed representations, varying only the classifier head alters counterfactual outcomes while leaving predictive performance largely unchanged. This variation is explained by the interaction of decision-boundary proximity and local data support, which jointly determine whether prediction changes are both feasible and lie in regions supported by the data, and can also improve counterfactual search within fixed models. Together, these findings identify counterfactual behavior as a distinct dimension beyond predictive performance and show that it can be altered without changing accuracy, with implications for model selection, robustness, and the reliability of counterfactual methods.
