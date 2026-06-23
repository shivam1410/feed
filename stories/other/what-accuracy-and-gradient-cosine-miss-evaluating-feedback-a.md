---
title: "What Accuracy and Gradient Cosine Miss: Evaluating Feedback Alignment via Scale Stability, Reference Validity, and Depth Utility"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21126"
authors: ["Yuren Hao, Xiang Wan, ChengXiang Zhai"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21126v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21126v1 Announce Type: new Abstract: Despite the success of deep learning, training deep networks in biologically plausible and hardware-efficient ways remains an open challenge. Feedback alignment (FA) methods address this by replacing backpropagation's symmetric backward weights with fixed random matrices, but their effectiveness depends critically on whether they can be accurately evaluated. The standard evaluation relies on two quantities: task accuracy and cosine similarity between the method's credit signal and the backpropagation gradient. We show that this reporting pair is insufficient by identifying two independent failure modes, both silent under current reporting: (1) measurement degeneracy, where the BP reference gradient collapses to the numerical floor in terminal-LayerNorm residual architectures, rendering cosine uninterpretable; and (2) aggregation collapse, where the aggregate cosine masks layerwise heterogeneity that concentrates credit at one end of the network. To address these limitations, we propose a diagnostic evaluation protocol based on three checks -- scale stability, reference validity, and depth utility -- together with per-layer rather than aggregate cosine reporting. Across multiple architectures and methods, the standard reporting pair gives no signal of failure in any audited case, while our protocol identifies all failures with wide calibration margins. The two failure modes are causally independent: a per-block scale penalty alleviates Mode 1 (residual scale explosion driving reference collapse) without affecting Mode 2 (cosine ranking that contradicts every functional metric we measured). Identifying these silent failures prevents researchers from building on non-functional credit assignment and provides actionable guidance for developing FA methods that genuinely train deep layers.
