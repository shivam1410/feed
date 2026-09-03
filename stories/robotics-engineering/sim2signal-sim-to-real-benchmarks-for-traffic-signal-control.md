---
title: "Sim2Signal: Sim-to-Real Benchmarks for Traffic Signal Control"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01676"
authors: ["Ferdous Al Rafi, Susrik Mukherjee, Latika Liladhar Dekate, Jennifer Yawa Lavoe, Huaiyuan Yao, Shlok Mohanty, Longchao Da, Xuesong Zhou, Hua Wei"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.01676v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01676v1 Announce Type: new Abstract: Reinforcement learning achieves strong traffic signal control performance in simulation, yet policies trained in simulators often fail once deployed in the real world, a failure known as the Sim-to-Real gap. When RL is applied to traffic signal control, this gap arises from several sources: sensing, action execution, traffic dynamics, and the control objective. Their relative impact and the reliability of existing Sim-to-Real mitigation methods remain insufficiently understood, and the field lacks a standard benchmark for systematically measuring the gap and evaluating mitigation methods. We present Sim2Signal, a benchmark that decomposes the Sim-to-Real gap into observation, action, transition, and reward gaps, corresponding to mismatches in the four components of the underlying MDP, and induces each gap in isolation under a shared protocol. We evaluate 18 mitigation methods on 2 base controllers, across 33 gap settings and 10 calibrated networks built from 5 real-world locations. We find that direct transfer consistently degrades performance across all four gap sources, but the severity of the degradation does not predict the effectiveness of mitigation. Instead, mitigation effectiveness depends strongly on the network and gap setting: outside the action gap, a method that helps in one case may fail in another. The most effective methods generally estimate what the gap changes, rather than make the policy insensitive through domain randomization or invariant representations. Our code is available at https://github.com/Red-Pheonix/Sim2RealTSCBenchMark
