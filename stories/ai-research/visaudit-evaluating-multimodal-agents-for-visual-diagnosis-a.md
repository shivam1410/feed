---
title: "VisAudit: Evaluating Multimodal Agents for Visual Diagnosis and Repair"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02399"
authors: ["Shicheng Liu, Adam Kahirov, Qi Zhang, Zhimin Hu, Song Wang, Junhong Lin, Julian Shun, Yada Zhu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2610.02399v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Multimodal agents are increasingly used for data visualization tasks but remain limited in autonomous review. Unlike humans, they may fail to recognize when a visualization is incorrect, determine what to change, repair it without disrupting correct content, and verify whether the intervention succeeded. Existing benchmarks largely evaluate predefined individual capabilities such as chart generation, instruction-guided editing, or defect detection, and therefore do not capture this gap in autonomous review. We introduce VisAudit, a benchmark for evaluating visualization diagnosis, repair, and verification. Given a rendered chart and configurable auxiliary evidence, including its source data table, intended text summary, and visualization code, an agent iteratively diagnoses potential defects, modifies and executes visualization code, inspects execution and visual feedback, and determines when no further intervention is needed. VisAudit defines three tracks spanning diagnosed repair, autonomous repair, and open-world verification, and contains 1,900 flawed instances across 21 chart types and 10 flaw categories, together with 300 initially correct charts. We construct the benchmark through controlled perturbations of validated source visualizations, with systematic verification and human-aligned quality control to ensure that injected defects are well-defined and recoverable from the available evidence. Experiments with leading multimodal models reveal a substantial gap from reliable autonomous review: the strongest evaluated model fully recovers only $47.4\%$ of flawed charts in the autonomous-repair setting.
