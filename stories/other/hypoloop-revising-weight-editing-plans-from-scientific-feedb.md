---
title: "HypoLoop: Revising Weight-Editing Plans from Scientific Feedback"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23718"
authors: ["Mengran Li, Xichen Yan, Bo Li, Chengyang Zhang, Jinfeng Xu, Zheng Lin, Zelin Zang, Zhen Lei, Jiebo Luo, Victor C. M. Leung, Stan Z. Li"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23718v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Scientific experiments continually reveal prediction errors. Effective updates depend on which parameters change and which errors drive the correction. We introduce HypoLoop, a family of native weight-editing methods that connects these choices to experimental feedback. Fixed, numerically adaptive, and LLM-guided policies produce editing plans; numerical solvers compute weight patches, and internal validation selects the deployed predictor. Successive observations and validation records support revisions to editable locations and fitting rules. Experiments cover 22 scientific tasks and both DeepSeek and Claude. On Burgers, reallocating a matched parameter budget reduces error by 58.80% and 47.72% relative to fixed locations. On DIODE, positive-residual weighting reduces absolute relative error (AbsRel) by 13.35% in internal cross-validation, with the same 33 editable coordinates. Revising the complete plan across rounds lowers final AbsRel by 10.59% relative to keeping the initial plan fixed. SpaceNet7 and Make3D connect accepted edits to improved spatial predictions. These results show how experimental evidence can shape the update problem itself. Code: https://github.com/limengran98/HypoLoop.
