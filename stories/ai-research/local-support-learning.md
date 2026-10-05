---
title: "Local Support Learning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02126"
authors: ["Assaf Ben-Kish", "Akarsh Kumar", "James Glass", "Raja Giryes"]
date: "2026-09-30T20:00:00.000Z"
score: 48
guid: "2610.02126"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02126.png"
generated: "2026-10-05T19:10:08+05:30"
---

We explore catastrophic forgetting in the context of large pre-trained models. By considering forgetting as a geometric problem in the input space of each weight matrix, we uncover a natural retention objective under which updates produced by gradient-based optimizers are suboptimal. Following this observation, we propose Local Support Learning (LSL), a general-purpose framework that augments gradient-based training for retention of prior capabilities without access to prior data. During a new learning phase, LSL pairs two components with distinct roles: a standard weight adapter, trained as usual to minimize the loss, and a gating function that enables the adapter only on input activations from its own training distribution, making the update local to that distribution. The key challenge is that this gate must route data from all learning phases while training only on data from the current one. We address this with a gate based on a Gaussian Mixture Model (GMM), whose likelihood decays rapidly away from its training data, giving it a natural tendency to stay closed on data from prior phases. We show that this post-training approach can resolve forgetting in LLMs of up to 7 billion parameters, retaining both pretrained and finetuned capabilities across multiple training phases, while being efficient in memory and compute, robust to hyperparameter choice, and showing scaling potential.
