---
title: "AutoVend: Benchmarking LLM Agents on Long-Horizon Autonomous Vending Operations"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.36980"
authors: ["Qiming Shi", "Yikun Li", "Beidi Luan", "Rui Sun", "Sinuo Wang", "Delin Wang", "Yan Ma", "Jing Li", "Daxin Jiang", "Zuo Bai"]
date: "2026-10-27T06:33:06.000Z"
score: ""
guid: "2610.36980"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.36980.png"
generated: "2026-11-10T19:01:15+05:30"
---

Large language model (LLM) agents are extending agent-mediated commerce on the Web from shopping for consumers to operating businesses for sellers. In online-to-offline (O2O) commerce, decisions are issued through Web-based platforms but realized through costly physical execution. Evaluating such agents requires going beyond individual transactions to ask whether decisions made online turn into sustained economic returns. We introduce AutoVend, a benchmark in which one LLM agent manages 20 vending machines across five site types through a Web-based operating interface for 180 simulated days. Its data-grounded simulator combines a shared warehouse, procurement lead times, paid replenishment, inventory expiration, and recurring operating costs. We evaluate five LLM agents against a rule-based inventory-control baseline and diagnose their site coordination, execution, and performance over time. Four of five evaluated LLM agents fall short of this baseline, and returns per dollar of inference cost rank models differently from returns alone. Operational analyses show that gains in individual metrics do not consistently yield stronger economic growth, as inventory and execution costs erode these gains. Trajectory analysis further reveals difficulties in grounding feasible actions, managing inventory commitments, and converting feedback into effective policy revisions.
