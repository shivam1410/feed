---
title: "Reusing Calibration Gains across Model Representations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22771"
authors: ["Xu Cao, Wenxuan Xiao"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.22771v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Scale calibration learns an update for one model representation. We study how much of that update can be reused by another representation of the same pretrained model. Our transfer procedure extracts positive group-wise gains and installs them in the recipient's weights or native quantization scales without recipient-side optimization. On a quantized recipient, it preserves integer codes, zero points and storage layout. For a Qwen3-1.7B floating-point/GPTQ INT3 pair, bidirectional transfer retains 76.9-90.5% of the text-loss improvement from recipient-specific calibration on fresh WikiText and C4 cohorts excluded from project development. Shuffling the same gain values within each projection worsens both recipients, showing that their learned group assignment matters after transfer. A Llama-3.2-3B control keeps the initial native tensors at all four calibrated projections identical and changes nine projections elsewhere. Cross-installation retains 98.6-99.3% of the text-calibration benefit, alongside a small, resolved preference for each recipient's own gain. These results quantify both the adaptation carried by a reusable calibration update and the remaining benefit of recipient-specific training.
