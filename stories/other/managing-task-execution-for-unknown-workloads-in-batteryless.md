---
title: "Managing Task Execution for Unknown Workloads in Batteryless IoT: A Hardware-Agnostic Evaluation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24340"
authors: ["Samer Nasser, Henrique Duarte Moura, Ritesh Kumar Singh, Maarten Weyn, Jeroen Famaey"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24340v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24340v1 Announce Type: new Abstract: In recent years, the Internet of Things (IoT) paradigm has been shifting toward batteryless, energy-harvesting architectures. Sustaining reliable operation in these systems requires intelligent management of highly volatile stored energy. As edge applications grow in complexity, traditional energy-aware schedulers struggle with unpredictable workloads due to their reliance on static execution thresholds or pre-measured, hardware-specific task profiles. To overcome this, we propose two novel, hardware-agnostic dynamic scheduling strategies treating applications as a "black box," requiring no prior energy information: a model-free Reinforcement Learning (RL) agent and an on-the-fly Approximated Prediction (AP) method. We evaluate these methods against an adaptive task rate approach (AsTAR) and optimized static thresholds using a custom-built, physically accurate simulation framework driven by real-world solar data and dynamic LoRa transmission profiles. Rather than claiming universal superiority, our analysis exposes the distinct operational trade-offs of each method: the AP approach delivers lightweight, near-oracle task throughput; the RL agent provides tunable survival-execution balancing; and AsTAR excels at execution pacing across long energy gaps. Finally, we demonstrate that while these advanced strategies provide critical resilience for severely constrained systems with small capacitors, devices with larger energy buffers can efficiently rely on simpler, less computationally expensive static policies.
