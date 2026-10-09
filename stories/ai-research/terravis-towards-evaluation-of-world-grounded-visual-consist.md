---
title: "TerraVis: Towards Evaluation of World-Grounded Visual Consistency in Text-to-Image Generation via MLLM Workflows"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02959"
authors: ["Shuai Fu", "Jing Gu", "Jian Zhou", "Zicheng Duan", "Gengze Zhou", "Qi Wu"]
date: "2026-10-01T20:00:00.000Z"
score: 52
guid: "2610.02959"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02959.png"
generated: "2026-10-10T00:52:03+05:30"
---

Recent text-to-image models have made substantial progress in photorealism, aesthetics, and text-image alignment. Yet visually appealing images can still violate real-world plausibility, exhibiting malformed object structures, impossible anatomy, physically implausible interactions, or inconsistent spatial relationships. Such failures are not well captured by existing fidelity, aesthetics, preference, or alignment metrics. To address this gap, we introduce TerraVis, a framework for evaluating world-grounded visual consistency in generated images. TerraVis defines a structured taxonomy of world-consistency violations spanning object-, interaction-, and scene-level failures, and employs a multi-stage evaluation framework to identify and quantify them. Given an image, TerraVis first uses an MLLM to assess its eligibility for evaluation, then detects violations across 18 taxonomy-defined types and classifies them as minor or major to derive an overall world-consistency score. Across diverse open-source and proprietary text-to-image models on two widely used benchmarks, TerraVis achieves the strongest correlation with human judgments of world consistency among existing metrics. Our benchmark results further show that models that achieve strong performance on conventional metrics can still exhibit substantial world-consistency failures. These findings highlight world consistency as a complementary evaluation dimension and demonstrate that TerraVis enables systematic quantification, diagnosis, and comparison of such failures. Our code is publicly available at https://github.com/ShyFoo/TerraVis.
