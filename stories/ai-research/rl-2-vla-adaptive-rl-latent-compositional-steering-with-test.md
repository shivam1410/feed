---
title: "RL^2-VLA: Adaptive RL Latent Compositional Steering with Test-Time Scaling for Vision-Language-Action Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26991"
authors: ["Derek Ming Siang Tan", "Shailesh Shailesh", "Srikrishna Iyer", "William Wei Jie Teo", "Yuanliang Ju", "Qiao Gu", "Guillaume Sartoretti"]
date: "2026-07-29T20:00:00.000Z"
score: 75
guid: "2607.26991"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26991.png"
generated: "2026-08-03T19:06:42+05:30"
---

Despite the impressive visuomotor capabilities enabled by Vision-Language-Action (VLA) models, their performance often degrades on challenging and out-of-domain tasks. Recent test-time steering and scaling methods improve performance without extensive data collection and retraining, but action samples often remain concentrated around similar behaviors and therefore inherit correlated failure modes. Moreover, existing methods apply the same intervention strategy at every timestep, regardless of whether the base policy is already likely to succeed. To address these limitations, we introduce RL^2, an adaptive inference-time steering framework that leverages Reinforcement Learning on VLA Latents. First, we train a lightweight offline RL policy conditioned on expressive latents extracted from the VLA action expert and compose its flow velocity with that of the frozen VLA during inference. This compositional steering strategy combines the behavioral priors of large-scale imitation learning with the action diversity induced by offline RL beyond dominant demonstration modes. We further discover that inference-time steering follows fundamentally different scaling laws under success and failure states, revealing that action diversity is most beneficial when the base VLA is likely to fail, but can unnecessarily perturb already-accurate actions when success is likely. Building on this insight, RL^2 activates compositional steering only when failure is predicted. Across the SIMPLER and PolaRiS benchmarks, RL^2 improves success rates by up to +17.3% in out-of-domain settings, while ablations and scaling studies demonstrate the importance of latent representations and RL training. Finally, real-world experiments demonstrate that these gains transfer beyond simulation, establishing RL^2 as a practical and modular steering framework for VLA deployment.
