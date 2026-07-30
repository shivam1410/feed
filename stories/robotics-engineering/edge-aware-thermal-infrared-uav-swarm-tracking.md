---
title: "Edge-Aware Thermal Infrared UAV Swarm Tracking"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.12544"
authors: ["Yu-Hsi Chen"]
date: "2026-07-13T20:00:00.000Z"
score: 62
guid: "2607.12544"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.12544.png"
generated: "2026-07-30T19:07:10+05:30"
---

Thermal infrared (TIR) imaging is essential for UAV swarm operations in visually degraded environments. However, tracking tiny UAVs remains challenging due to limited appearance cues, frequent occlusions, and rapid maneuvers. Despite significant progress driven by benchmarks such as the Anti-UAV challenge, existing methods primarily prioritize accuracy while overlooking the computational constraints of real-time edge deployment. The standard Kalman Filter (KF) offers the efficiency required for edge devices, yet its constant-velocity assumption often breaks down under highly dynamic UAV motion and thermal sensor jitter. More sophisticated nonlinear estimators can improve robustness but often introduce additional computational costs. To address this gap, we propose an edge-aware online tracking pipeline centered on the Adaptive Kinematic Kalman Filter (AKKF), which augments the linear KF with state-dependent kinematic modeling while preserving real-time efficiency. Combined with transient false-positive suppression and kinematics-driven predictive coasting, the presented pipeline improves trajectory continuity under challenging TIR conditions. Experiments on the Beyond Strong Baseline (BSB) benchmark provide a starting point for edge-aware UAV tracking by jointly evaluating tracking performance and computational efficiency, offering insights toward future real-time deployment.
