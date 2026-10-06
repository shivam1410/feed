---
title: "KVE-KD: Key Visual Evidence-Guided Knowledge Distillation for Vision-Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03842"
authors: ["Jianbin Zhang, Xin Sun, Shanwen Wang, Wei Ye, Susanto Rahardja"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.03842v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Knowledge distillation is crucial for deploying vision-language models on resource-constrained devices. However, existing methods typically impose uniform supervision across visual tokens or rely on static token selection, which confuses task-relevant cues with background noise and degrades cross-modal reasoning. To address this limitation, we propose Key Visual Evidence-guided Knowledge Distillation (KVE-KD), a framework that dynamically focuses feature distillation on task-relevant visual tokens identified by the teacher model. Specifically, KVE-KD appoints the final pre-generation textual token as a unified semantic anchor and identifies the target cross-modal fusion layer by analyzing changes in the anchor representation through iterative visual-token contribution removal. Within this layer, KVE-KD ranks visual tokens via the anchor-conditioned attention distribution and selects the most informative visual tokens as key visual evidence with normalized entropy. The key visual evidence subsequently guides focused visual feature distillation, making the student align closely with the teacher's task-relevant visual representations while suppressing irrelevant background information. Extensive experiments on six benchmarks demonstrate that KVE-KD outperforms state-of-the-art cross-modal distillation methods, with particularly pronounced gains on tasks requiring complex reasoning and fine-grained visual understanding. Importantly, these improvements are achieved without introducing any inference-time overhead. The source code is available at https://github.com/zhangjianbin07/KVE-KD.
