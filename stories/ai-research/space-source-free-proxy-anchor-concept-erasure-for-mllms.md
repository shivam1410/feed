---
title: "SPACE: Source-free Proxy Anchor Concept Erasure for MLLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09868"
authors: ["Zhijing Zhang, Jiaqi Ding, Qianshan Wei, Nan Zhou, Jiaqi Li, Yongliang Wu, Tongxin Zhu, Xiaolin Fang"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09868v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09868v1 Announce Type: new Abstract: As Multimodal Large Language Models (MLLMs) face growing privacy risks and regulatory constraints, machine unlearning (MU) has emerged as a crucial solution for removing sensitive data while preserving model performance. However, existing MU methods typically rely on visual data of the target concepts, which is often unavailable due to strict data retention policies, thus creating a demand for source-free unlearning approaches that operate without access to the target data. In this work, we propose Source-free Proxy Anchor Concept Erasure (SPACE), the first source-free unlearning framework specialized for MLLMs. SPACE consists of two stages: (1) Text-Guided Proxy Anchor Selection (TPAS), which retrieves semantically aligned proxy anchors from the shared feature space. (2) Dual-Constraint Semantic Isolation (DCSI), which optimizes these anchors to indirectly erase target concepts. DCSI confines updates to the null space of retained knowledge, ensuring structural integrity. We theoretically prove that SPACE strictly bounds the perturbation on retained knowledge and maximizes feature spectral entropy, thereby maintaining the model's performance. Furthermore, extensive experiments across six datasets show that SPACE achieves performance comparable to that of state-of-the-art data-dependent methods, validating its effectiveness in source-free MU scenarios. The source code will be released.
