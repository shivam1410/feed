---
title: "SWE-MISBEHAVIOR: Benchmarking and Mitigating Boundary Violations in Software Coding Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18206"
authors: ["Do Xuan Trong", "Duc Anh Nguyen", "Do Xuan Long", "Ngoc-Hai Nguyen", "Tongyao Zhu", "Duy Dinh", "Cayden Chik", "Cuong Dang", "Jiaying Wu", "Xuan-Phi Nguyen", "Vinh Van Nguyen", "Kenji Kawaguchi", "Shafiq Joty", "Nancy F. Chen", "Min-Yen Kan"]
date: "2026-10-12T20:00:00.000Z"
score: ""
guid: "2610.18206"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18206.png"
generated: "2026-10-14T19:00:21+05:30"
---

We present SWE-MISBEHAVIOR, the first taxonomy and evaluation framework for diagnosing boundary-violating misbehaviors in coding agents. It contains 7.4K human-in-the-loop synthesized samples spanning three layers of agent action space: (i) Code Generation, (ii) File Management, and (iii) System Interaction. Across these categories, SWE-MISBEHAVIOR covers 11 distinct misbehaviors with a fully automated evaluation protocol, including coding-action violations, Create/Read/Update/Delete (CRUD) file misbehaviors, system integrity and abuse violations, and task-goal misalignment. Experiments on state-of-the-art open-source coding agents (e.g., OpenHands, smolagents) reveal substantial misaligned behaviors, including dependency misinterpretation (up to 98.5% of cases), unintended modification of user inputs (50.5%), and silent compromise of environment integrity (53%). Motivated by these findings, we further propose CODE-KIT, a lightweight adaptive framework that combines misbehavior-aware guidelines with novel tools to help agents avoid such failures. CODE-KIT reduces misbehaviors by 52% for smolagents and 34% for OpenHands, while simultaneously improving task completion performance.
