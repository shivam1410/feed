---
title: "From Confident Closing to Silent Failure: Characterizing False Success in LLM Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09863"
authors: ["Laksh Advani"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09863v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09863v1 Announce Type: new Abstract: LLM agents can fail silently by asserting task completion when the environment state shows otherwise. We study this failure mode, false success, across two agent benchmarks: 9,876 tau2-bench trajectories from 8 model families and 1,879 AppWorld trajectories from 4 model families with text-independent ground truth. False success is common but varies by setting: 45--48% of failures in single-control tau2-bench domains, 3% in dual-control telecom, and 75.8% among AppWorld self-assessing coding-agent trajectories with explicit status claims. LLM judges fail reliably: no configuration across 5 judges, 5 prompt strategies, and full task specifications exceeds AUROC 0.65 on tau2-bench, and the same judges reach only 0.54 AUROC on AppWorld API-call traces. Judges rely on surface completion proxies -- confident closing language in tau2-bench and coarse action-sequence volume in AppWorld -- rather than verified state changes. Lightweight TF-IDF detectors achieve task-disjoint AUROC 0.83 on tau2-bench and 0.95 on AppWorld, recovering 4--8x more false successes than the best judge at the same flag rate with 3,300x lower latency. These results suggest that production monitoring should use lightweight, domain-calibrated detectors as triage signals rather than relying on LLM judges as the primary monitor for false success.
