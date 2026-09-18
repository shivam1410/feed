---
title: "Beyond Flattened Tokens: Structure-Preserving EEG Decoding with Reusable TriDim Blocks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19842"
authors: ["Shiyue Su, Song Wang, Zekai Zhan, Junjie Zeng, Ziling Lu, Zongsheng Li, Xinyuan Ye, Zhiyuan Ma, Xinke Shen, Quanying Liu"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19842v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19842v1 Announce Type: new Abstract: Effective EEG decoding requires representations that preserve organization among channels, local waveform dynamics, and long-range temporal context. Existing EEG architectures often capture these structures using separate specialized modules or collapse them into a single token sequence, making it difficult to maintain their distinct roles and coordinate their interactions throughout the backbone. We propose TriDim, a reusable block that preserves the representation shape and keeps three EEG axes explicit: channel, sample position within each patch, and patch position across the recording. These axes correspond to spatial, short-term temporal, and long-term temporal information, respectively. Each TriDim block applies feed-forward transformations along individual axes and cross-axis attention to coordinate information exchange among them. By stacking TriDim blocks with a multi-level tri-axis readout, we construct TriDimEEG, a standalone EEG decoder. Under strict cross-subject evaluation on eight datasets spanning clinical diagnosis, sleep staging, motor imagery, and emotion recognition, TriDimEEG achieves the best overall performance among fifteen evaluated models, with a 4.3% relative improvement in average accuracy over the second-best model. Replacing Transformer blocks in three EEG foundation models with TriDim blocks yields an average relative improvement of 7.4% in downstream accuracy while reducing parameter counts by 17.0% to 47.3%. These results establish TriDim as an effective and reusable building block and TriDimEEG as a strong standalone EEG decoder. Code and parameters of TriDimEEG are available at https://github.com/ncclab-sustech/TriDim_model.
