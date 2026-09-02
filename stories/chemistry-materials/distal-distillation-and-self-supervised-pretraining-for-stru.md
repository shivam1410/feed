---
title: "DISTAL: Distillation and Self-Supervised Pretraining for Structure-Agnostic Materials Property Prediction"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00059"
authors: ["Weiran Wang, Xintong Huo, Yueying Wang, Yusi Fan, Wenyan Wang, Xin Feng, Ruihao Xin, Lan Huang, Kewei Li, Fengfeng Zhou"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.00059v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00059v1 Announce Type: new Abstract: Materials property prediction remains difficult in low-data settings, where many target properties are supported by only a limited number of labeled samples. Models with the strongest predictive accuracy often depend on crystal structures, which restricts their use in early-stage screening when structural information is limited or unavailable. To address this challenge, we propose DISTAL, a dual-prior framework for structure-agnostic materials property prediction that combines self-supervised compositional pretraining with structure-aware knowledge distillation. DISTAL first learns transferable compositional representations from a large virtual composition space using 145 composition-derived descriptors. It then distills structural knowledge from a pretrained ALIGNN teacher into a composition-conditioned student. This setting allows structural priors to be used during training without requiring structural inputs at inference. By integrating explicit compositional descriptors, pretrained latent features, and distilled structural features within a unified prediction pipeline, DISTAL captures complementary signals that are difficult to recover from any single representation alone. Across 39 benchmark tasks, the best-performing multimodal configuration combines all three signals, and improves over the reference benchmark on 37 tasks. DISTAL achieves the strongest overall performance among all evaluated feature combinations. These results indicate that compositional pretraining and structural distillation provide complementary priors and offer a practical route to robust composition-only prediction in small-data materials informatics. The source code and the pre-trained models are anonymously available at: https://osf.io/eq96d/overview?view_only=451617f42f7849e08750bd1852b48980 and will be released at the official link after acceptance.
