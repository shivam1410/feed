---
title: "What to Practice Next? Latent Profile-Guided Task Selection for Skill-Evolving LLM Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18818"
authors: ["Qijin Zhang, Hanzhen Wang, Yan Huang, Zhongxiang Dai, Shuang Qiu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18818v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Task selection shapes the experiences available for skill evolution in LLM agents, yet fixed practice schedules overlook differences in skill requirements and evolving task value. Most existing methods, however, rely on fixed schedules or scalar measures of progress, leaving nonstationary skill demands unaddressed. We propose SPG-Select, a framework for allocating limited practice budget using a multidimensional profile inferred from binary outcomes via MIRT. The framework predicts surrogate progress, defined as the difference between consecutive profile estimates, and prioritizes progress in dimensions with larger estimated proficiency gaps. Our SPG-Select-R policy combines these predictions with uncertainty-based exploration and periodic restarting to accommodate nonstationarity. We evaluate SPG-Select on ALFWorld and WebShop with three skill-evolution backends. In the reported runs, SPG-Select-R achieves higher mean held-out terminal success than uniform sampling in all six backend-benchmark combinations, with gains of 1.49-13.18 percentage points on ALFWorld and 0.93-3.13 points on WebShop. Under a predictable linear surrogate model and boundedness assumptions, we establish a high-probability dynamic pseudo-regret bound for surrogate task allocation in terms of parameter path variation.
