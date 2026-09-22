---
title: "GRRR: The Geometry of Reshaping, Rotation, and Routing in Decoder LLM post-training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22146"
authors: ["Jianing Qi, Hao Tang, Zhigang Zhu"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 73
guid: "oai:arXiv.org:2609.22146v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22146v1 Announce Type: new Abstract: We study how post-training changes the weights of Large Language Models (LLMs) relative to their pretrained weights. Across 12 post-training chains with supervised fine-tuning (SFT) and reinforcement learning (RL), we express each weight update in the pretrained matrix's singular value decomposition (SVD) frame. This decomposition separates the changes of three geometrically distinct components: diagonal values, which reshapes singular values; off-diagonal values, which rotates the coupling between pretrained input and output directions; and null-space values, which routes outside the matrix's original nonzero SVD core. On a math evaluation suite, we find that removing the diagonal component usually preserves most of the gains from post-training. These results suggest that post-training gains are carried primarily by reconfiguring and extending pretrained pathways rather than by substantially changing singular values of pre-trained models.
