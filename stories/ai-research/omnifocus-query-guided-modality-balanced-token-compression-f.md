---
title: "OmniFocus: Query-Guided Modality-Balanced Token Compression for Omni-Modal Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03050"
authors: ["Shijie Cao, Qingyu Zhang, Boxi Yu, Yuzhong Zhang, Boxi Cao, Yaojie Lu, Hongyu Lin, Xianpei Han, Le Sun"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03050v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03050v1 Announce Type: new Abstract: Omni modal large language models (OmniLLMs) have attracted wide attention for their ability to jointly process audio and video, but they generate large token sequences under audio-visual inputs, leading to substantial inference cost. Existing audio-visual token compression methods often rely on unimodal guidance, overlooking the temporal locality of query-relevant evidence in audio-visual inputs and implicitly assuming that the two modalities share a temporally aligned information density distribution. We propose \textbf{OmniFocus}, a training-free query-guided token compression method for OmniLLMs that performs independent importance estimation for video and audio, enabling a modality-symmetric compression design that preserves modality-specific salient evidence while maintaining audio-visual alignment, thereby mitigating the modality bias issue that can arise from unimodal-guided compression. Experiments on the Qwen2.5-Omni model family across four audio-visual benchmarks show that OmniFocus maintains strong compressed performance at low token retention ratios and outperforms existing baselines on several major benchmark scores at 25\% token retention. On DailyOmni with Qwen2.5-Omni-7B at 25\% token retention, OmniFocus maintains 59.40 accuracy while delivering up to 1.38$\times$ prefill speedup relative to the full-token baseline, highlighting a favorable practical accuracy-efficiency trade-off.
