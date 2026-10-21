---
title: "DS-Net: A Dynamic Split Network for Edge-Cloud Collaborative Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23949"
authors: ["Xinyun Zhang, Li Wang, Lei Jin, Lianming Xu, Zhu Han"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.23949v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Collaborative inference serves as a critical methodology in edge intelligence. Existing collaborative inference methods operate by splitting the deep neural network (DNN) model between edge devices and cloud servers. However, these methods need to load different models for multiple split points when the communication or device changes, thus resulting in long switching times and substantial storage overhead on the edge side. To address this issue, we propose a Dynamic Split Network (DS-Net), which not only enables efficient split point switching but also enhances the collaborative speed and accuracy across various scenarios. Specifically, we design a dynamic switching framework that enables flexible selection among multiple split points within a single model, thereby reducing storage, memory, and switching overhead. To mitigate the feature distribution shifts and task-relevant information loss caused by dynamic splitting and high-ratio compression, we further propose a hierarchical compensation mechanism. Local alignment calibrates the decoded feature distribution at each split point, while task-specific global compensation restores task-relevant information at the global level. In addition, we incorporate sample-adaptive global compensation selection into split-point selection based on sample complexity and runtime resource conditions. Experimental results demonstrate that DS-Net reduces memory overhead by 74.6% and achieves millisecond-level switching latency. Moreover, under a 10 Mbps bandwidth constraint on the Nano platform, DS-Net outperforms state-of-the-art collaborative methods by achieving 1.2% higher accuracy on the COCO dataset, reducing latency by 42.5%, and improving throughput by a factor of 1.8$\times$.
