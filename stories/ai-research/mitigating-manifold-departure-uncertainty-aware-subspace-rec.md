---
title: "Mitigating Manifold Departure: Uncertainty-Aware Subspace Rectification for Trustworthy MLLM Decoding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09859"
authors: ["Yingxuan Zhuang, Jingxiao Yang, Miao Pan, Cheng Tan, Yuxiang Cai, Siwei Tan, Chen Zhi, Xuhong Zhang, Jianwei Yin, Jintao Chen"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09859v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09859v1 Announce Type: new Abstract: MLLMs frequently hallucinate objects inconsistent with visual inputs. This issue is typically attributed to the over-reliance on language priors, which can override the visual context. Recent training-free decoding strategies address this by penalizing language priors. However, these methods overlook the dual nature of language priors, where they can be both helpful and harmful depending on the alignment with visual evidence. In particular, blindly suppressing language priors often disrupts the model's semantic manifold, leading to performance degradation, a phenomenon we term Manifold Departure. To address this, we propose Manifold-Guided Adaptive Projection (MGAP), a geometry-aware, training-free decoding method that mitigates hallucinations while preserving representation structure. MGAP first constructs a language-prior subspace from blind hidden states via SVD. During decoding, MGAP projects each multimodal hidden state onto this subspace and applies a consistency-aware gate to adaptively attenuate only the projected prior component, yielding a subspace-selective update that largely preserves the orthogonal semantic components. Extensive experiments on POPE and CHAIR show that MGAP outperforms prior decoding baselines, achieving stronger hallucination suppression without sacrificing coherence.
