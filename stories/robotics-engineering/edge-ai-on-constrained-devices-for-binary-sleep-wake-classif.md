---
title: "Edge AI on Constrained Devices for Binary Sleep-Wake Classification in Dynamic Environments"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29163"
authors: ["Stefan Reitmann, Lena Oden"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2609.29163v1"
image: ""
generated: "2026-09-25T23:24:50+05:30"
---

This paper presents an Edge AI-based system for detecting sleep and wake states in non-stationary mobile environments using resource-constrained embedded hardware. Conventional approaches relying on accelerometer-based activity metrics are highly susceptible to motion and vibration artifacts and are limited by strict compute and energy budgets of wearable and IoT devices. To address these challenges, a multimodal pipeline is designed and implemented on an ESP32-S3 microcontroller. The system combines inertial sensing for head movement analysis and visual pose classification. A dual-core architecture with FreeRTOS enables parallel execution of real-time data acquisition and on-device inference. Sleep detection follows a two-stage strategy: low-movement detection over a temporal window, followed by visual validation of poses. Experimental results show accuracies of 96.5% for motion-based detection and 89% for pose classification, yielding robust binary sleep-wake classification. Field tests confirmed feasibility in representative mobile scenarios. The results demonstrate that privacy-preserving, local sleep detection is achievable on edge hardware through careful co-design, while highlighting limitations in sensing intrusiveness, dataset scale, and system integration.
