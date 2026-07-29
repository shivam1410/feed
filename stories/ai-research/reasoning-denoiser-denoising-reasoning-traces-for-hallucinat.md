---
title: "Reasoning Denoiser: Denoising Reasoning Traces for Hallucination Detection in Large Reasoning Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22098"
authors: ["Junlin Fang", "Do Nguyen-Thanh", "Xiaogang Xu", "Zhen Fang", "Sean Du"]
date: "2026-07-23T20:00:00.000Z"
score: 70
guid: "2607.22098"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22098.png"
generated: "2026-07-29T16:31:06+05:30"
---

Large reasoning models (LRMs) generate long reasoning traces before producing final answers. While these traces may contain useful signals for hallucination detection, harnessing them is non-trivial because long trajectories often include noisy steps that obscure the cues relevant to truthfulness assessment. In this paper, we identify two prevalent forms of reasoning noises, i.e., irrelevant steps and repetitive steps, and show that both substantially degrade hallucination detection performance. Existing confidence-based scores and naive embedding-based filtering fail to reliably separate noisy from informative steps. To address this challenge, we propose REDE, a novel learning framework for denoising reasoning traces for hallucination detection. Specifically, REDE leverages final-answer attention as an automatic supervision signal to shape the step-level representation space, yielding refined embeddings in which noisy steps can be reliably identified and filtered. REDE can be readily plugged into diverse hallucination detectors by operating on the filtered reasoning trajectory after removing noisy steps. Extensive experiments on multiple reasoning benchmarks show that REDE consistently improves detection performance over competitive baselines.
