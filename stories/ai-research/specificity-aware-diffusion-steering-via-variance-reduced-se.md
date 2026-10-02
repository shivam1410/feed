---
title: "Specificity-Aware Diffusion Steering via Variance-Reduced Sequential Monte Carlo"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00395"
authors: ["Luran Wang, Linrui Ma, Hannes St\\\"ark, Regina Barzilay"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.00395v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Inference-time steering enables pretrained diffusion models to satisfy new constraints without full retraining. However, specificity-aware generation is difficult: repelling samples from a negative reference distribution can also erode the positive distribution where the two overlap. The key challenge is to suppress negative mass while minimally distorting the positive distribution. We address this problem by formulating specificity-aware steering as a target-design problem and deriving a target distribution from an overlap-based objective. The resulting target keeps the desired reference distribution only in regions where it is sufficiently preferred over the undesired reference distribution, giving a likelihood-ratio interpretation of specificity. To sample from the corresponding time-dependent target path, we develop a Sequential Monte Carlo sampler with a variance-minimized local proposal. We further introduce a practical fixed-noise optimization procedure with the Jacobian--vector products with the desired and undesired score fields. Experiments on synthetic task, class-contrastive generation, text-to-image tasks and peptide-MHC (p-MHC) binder show that the proposed method suppresses undesired regions more effectively, reduces mode shift, and improves sampling stability by decreasing the SMC weight collapse compared with negative-guidance baselines. Code is available at: https://github.com/WangLuran/Specificity-Aware-Diffusion-Steering
