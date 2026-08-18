---
title: "Geometry Is Not Robustness: A Trajectory-Level Study of PGD Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14594"
authors: ["Dhairysheel Durgule"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.14594v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14594v1 Announce Type: new Abstract: Projected Gradient Descent (PGD) is widely used to evaluate adversarial robustness, typically via final adversarial accuracy, which does not capture model behaviour throughout the attack. Recent work proposes trajectory-level diagnostics, such as loss evolution, gradient alignment, and steps-to-failure, for deeper insight into adversarial optimisation dynamics. However, whether these diagnostics reliably indicate robustness strength remains unclear. We conduct a trajectory-level investigation of PGD attacks on convolutional neural networks trained on Fashion-MNIST. We compare clean-trained and adversarially-trained models across multiple robustness regimes, using rigorous 20-step PGD evaluations with random initialisation and multiple restarts for robustness measurement, and single-initialisation trajectory recording for diagnostics. We record full PGD trajectories across 3000 clean-correct samples per model and analyse loss evolution, gradient alignment, and failure timing across attack iterations. Our results reveal a clear robustness hierarchy across models; however, trajectory metrics do not contribute equally to its identification. Mean loss trajectories and gradient alignment patterns appear quantitatively similar across adversarially-trained models with substantially different robust accuracies. In contrast, steps-to-failure distributions provide a clearer separation of robustness regimes, directly reflecting functional resistance to adversarial perturbation. These findings indicate that trajectory-level diagnostics describe optimisation geometry but do not independently measure adversarial robustness. Their interpretability depends on robustness regime, attack strength, and multi-metric evaluation. Trajectory-level analysis should be a complementary diagnostic tool, interpreted in context, rather than a replacement for standard robustness measurements.
