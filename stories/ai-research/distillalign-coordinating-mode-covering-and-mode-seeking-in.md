---
title: "DistillAlign: Coordinating Mode Covering and Mode Seeking in Autoregressive Video Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26811"
authors: ["Jiaxing Li", "Kai Zou", "Cindy Zhou", "Kaichen Huang", "Junyao Gao", "Zile Wang", "Yang Liu", "Bin Liu", "Bo An", "Yangguang Li"]
date: "2026-07-28T20:00:00.000Z"
score: 65
guid: "2607.26811"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26811.png"
generated: "2026-08-02T19:04:48+05:30"
---

Existing autoregressive video distillation methods commonly adopt a Distribution Matching Distillation (DMD)-based multi-stage pipeline. However, they typically decouple the initialization and DMD stages -- which then pursue different target distributions -- and judge the intermediate student mainly by visual scores such as VBench. In this paper, we revisit this design from a distributional perspective. Given the mode-seeking nature of the distribution matching loss, a good initialization should match the mode coverage of the target DMD teacher, rather than merely pursuing high quality. To analyze this, we introduce a distributional evaluation protocol that measures precision and coverage between student and teacher distributions in a shared latent space. It exposes differences hidden by visual scores: some initializations reach high precision but low coverage, leading to suboptimal refinement, while mode-covering ones preserve broader support. Furthermore, even when the target distributions are aligned, DMD's reverse-KL objective can still drive the student toward high-probability teacher regions in late training, reducing coverage and diversity. To address this, we propose joint distillation, which combines DMD's mode-seeking objective with a Consistency Distillation-based mode-covering constraint. Experiments show that our method improves generation quality, coverage, and diversity; notably, even with a Wan-1.3B DMD teacher, it outperforms baselines refined with Wan-14B, underscoring the importance of distributional alignment in autoregressive video distillation.
