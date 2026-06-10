---
title: "Co-GLANCE: Uncertainty-Aware Active Perception for Heterogeneous Robot Teaming"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09919"
authors: ["Michal P. Podolinsky, Neel P. Bhatt, Pranay Samineni, Rohan Siva, Christian Ellis, Ufuk Topcu"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09919v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09919v1 Announce Type: new Abstract: Perceptual uncertainty is a central challenge for heterogeneous robot teams operating in unstructured outdoor environments, where no single viewpoint affords reliable scene understanding. Perceptual uncertainty, arising from sources such as occlusions, manifests differently across robot viewpoints depending on scene structure. Detecting and resolving sources of perceptual uncertainty requires both scene-based contextual reasoning and capability-aware robot allocation. While vision-language models provide strong semantic priors for both, they are computationally prohibitive for onboard inference and lack calibrated uncertainty quantification. We introduce Co-GLANCE, a real-time onboard perception and decision-making system for uncertainty resolution in heterogeneous robot teams. Co-GLANCE distills the semantic reasoning capabilities of a vision-language model into an end-to-end model for occlusion segmentation and robot allocation, eliminating the need for cloud-based inference. To quantify perceptual uncertainty, Co-GLANCE combines conformal prediction with selective abstention to provide statistically valid coverage guarantees for segmentation, robot allocation, and detection outputs. These calibrated uncertainty estimates directly trigger active perception, dispatching the most appropriate robot to acquire informative viewpoints and resolve uncertainty. Across real-world scenarios, Co-GLANCE outperforms cloud-based vision-language model baselines in occlusion segmentation and robot allocation accuracy by 25% and 36%, respectively, while reducing per-frame inference latency 350x. We also release an air-ground dataset for future research. Code, videos, and dataset available at https://co-glance.github.io/ .
