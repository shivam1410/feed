---
title: "Don't Claim Benchmark-Oriented Optimization Improves General Coding Capability -- Diverse Evaluation Is Required"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13566"
authors: ["Egor Shibaev, Vera Kudrevskaia, Timur Galimzyanov, Mikhail Evtikhiev, Ana Terna, Rastislav Rabatin, Timur Kudashev, Timofey Bryksin, Arina Puchkova, Patrik Bartak, Egor Bogomolov, Sergey Titov"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.13566v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13566v1 Announce Type: new Abstract: Post-training papers, model cards, and blog posts often treat scores on a small set of coding benchmarks (e.g., SWE-bench and LiveCodeBench) as evidence of broad coding capability, both for research artifacts and user-facing systems. We argue that optimization for these benchmarks leads to measuring task-specific performance, creating a meaning gap between measured scores and claims of general coding ability. We examine this gap with a Django-based case study benchmark suite we create. Evaluating foundation models and checkpoints post-trained on SWE-bench trajectories, we find that benchmark rankings frequently fail to generalize. Post-trained checkpoints show little cross-task transfer, and SWE-bench optimization yields limited or no gains on our tasks or on LiveCodeBench. Similarly, fine-tuning on individual Django modalities fails to transfer. We conclude that a small number of benchmarks is insufficient for evaluating diverse models under benchmark optimization pressure. We encourage the community to use differentiated evaluation - holistic assessment for frontier models, multi-task suites for research, and human-in-the-loop studies for narrow task applications. Finally, we argue for creating a capability taxonomy and sustained benchmark maintenance, rather than one-off benchmark releases. Without reliable evaluation standards, engineers and researchers using LLMs and agents have to rely on insufficient evidence to make research, development, and deployment decisions.
