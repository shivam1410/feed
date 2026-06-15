---
title: "Rethinking Backdoor Adversarial Unlearning through the Lens of Catastrophic Forgetting in Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14078"
authors: ["Zhenqian Zhu, Yamin Hu, Yujiang Liu, Luping Wei, Wenbo Hou, Bin Li, Haodong Li, Wenjian Luo"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.14078v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14078v1 Announce Type: new Abstract: Existing studies reveal that current backdoor defenses exhibit limited robustness and often fail against specific types of attacks. More concerningly, prevailing safety tuning strategies tend to provide only superficial safety protection, as they fall short of completely eliminating the backdoor effects. In this work, we present a novel formulation of backdoor learning and unlearning as a sequential, three-stage process from a continual learning perspective. Within this framework, we formally define complete backdoor unlearning and further derive the necessary conditions for achieving it based on the mechanism of catastrophic forgetting. Guided by these insights, we propose Blind Inversion-Backdoor Adversarial Unlearning (BI-BAU), which formulates the generation of adversarial examples satisfying the unlearning conditions as a blind inversion problem. We solve this by integrating the bi-level optimization process of adversarial training into an Expectation-Maximization (EM) algorithm framework to optimize the maximum a posteriori (MAP) objective. Furthermore, BI-BAU is extended to untargeted adversarial scenarios with unknown target classes, as well as to multi-modal contrastive learning tasks, enhancing its applicability to real-world deployment scenarios where pre-trained models may be compromised. Extensive experiments demonstrate that our method exhibits general applicability across a wide spectrum of backdoor attacks and can effectively and thoroughly eliminate the backdoor effects from a backdoor model.
