---
title: "EEG2MCU: Sensing-to-Execution Co-Design for Wearable EEG Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23619"
authors: ["Shoma Yukawa, Meghna Roychowdhury, Arnab Sanyal, Chengwei Zhou, Shreyas Sen, Gourav Datta"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23619v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Wearable EEG inference is constrained not only by model size, but also by the channel-dependent sensing front end that must process high-dimensional inputs before compact downstream computation. We present EEG2MCU, a sensing-to-execution co-design framework that treats electrode count as a hardware design variable through task-aware montage selection. EEG2MCU retains a compact time-frequency representation and generates only the INT8 regions required by each first-layer tile, avoiding full input materialization. Halo reuse and access-aware placement across Flash, SRAM, and tightly coupled memory further reduce redundant generation and data movement. On a Cortex-M7 MCU, EEG2MCU reduces peak SRAM by 11.38x relative to the baseline, including a 1.71x reduction from the 62-to-19 electrode montage, while reducing latency by 2.57x and energy by 2.48x. It retains 94-96% of full-montage accuracy, demonstrating practical high-dimensional EEG inference under tight embedded-resource constraints.
