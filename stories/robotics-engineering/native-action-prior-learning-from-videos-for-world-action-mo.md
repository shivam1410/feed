---
title: "Native Action-Prior Learning from Videos for World Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.03391"
authors: ["Zhaochong An", "Fei Zhang", "Menglin Jia", "Duncan Frost", "Zijian Zhou", "Yikai Wang", "Xudong Wang", "Aditya Patel", "Belinda Zeng", "Tao Xiang", "Serge Belongie", "Amir Bar", "Sen He"]
date: "2026-10-01T20:00:00.000Z"
score: 68
guid: "2610.03391"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.03391.png"
generated: "2026-10-05T19:10:08+05:30"
---

World action models integrate future visual dynamics with robot action prediction, but their scalability remains limited by the need for action-annotated robot trajectories. Observation-only videos contain rich evidence about interaction dynamics, but existing approaches typically use them either to pretrain visual representations that must later be adapted for control, or to infer latent actions that are subsequently grounded to robot commands. We present NAVA-WAM, which introduces native action-prior learning by directly pretraining the action policy from observation-only videos, avoiding indirect representation-to-control transfer or a separate latent-action model. Our training consists of two stages. First, we pretrain on observation-only videos, where future-video flow-matching supervision over visual transitions is propagated through transition-structured joint attention to optimize the Action-DiT and learn action-relevant priors. Second, we use action-labeled demonstrations to post-train the Action-DiT for robot control through joint video--action flow matching, while asymmetric attention decouples the visual branch from iterative action denoising and enables efficient action-only inference. Extensive experiments show that NAVA-WAM consistently outperforms prior approaches under both in-distribution and out-of-distribution settings, while demonstrating strong action-label efficiency and effective real-robot generalization. These results establish native action-prior learning as an effective approach to directly pretrain action policies from observation-only videos, providing a scalable path beyond action-labeled robot data.
