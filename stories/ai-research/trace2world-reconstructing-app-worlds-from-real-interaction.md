---
title: "Trace2World: Reconstructing App Worlds from Real Interaction Traces for Scalable GUI Agent Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30792"
authors: ["Zezhou Wang, Hanzhang Zhou, Panrong Tong, Quyu Kong, Pengxiang Li, Steven Hoi, Zhuzhong Qian, Yue Wang"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.30792v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Scaling GUI reinforcement learning requires environments that preserve real-app behavior. Yet coupling behavior inference with coding can turn partial traces into runnable mocks with incorrect state transitions. We introduce \textbf{Trace2World}, which separates global behavior reconstruction from implementation. It reconciles traces into a shared, source-linked app model, then compiles an executable environment. Independent replay of source workflows localizes mismatches for bounded implementation repair. Validated worlds then support learner-adaptive task and environment augmentation within source-supported behavior. From 1,570 traces, Trace2World constructs 50 environments. On 200 workflows across ten apps, 91.1% are reproduced end to end, versus 59.8% for the strongest matched task-local baseline. Source-grounded validation retains 94.0% of simulated training gains on real devices, versus 54.7% under self-validation. Learner guidance raises benchmark success from 56.9% to 61.1%. Training in Trace2World further improves the model by 20.2 points on our benchmark, 5.4--16.2 points across four external GUI benchmarks, and 16.3 points on 100 real-device tasks. Reliable reconstruction separates what behavior source evidence supports from whether the implementation preserves it.
