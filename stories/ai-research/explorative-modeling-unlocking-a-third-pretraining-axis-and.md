---
title: "Explorative Modeling: Unlocking a Third Pretraining Axis and End-to-End Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27372"
authors: ["Alexi Gladstone, Heng Ji, Yilun Du"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.27372v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27372v1 Announce Type: new Abstract: The deep learning revolution, kicked off by AlexNet, taught us that end-to-end training beats decomposing a problem into hand-designed stages. Generative modeling, however, has remained the exception-despite generative models being remarkably capable, they are still not trained end-to-end. This is because, at its core, generative modeling is about handling distributions with many modes, and existing scalable approaches handle this the same way, by factoring the generation procedure, which prevents end-to-end generation. In this work, we introduce Explorative Modeling, a new paradigm that instead factors the training loop, exploring K candidate matches between model generations and data, and training on the best, so predictions commit to modes rather than blurring them. We find Explorative Models (XMs) useful in two settings. First, increasing exploration adds a third pretraining axis beyond parameters and data for existing generative models-where scaling exploration monotonically improves performance across both continuous and discrete domains (images, video, and language). Notably, gains from exploration increase with scale, climbing from 7% to 36% as data scales and from 13% to 23% as models grow, with efficiency gains more than doubling at 3x the compute. Concretely, exploration improves FLOP efficiency by 4.1x, sample efficiency by 6.2x, parameter efficiency by 47%, lifts the strongest of image-generation recipes to a near-state-of-the-art 1.43 FID on ImageNet without guidance, enables scaling how end-to-end existing models are, and unlocks scaling generalization. Second, XMs enable end-to-end reconstructive generative modeling, matching diffusion on control tasks with 16-256x fewer inference steps. Together, these results establish XMs as both a new pretraining axis for existing generative models and a standalone end-to-end generative modeling paradigm.
