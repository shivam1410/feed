---
title: "Nereus: Adaptive Parallelism for LLM Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.34645"
authors: ["Songlin Jiang", "Tuo Shi", "Sitong Zhang", "Zeke Wang", "Mario Di Francesco", "Bo Zhao"]
date: "2026-09-27T20:00:00.000Z"
score: 68
guid: "2609.34645"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.34645.png"
generated: "2026-09-29T19:09:35+05:30"
---

Reinforcement learning (RL) post-training for large language models (LLMs) coordinates multiple models across generation, inference, and training on GPU clusters. Several factors may change during a run, including resource availability, sequence length, memory pressure, and stage bottlenecks. As a consequence, an execution plan that was initially suitable can then become slow or even infeasible over time. However, adapting a job whose models share GPUs entails significant challenges: deciding whether a new plan is worth the transition cost, reusing the job's distributed state, and coordinating GPU transfers across models and stages.
  Nereus targets these challenges as a cost-aware runtime that adapts RL post-training jobs into efficient execution plans. Its low-overhead controller selects a memory-feasible global plan and admits the transition using a cost model calibrated against the running job. To estimate and execute a transition, Nereus represents the distributed state of each replica of a model-stage (one model in one stage) as an Elastic Model Unit. It then employs a global transition graph to order the transformations and GPU transfers of these units. In a trace built from real data, online TP/PP adaptation reduces average step latency by 27.7% relative to the initial fixed TP/PP layout with DP scaling. In a 1,000-step run reaching 1,024 GPUs, six transitions consume 0.079% of total run time. Nereus improves end-to-end 8B PPO throughput by 2.14--7.27times over OpenRLHF and by 1.10--1.47times over Verl across diverse clusters.
