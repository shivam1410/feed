---
title: "Schedule-Calibrated Commitment Order in Blockwise Masked Diffusion Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15234"
authors: ["Gaurav Sarkar (International Institute of Information Technology, Hyderabad), Umang Pandey (Advanced Micro Devices), Pratik Prabhanjan Brahma (Advanced Micro Devices), Zicheng Liu (Advanced Micro Devices), Emad Barsoum (Advanced Micro Devices)"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15234v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Sequential block schedules can make token commitment in masked diffusion language models appear strongly left-to-right even when within-block order is random or reversed. For equal contiguous blocks processed without interleaving in positional order, with untied irreversible commitments, we use a Spearman-rank identity to express global position-commitment correlation as a deterministic schedule reference plus a weighted mean within-block correlation. In a reported paired study of LLaDA-8B-Instruct on 500 math and code prompts with 256 generated positions and updates, increasing block size from 64 to 128 lowers mean global correlation from 0.9845 to 0.9149. Uniform-random within-block references are already 0.9375 and 0.7500. After calibration, mean within-block correlations are 0.751 and 0.660, so the larger raw residual at block size 128 does not indicate stronger local positional ordering. We give sharp bounds and derive calibrated intervals from reported summaries, while documenting the limitations of the aggregate-only empirical release. The analysis supports schedule-aware interpretation of commitment order; its empirical scope is one checkpoint and two schedules, without evaluation of output quality or inference speed.
