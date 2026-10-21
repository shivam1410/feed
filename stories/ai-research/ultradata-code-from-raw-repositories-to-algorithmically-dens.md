---
title: "UltraData-Code: From Raw Repositories to Algorithmically Dense and Task-Oriented Code Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23960"
authors: ["Chengying Tu, Hengyu Zhao, Shuaikang Xue, Zhongming Qu, Jihao Zhou, Xinle Lin, Junshao Guo, Zixuan Fu, Qiang Ma, Jie Zhou, Chaojun Xiao, Hongfei Yan, Yudong Wang, Xu Han, Zhiyuan Liu, Maosong Sun"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.23960v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Code generation has become a core capability of large language models (LLMs), and code data is central to the pre-training process that develops it. As obtaining public code of sufficient quality becomes more difficult, further progress cannot rely on corpus expansion alone. Tiered data management instead applies increasingly targeted processing to smaller data pools, producing data states suited to different training objectives. Following this perspective, we present UltraData-Code as four connected data states spanning repository archival at L0, standardized natural code at L1, algorithmic selection at L2, and task-oriented synthesis at L3. L0 preserves repository data and provenance for reprocessing, while L1 applies scalable filtering, normalization, and near-deduplication for broad pre-training. L2 selects high-quality algorithmically relevant files using language-adaptive relevance signals and quality constraints, yielding approximately 400B tokens of UltraData-Code-L2 across 11 programming languages for focused continual pre-training. L3 converts selected implementations into structured programming exercises, yielding approximately 150B tokens of UltraData-Code-L3 across the same 11 languages for task-oriented mid-training or supervised fine-tuning (SFT). Under controlled 10B-token continual pre-training of a 1B model, L2 improves pass@1 over L1 by 7.80 percentage points (pp) on EvalPlus and 5.13pp on MultiPL-E. Replacing half of the L2 training tokens with L3 yields a further gain of 8.42pp and 8.07pp on the two benchmarks, respectively. Both gains increase when the training budget scales to 100B tokens. We have released our datasets and classifiers to support further research on LLMs.
