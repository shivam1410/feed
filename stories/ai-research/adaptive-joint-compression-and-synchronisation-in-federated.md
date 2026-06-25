---
title: "Adaptive Joint Compression and Synchronisation in Federated Split Learning for IoT Rainfall Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.25003"
authors: ["Wenjie Ding, Yi Sin Lin, Jiale Liu, Baoyi Liu, Guanghua Liu, Zhuolu Li, Suleiman Sabo, Chuadhry Mujeeb Ahmed, Aydin Abadi, Rehmat Ullah, Rajiv Ranjan"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.25003v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.25003v1 Announce Type: new Abstract: Federated split learning (FSL) enables collaborative training across bandwidth-constrained IoT devices, but repeated activation and gradient exchange creates a communication bot-tleneck. Prior work optimises either activation compression or synchronisation frequency in isolation. This paper presents an FSL framework for IoT rainfall prediction that jointly regulates activation compression and the synchronisation interval \r{ho} via a latency driven scheduler on a server with per client EMA smoothing. The system is evaluated on hourly ERA5 data from 11 weather stations through a 17 scenario simulation matrix and a four scenario Raspberry Pi deployment over a real wide-area link. The simulation matrix validates scheduler switching across low, high, and mixed latency profiles, while the Pi deployment validates the high latency endpoint selected by the same policy. AUPRC varies only slightly across configurations (0.6381-0.6484 in simulation; within 0.011 on Pi), indicating that aggressive quantisation and sparser aggregation do not materially degrade predictive quality in this setting. On Pi, the selected endpoint (int8 with rho=3) achieves an 87% reduction in activation upload payload and a 54% reduction in synchronisation traffic relative to the float32 baseline, while reducing runtime jitter from +/-688 s to +/-10 s.
