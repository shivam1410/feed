---
title: "Toward Federated Multimodal Graph Foundation Models: A Topology-Aware Multimodal Alignment Framework"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15687"
authors: ["Xunkai Li, Guohao Fu, Yuming Ai, Zhengyu Wu, Hongchao Qin, Rong-Hua Li, Guoren Wang"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.15687v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15687v1 Announce Type: new Abstract: Multimodal-attributed graphs (MAGs), whose nodes carry modalities such as images and text alongside topological structure, now pervade applications including social platforms, e-commerce, and biomedical networks, offering richer semantic signals than single-modality graphs. In practice, such graphs are fragmented across privacy-restricted silos owned by different platforms and institutions, so learning a broadly transferable model over them demands collaborative training that never exposes raw data. This places the task at the intersection of multimodal graph learning and federated learning, yet existing methods cover only one side of it. To address the challenges from these two perspectives, we propose FedGAMMA, casting federated multimodal graph foundation learning as a two-stage semantic-structural alignment problem of federated pre-training and prompt-based fine-tuning. During pre-training, a shared-private semantic enhancer disentangles cross-modal commonality from modality-specific information, aligning it through optimal transport, a topology-aware graph fusion module decouples semantic and structural views via semantic residual graphs and dual positional encodings, and a dual-channel affinity-aware aggregation mechanism estimates client similarity from feature and graph centroids without exposing raw data. During fine-tuning, FedGAMMA adapts the pretrained encoder through lightweight graph-aware prompts, a shared prompt pool with controlled exploration, and channel-wise prompt synchronization. Experiments on twelve multimodal graph datasets show FedGAMMA consistently surpassing a broad range of baselines across downstream tasks, with gains of up to 12.96%. FedGAMMA further outperforms competitive baselines accross multi-domain datasets on multiple tasks with up to 5.71% under few-shot learning scenario.
