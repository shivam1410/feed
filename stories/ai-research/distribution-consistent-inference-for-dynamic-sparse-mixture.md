---
title: "Distribution-Consistent Inference for Dynamic Sparse Mixture-of-Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09241"
authors: ["Dohyeon Kim, Bedionita Soro, Sung Ju Hwang"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09241v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09241v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) architectures have emerged as a powerful paradigm for scaling model capacity while preserving efficient inference in large foundation models. However, most MoE models use a fixed top-$k$ expert selection policy, assigning the same expert budget to every token even when fewer experts may be sufficient. Inference-time dynamic top-$k$ routing can reduce computation without retraining, but existing methods often overlook the distributional shift caused by deviating from the training-time routing configuration. We show that reducing the number of activated experts consistently increases the RMS scale and variance of SMoE outputs, inducing a representation mismatch that contributes to downstream performance degradation in addition to the loss of expert capacity. To address this correctable component, we propose Layer-wise Distribution Alignment (LDA), a lightweight inference-time correction that uses layer-wise calibration statistics to align reduced-routing representations with the default configuration. Across multiple SMoE LLMs, benchmarks, and routing strategies, LDA recovers much of the performance lost induced by the distributional shift under reduced routing while preserving sparse-inference efficiency with negligible overhead.
