---
title: "Mitra-v2 Technical Report"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04540"
authors: ["Yefan Tao (Bernie), Xiyuan Zhang (Bernie), Xinyi Liu (Bernie), Boran Han (Bernie), Danielle Maddix (Bernie), Haoyang Fang (Bernie), Zhen Han (Bernie), Jiading Gai (Bernie), Xuanqing Liu (Bernie), Michael Bohlke-Schneider (Bernie),  Yuyang (Bernie),  Wang, Gerald Friedland, Kevan Mah, Chris Lee, Chris Kong"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.04540v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04540v1 Announce Type: new Abstract: We introduce Mitra-v2, a tabular foundation model that delivers state-of-the-art performance on real-world classification and regression problems, from credit-risk scoring and clinical prediction to equipment-failure detection and house-price estimation. Mitra-v2 is trained only on synthetic data, with a pretraining distribution that is much larger and more diverse than Mitra-v1's. Built on a small 2D Transformer backbone, Mitra-v2 supports longer contexts and larger feature spaces. Improved optimization lets it learn from this larger task distribution. We evaluate Mitra-v2 on the TabArena and TALENT benchmarks, comprising more than 300 real-world datasets under two evaluation protocols. On the full TabArena benchmark, Mitra-v2 delivers state-of-the-art performance at the level of the industry-scale TabFM and EXAONE Tabular models, while surpassing TabPFN-3 by a wide margin in both classification and regression. Mitra-v2 matches the 1.6B-parameter TabFM with only 5% of its size (77M parameters), delivering frontier performance at a fraction of the cost. On TALENT, Mitra-v2 remains among the leading models, clearly outperforming TabPFN-3 and TabICLv2. It also ranks first on classification tasks with more than ten classes, even though it was pretrained only on tasks with at most ten classes. These results make Mitra-v2 one of the strongest and most broadly applicable open tabular foundation models released to date. We release the model weights, the inference and fine-tuning code, and our evaluation results under the Apache-2.0 license.
