---
title: "Beyond Prediction: Tail-Aware Scheduling for LLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18431"
authors: ["Yueying Li, Yuanfan Chen, Jiayang Chen, Esha Choukse, Haoran Qiu, G. Edward Suh, Rodrigo Fonseca, Ziv Scully, Udit Gupta"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.18431v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18431v1 Announce Type: new Abstract: LLM serving exhibits extreme length variability, making size-based scheduling difficult in practice. Recent LLM schedulers approximate SJF/SRPT using predicted decode lengths or ranks and primarily report mean-centric metrics such as TTFT and TBT. We show that these prediction-driven policies can be fragile under distribution shifts, bursty arrivals, and GPU memory pressure, while offering limited control over the tail latency (P90-P99) that dominates user experience, even with perfect decode-length knowledge. We introduce a distribution-aware, prediction-free scheduling framework that replaces explicit length prediction with soft priority boosting driven by lightweight statistical signals. Our design co-optimizes scheduling and cache-aware preemption to account for memory-coupled decode dynamics across workload mixes. Evaluated on production and open-source traces, our method reduces P99 TTLT by up to 35-50% relative to SRPT with perfect length knowledge and reduces TTFT by 34-47% across workloads, including reasoning-heavy and chat-heavy tasks. These results demonstrate a robust alternative for optimizing tail latency in online LLM serving.
