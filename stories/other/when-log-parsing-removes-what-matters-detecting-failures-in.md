---
title: "When Log Parsing Removes What Matters: Detecting Failures in Distributed GPU Workloads"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14009"
authors: ["Boyuan Cui, Yuyang Zeng, Yifang Tian, Hans-Arno Jacobsen"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14009v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Large AI models increasingly rely on distributed GPU execution, yet it remains unclear whether established failure analysis methods transfer effectively to this setting. We introduce GF-Bench, a PyTorch-based framework and dataset for generating diverse failures in distributed GPU workloads. The framework supports extensible workload and fault-injection logic; based on this design, the current release targets failures visible in multi-GPU communication logs and provides 220 labeled two-GPU executions covering normal runs, CUDA out-of-memory fail-stop failures, and persistent straggler fail-slow failures. Using GF-Bench, we evaluate three sequence-based methods (DeepLog, LogAnomaly, and LogBERT) and the LLM-based LogPrompt on parsed logs, and additionally evaluate LogPrompt on raw logs. On parsed inputs, no method reliably detects both failure classes, and the highest overall F1 score is 0.667. Raw inputs raise the overall F1 score of in-context LogPrompt to 0.983, at 9.0x its average input-token usage and 8.7x its per-run cost. These results expose a substantial trade-off between effectiveness and efficiency: generic log parsing lowers operational cost but discards the distributed execution context required for accurate failure detection. GF-Bench provides a reproducible basis for studying cost-efficient analysis methods and can be extended to additional GPU workloads and failure types.
