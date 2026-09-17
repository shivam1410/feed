---
title: "Composite-Gradient Learning for Shared Control Authority Between Deep Reinforcement Learning and Model Predictive Control"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17697"
authors: ["Giray \\\"On\\\"ur, Azita Dabiri, Bart De Schutter"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17697v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17697v1 Announce Type: new Abstract: Integrated deep reinforcement learning (DRL) and model predictive control (MPC) methods are increasingly used to control autonomous systems by combining their complementary capabilities. DRL learns control policies through interaction with the environment. MPC uses a system model to optimize control inputs while accounting for constraints. In DRL-MPC frameworks with shared control authority, both the DRL agent and the MPC controller each determine part of the control inputs. However, common learning formulations treat MPC as part of the environment and therefore do not explicitly account for MPC's contribution to control or its interaction with the DRL agent. This paper proposes a novel composite-gradient learning (CGL) method that integrates the MPC controller into the learning process by representing the DRL and MPC control inputs as a joint action and accounting for their interaction when updating the DRL agent during training. CGL is evaluated on two multi-class freeway traffic networks with different strengths of interaction between the DRL and MPC control inputs and it is compared with alternative methods that treat MPC as part of the environment or that only partially incorporate MPC into learning. The results show that CGL offers limited benefit under weak interaction, but learns higher-performing control policies than the alternative methods in a subset of training runs under strong interaction, although the average control-performance gains remain modest.
