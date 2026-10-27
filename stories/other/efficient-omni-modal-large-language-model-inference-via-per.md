---
title: "Efficient Omni-modal Large Language Model Inference via Per-Query Modality Selection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31768"
authors: ["Shuqi Liu, Yuzhou Cao, Luke Ong"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31768v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Omni-modal large language models (Omni-LLMs) can jointly process a broad range of modalities, such as text, audio, and video, enabling stronger multimodal understanding and reasoning capabilities, but often at substantial inference cost. We observe that the benefit of additional modalities varies across queries, indicating that a fixed modality configuration can be inefficient. Motivated by this, we study query-wise modality selection, which keeps the underlying Omni-LLM fixed while adaptively selecting which modalities to provide for each query. We formulate the problem as an accuracy-cost optimization problem and develop a cost-sensitive learning approach for modality selection. We evaluate our approach on WorldSense using Qwen2.5-Omni and Qwen3-Omni under three inference-cost measures: input tokens, latency, and monetary cost. Across both models, query-wise modality selection consistently improves the accuracy-cost trade-off and can even outperform the standard setting in which all available modalities are provided to the Omni-LLM. For Qwen2.5-Omni, our cost-sensitive approach matches or exceeds this full-modality accuracy while requiring only approximately 41% of the input tokens, 39% of the latency, and 61% of the monetary cost.
