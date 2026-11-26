---
title: "Reinforcing Diffusion Models by Instantaneous Trajectory Distribution Matching"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.30986"
authors: ["Yihong Luo"]
date: "2026-11-23T19:00:00.000Z"
score: 35
guid: "2611.30986"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.30986.png"
generated: "2026-11-26T13:13:26+05:30"
---

Forward diffusion reinforcement learning (RL)---enabling deterministic ODE sampling without trajectory backpropagation---has grown increasingly popular for efficiently aligning diffusion models. However, we reveal that existing methods essentially rely on signed reward-weighted regression (RWR), regressing the trainable policy velocity onto rollouts from a behavior distribution. Unbiased baseline subtraction implicitly assumes that the policy velocity equals the behavior marginal velocity---an idealized assumption violated under classifier-free guidance (CFG) rollouts, offline/off-policy updates, and imperfect online self-consistency. This behavior--policy mismatch breaks baseline invariance and injects baseline-induced gradient drift, destabilizing training. To resolve this issue, we propose Instantaneous Trajectory Distribution Matching (iTDM), taking the infinitesimal limit of Trajectory Distribution Matching toward a time-local reward-guided target via the posterior-score identity to yield a sample-level gradient anchored at the behavior velocity without learning an additional reward-tilted target score. Tracking this velocity with an online auxiliary denoiser guarantees exact baseline invariance at the auxiliary optimum, effectively suppressing baseline drift across both online and offline RL. Extensive experiments across compositional generation, text rendering, and preference alignment show that iTDM achieves state-of-the-art in-domain and out-of-domain performance across group-wise online/offline RL and pairwise offline RL. Notably, on the challenging GenEval2 benchmark, iTDM converges nearly 3\times faster than competing methods while scaling smoothly to 0.87 without collapse. Furthermore, iTDM scales effectively to the 5.6B FLUX.3 model, achieving better performance across both in-domain and unseen metrics. Code is available at https://github.com/Luo-Yihong/iTDM
