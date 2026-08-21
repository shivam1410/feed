---
title: "Reliable Neural Collapse Approximation for Open-World Test-Time Adaptation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19890"
authors: ["Jia-Qi Lin, Yuangang Pan, Chang-Dong Wang, Haizhang Zhang, Ivor W. Tsang, Joey Tianyi Zhou"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19890v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19890v1 Announce Type: new Abstract: Test-Time Adaptation (TTA) methods aim to bridge the domain gap between the source and target domains. However, traditional TTA methods become ineffective when the label distribution shift occurs, a challenge commonly referred to as an open-world scenario. In this paper, we introduce a new method named Reliable Neural Collapse approximation (ReNC) for Open-World Test-Time Adaptation (OWTTA). Specifically, we leverage neural collapse as a structural prior for reliable target-domain adaptation. Guided by this prior, we justify that the pre-trained classifier weights can serve as the prototypes of the source domain. By measuring the similarity between samples and prototypes, we filter out the Out-Of-Distribution~(OOD) samples for reliable updates. Furthermore, we propose a neural collapse approximation mechanism to refine these prototypes, ensuring they can gradually adapt to the target domain while maintaining the neural collapse structure. Extensive experiments on several open-world benchmarks demonstrate the superiority of the proposed method. Our empirical analysis suggests that ReNC better preserves NC-related properties in the target domain, providing useful evidence for explaining reliable OWTTA and offering new insights for model design. Code is available at https://github.com/JiaqiLin-AI/ReNC.
