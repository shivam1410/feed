---
title: "Generalizing HVAC Control With Domain Randomized Reinforcement Learning"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05822"
authors: ["Pablo Boitel, Kun Zhang"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05822v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05822v1 Announce Type: new Abstract: Deploying advanced HVAC (Heating, Ventilation and Air Conditioning) controllers at scale remains difficult because performance often depends on accurate building models or per-site retuning. We propose NOMAD-RL (Neural Online Meta-Adaptation for Dynamics), a general-purpose Reinforcement Learning (RL) controller designed to transfer across heterogeneous thermal zones through a universal, non-invasive thermostat interface. The controller acts on temperature setpoints from zone measurements and forecasts, while a recurrent policy supports online adaptation under partial observability. Our main contribution is an adaptive domain randomization scheme based on physics-informed normalizing flows, which models correlated and multimodal distributions of thermal-zone parameters while maintaining physical plausibility and controllability. This produces a realistic and progressively adaptive training curriculum that improves transfer across buildings. We evaluate NOMAD-RL against a constant-setpoint PID controller, RL without domain randomization, and MPC in single- and multi-zone settings. NOMAD-RL consistently outperforms the PID and non-randomized RL baselines, and approaches the performance of a well-tuned MPC, especially in the more challenging multi-zone case. These results highlight the potential of adaptive, physics-informed domain randomization for robust and transferable HVAC control.
