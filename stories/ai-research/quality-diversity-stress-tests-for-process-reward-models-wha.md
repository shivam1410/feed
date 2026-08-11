---
title: "Quality-Diversity Stress Tests for Process Reward Models:What Archive Coverage Can and Cannot Certify"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08008"
authors: ["Ibne Farabi Shihab, Fariya Afrin"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.08008v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08008v1 Announce Type: new Abstract: Process reward models (PRMs) score intermediate reasoning steps and are widely used for search, ranking, and training, but optimization can exploit these learned proxies by increasing reward while turning correct reasoning into incorrect reasoning. We formulate PRM stress testing as a quality-diversity search problem using MAP-Elites, retaining the most severe correctness-flipping edit in each behavior-space region while separating search coverage from exploit coverage. We characterize what such archives certify: finite-cell repair bounds covered-cell tail risk and average residual severity but cannot bound the worst remaining cell from covered fraction alone; under Lipschitz post-repair loss and metric-cover auditing, the residual is bounded by archive fitting error plus the Lipschitz constant times the covering radius. A controlled landscape validates this certificate and the impossibility of any fraction-only worst-case guarantee. On real PRMs, the search reveals an aggregation-dependent vulnerability in Qwen2.5-Math-PRM-7B: padding yields 44 strict exploits with maximum gain 0.294 under mean pooling versus one exploit under minimum readout; a matched syntactic control isolates the mechanism, and an RLHFlow value-head model shows the same qualitative effect with maximum gain 0.005. A predeclared paired LoRA repair protocol reduces exploit rates from 0.148 to 0.037 to 0.074, lowers the worst attack from 0.333 to 0.177 to 0.212, improves ranking AUROC without degrading best-of-4 accuracy, attributes gains to adversarial fine-tuning rather than archive diversity, and is confirmed by independent unpaired replications (44 to 1, clean-split worst gain 0.0092, MATH-500 41 to 0, clean ranking 40/40).
