---
title: "Leveraging Extragradient for Effective Sharpness-Aware Minimization in Deep Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06151"
authors: ["Yao Fu, Chunxia Zhang, Junmin Liu, Yihang Jin, Haishan Ye, Yuanao Yang"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.06151v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.06151v1 Announce Type: new Abstract: Generalization remains a pivotal challenge in deep learning, where traditional optimizers like Stochastic Gradient Descent (SGD) often converge to sharp minima, leading to overfitting and reduced performance on unseen data. Building on Sharpness-Aware Minimization (SAM), for seeking flat minima associated with improved generalization, we propose the Extragradient-Inspired Sharpness-Aware Minimization (EISAM), a novel optimizer that enhances generalization via the extragradient technique. EISAM uses a two-step update process: a prediction step investigating the geometry of the loss landscape and a perturbation step that refines updates with a base optimizer. This approach achieves better generalization performance than SAM. Crucially, EISAM reduces sensitivity to the perturbation radius, enhancing robustness, and simplifying the tuning across diverse settings. Extensive experiments on benchmark datasets demonstrate that EISAM consistently outperforms SGD, Adaptive Moment Estimation (Adam), and SAM in test accuracy and training efficiency across various architectures. Theoretical analysis further confirms that EISAM tightens the generalization bound by steering parameters toward flatter minima with reduced curvature. Accompanied by a thorough hyperparameter analysis, EISAM offers practical tuning guidance, establishing it as a robust, scalable, and broadly applicable optimization solution that advances both the theory and practice in deep learning.
