---
title: "OpenHail: An Event-Driven Gymnasium Environment for Electric Ride-Hailing Fleet Control"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30628"
authors: ["Tommaso Schettini, Nicholas D. Kullman, Jorge E. Mendoza"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.30628v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Machine-learning policies have attracted increasing interest for ride-hailing fleet control in recent years. Reinforcement learning, in particular, requires a structured simulation environment that specifies observations, actions, rewards, and decision epochs for training and evaluation. For electric fleets, this environment must also capture the interaction among stochastic demand, vehicle operations, and capacitated charging infrastructure. We present OpenHail, an open-source Gymnasium environment for joint control of electric ride-hailing fleets. Its fixed-size observation--action interface exposes request assignment, repositioning, and charging to a single policy. The event-driven simulator represents requests with pickup deadlines, vehicle job queues, battery dynamics, and finite-capacity charging facilities with first-in--first-out queues. A configurable decision-epoch mechanism separates internal simulator events from policy interactions, supporting event-driven, periodic, hybrid, and policy-requested control within the same operational model. The software provides seeded instances, feasible-action utilities, evaluation tools, operational metrics, and baseline policies. The source code is available at https://github.com/tommaso-schettini/openhail.
