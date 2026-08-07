---
title: "DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03207"
authors: ["Hoseong Tae", "Jong-Seok Lee"]
date: "2026-08-03T20:00:00.000Z"
score: 60
guid: "2608.03207"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03207.png"
generated: "2026-08-07T19:04:45+05:30"
---

Flow-matching vision-language-action (VLA) models such as pi0 generate robot actions by integrating a learned denoising velocity field, and have been reported to resist adversarial perturbations that readily fool autoregressive VLAs. We show that this robustness is largely illusory: it stems from prior attacks ignoring the multi-step denoising ODE. We introduce DRIFT (Denoising Redirection via Input perturbation of the Flow-matching Trajectory), a test-time universal adversarial patch placed on the robot's gripper that attacks the denoising velocity field of an off-the-shelf policy. Our central finding is counterintuitive: attacking only the first denoising step is both stronger and cheaper than attacking a wider window of steps, which we explain through a gradient conflict unique to input-space optimization and which is exactly opposite to the training-time backdoor regime. On pi0 and pi0.5 across four LIBERO suites, DRIFT breaks essentially all originally-solvable tasks with a small single patch, far exceeding action- and embedding-space attack baselines.
