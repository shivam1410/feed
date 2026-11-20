---
title: "EgoCaptioner: Towards Comprehensive and Fine-Grained Egocentric Video Captioning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.26380"
authors: ["Yuqi Tang", "Yang Shi", "Yuran Wang", "Tengfei Liu", "Rundong Wang", "Zongyang Qiu", "Qixun Wang", "Zhuoran Zhang", "Xuanyu Zhu", "Yifan Xu", "Yiyan Ji", "Shujie Li", "Shixuan Liu", "Haotian Wang", "Yuanxing Zhang", "Pengfei Wan", "Chengwei Qin"]
date: "2026-11-18T19:00:00.000Z"
score: 35
guid: "2611.26380"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.26380.png"
generated: "2026-11-20T19:04:50+05:30"
---

Egocentric video captioning requires fine-grained detail and accurate timing, yet current multimodal large language models (MLLMs) often miss brief actions, confuse their order, or misinterpret the wearer's motion. Existing caption formats also offer limited support for combining detailed narration with precise timing. We present EgoCaptioner, which pairs a video-level overview of the setting, participants, and the wearer's overall activity with timed steps whose narration adapts to varying perceptual demands and marks key moments at specific timestamps. We develop a coarse-to-fine annotation pipeline that establishes event structure before expanding step descriptions, yielding 50,000 training examples from eight egocentric video sources. Complementary rewards assess factual accuracy and coverage, measure step-level temporal alignment, and penalize fragmented or redundant narration, guiding caption refinement through Group Relative Policy Optimization (GRPO). To improve the reliability of factual supervision, we supplement caption references with pose-derived motion facts when sensor data are available. Across five egocentric benchmarks, EgoCaptioner achieves leading performance among evaluated open-source models in caption quality, caption-conditioned question answering, and temporal alignment. It also surpasses Gemini 3.1 Pro on PhysCapBench and all evaluated proprietary baselines on Minerva-Ego under the caption-to-QA protocol. Ablations support the complementary roles of factual and temporal rewards and show that coarse-to-fine annotation provides more effective supervision than single-pass annotation.
