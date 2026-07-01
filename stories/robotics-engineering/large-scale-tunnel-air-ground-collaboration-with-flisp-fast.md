---
title: "Large-Scale Tunnel Air-Ground Collaboration With FLISP: Fast LiDAR-IMU Synchronized Path Planner"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.25393"
authors: ["Fenghe Guo", "Runjie Shen", "Chenyang Sun", "Junrui Zhang", "Quanxi Zhan", "Yongchun Wang", "Junjie Zhang"]
date: "2026-06-24T20:00:00.000Z"
score: 65
guid: "2606.25393"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.25393.png"
generated: "2026-07-01T19:05:33+05:30"
---

Hydropower tunnel inspection is critical for infrastructure integrity yet remains inefficient and hazardous using manual methods. We propose FLISP (Fast LiDAR-IMU Synchronized Path Planner), a mapless planning framework for cooperative UGV-UAV inspection. Unlike traditional map-based paradigms, FLISP features three core contributions: (1) a unified architecture where a single UGV-mounted LiDAR-IMU suite drives synchronized path generation for both platforms; (2) platform-specific solvers utilizing an enhanced Firefly Algorithm for UGV obstacle avoidance and a dynamic iterative optimizer for UAV flight; and (3) a hierarchical refinement strategy ensuring kinematic feasibility without state estimation drift. Benchmarks in a 1.2 km operational tunnel demonstrate that FLISP circumvents structural bottlenecks of map-based methods, eliminating map rasterization overhead (Fast-LIO2 + A*) and sampling instability (LIO-SAM + RRT*). FLISP achieves a 100% success rate with 7 ms latency, representing a 7-fold speedup over grid-based and a three-order-of-magnitude improvement over sampling-based baselines. Validated in operational hydropower tunnels, this approach offers a scalable solution for robotic inspection in feature-degraded linear infrastructure. A demonstration video is available at https://youtu.be/Y_ezs1PfLJ4, and the code at https://github.com/ArchibaldGuo/FLISP.git.
