---
title: "ULPack: Reference-Conditioned Lossless Compression of Checkpoint Trajectories"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14184"
authors: ["Aniket Srinivasan Ashok (University of Waterloo)"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14184v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Studying model training requires checkpoint trajectories, whose storage cost limits temporal resolution. Although adjacent checkpoints are numerically close, existing lossless codecs either operate on XOR bit patterns or ignore trajectory-specific conditional structure. We show that a reference weight's exponent predicts the bit length of its displacement in ordered floating-point space without side information. We introduce \textbf{ULPack}, a lossless codec which exploits this dependence by conditioning entropy models of ordered-integer residuals on the reference exponent. Across bfloat16, float16, and float32 trajectories, ULPack reduces storage by up to 27\% against ZipNN, 21\% against zstd-19, and 11.5\% against FM-Delta. Across two dense trajectories, compression improves as updates shrink and reference conditioning strengthens, while near uniform low-order bits set the remaining compression floor and earlier checkpoints add little information.
