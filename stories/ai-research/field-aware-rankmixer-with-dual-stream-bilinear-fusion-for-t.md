---
title: "Field-Aware RankMixer with Dual-Stream Bilinear Fusion for the Tencent UNI-REC Challenge"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15590"
authors: ["Yufeng Zhang, Zhengqi Xu, Jiajun Cui"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2607.15590v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15590v1 Announce Type: new Abstract: This paper presents our solution to the KDD Cup 2026 Tencent UNIREC Challenge. The task requires joint modeling of multi-domain user behavior sequences and non-sequential multi-field features for target-ad pCVR prediction. We develop a Field-Aware RankMixer (FA-RankMixer) with dual-stream bilinear fusion. The model first applies target-aware DIN modules to extract user interests from multiple behavior domains. It also models recent and earlier interests separately for the longest behavior sequence. The model then forms semantic tokens based on feature fields and behavior domains and uses RankMixer blocks for cross-token interaction. A shallow MLP stream complements the deep RankMixer stream, and a group-wise bilinear module fuses their representations. Our final solution ranks ninth on the official leaderboard. Our code is available at https://github.com/PixelCookie-zyf/TAAC-2026-SeRankMixer.
