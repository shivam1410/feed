---
title: "ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.14857"
authors: ["Siwei Wu", "Jincheng Ren", "Yizhi Li", "Haau-Sing Li", "Chengran Yang", "Yuxuan Zhang", "Weicheng Gu", "Jian Yang", "Riza Batista-Navarro", "Chuanyi Zhang", "Xianglong Liu", "Ming Zhou", "Bryan Dai", "Chenghua Lin"]
date: "2026-09-13T20:00:00.000Z"
score: ""
guid: "2609.14857"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.14857.png"
generated: "2026-09-17T19:00:24+05:30"
---

Recent work extends recursive self-improvement (RSI) to agent harnesses for long-horizon coding and terminal tasks, enabling agents to improve execution mechanisms from experience. However, generalizable harness RSI remains challenging. First, evolving harnesses on evaluation benchmarks or their subsets makes it difficult to distinguish reusable improvements from benchmark-specific adaptation. Second, single-trajectory updates can conflate systematic harness deficiencies with instance-specific reasoning and solution details, producing modifications that transfer poorly to unseen tasks. Third, localizing recurring behavioral deficiencies within monolithic harnesses is difficult, while whole-harness optimization can entangle unrelated mechanisms and complicate attribution and validation. We propose ModularRSI, a benchmark-disjoint, contrastive, and modular framework for generalizable harness evolution. ModularRSI contrasts successful and failed trajectories for the same task and aggregates evidence across tasks to identify recurring behavioral deficiencies. It decomposes the evolvable harness into five functional modules: Agent Loop, Tool Use, Observation Management, Context Management, and Task Completion Detection. Each module evolves independently within a restricted modification scope, followed by an integration stage that combines the evolved modules into a unified harness and resolves potential conflicts. To support benchmark-disjoint evolution, we curate 2,000 executable evolution tasks from external sources that are disjoint from downstream evaluation benchmarks. Experiments on TB2.0 and SWE-Bench Verified show consistent improvements on unseen in-domain and cross-domain tasks, with the evolved harness also transferring across different foundation models.
