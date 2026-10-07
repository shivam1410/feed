---
title: "Event-Driven ML Pipeline Orchestration for Manufacturing: An AWS Industry Experience"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06890"
authors: ["Zhengyang (Cissy),  Gu, Thomas Cook, Fredaljohn Rohrbaugh, Joseph E. Hernandez, Chris Couch"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.06890v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

We present an industry experience report on three years of operating an event-driven cloud infrastructure for continuous machine learning training in automotive manufacturing. Our system orchestrates GPU-accelerated training of product-specialized model pairs, a physics prediction model and a reinforcement-learning control policy, across multiple plants, coordinating long-running GPU workloads triggered by manufacturing events. The architecture combines Amazon ECS with EC2 GPU capacity providers, SQS-based messaging with dead-letter queues, and an admission-controlled Lambda dispatcher that enforces cluster concurrency limits. A Conductor orchestrator on ECS Fargate initiates dependency-aware retraining chains on a weekly schedule. The entire infrastructure is codified in modular Terraform with multi-account separation. From 40000+ production training jobs we report a 72-78% cost reduction versus always-on GPU infrastructure. A discrete-event simulation confirms that admission control is necessary (naive dispatch loses 65% of jobs) and that queue-draining matches AWS Step Functions latency while eliminating per-job startup overhead. We provide lessons learned and release the simulator and Terraform module skeletons as open-source artifacts.
