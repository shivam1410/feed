---
title: "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.09823"
authors: ["Deyuan Liu", "Yihao Hu", "Jingxuan Zhang", "Xingying Li", "Jun Xie", "Jiacheng Liu", "Jungang Li", "Yu Huang", "Xuanyi Liu", "Yue Ding", "Zecheng Wang", "Lei Zhao", "Mingda Wang", "Zhenglin Cheng", "Peng Sun", "Tao Lin"]
date: "2026-10-06T20:00:00.000Z"
score: 63
guid: "2610.09823"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.09823.png"
generated: "2026-10-08T19:08:02+05:30"
---

Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.
