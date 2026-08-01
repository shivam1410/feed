---
title: "RefCaptioner: Multi-Reference Image-Grounded Video Captioning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28509"
authors: ["Tengfei Liu", "Yang Shi", "Yuran Wang", "Xiaohan Zhang", "Yuqing Wen", "Yuqi Tang", "Qixun Wang", "Zhuoran Zhang", "Xuanyu Zhu", "Weihong Lin", "Xinlei Yu", "Yujie Wei", "Xinwei Long", "Fengxiang Wang", "Xinlong Chen", "Yue Ding", "Jialu Chen", "Haotian Wang", "Yuanxing Zhang"]
date: "2026-07-29T20:00:00.000Z"
score: 65
guid: "2607.28509"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28509.png"
generated: "2026-08-01T19:05:30+05:30"
---

Existing video captioning models generate natural descriptions of video content but cannot explicitly ground local visual elements to multiple reference images. We introduce multi-reference image-grounded video captioning, a new task requiring factual video descriptions with phrase-level reference grounding, and propose RefCaptioner, a two-stage post-training framework for this task. RefCaptioner combines mixed-data SFT with Hierarchical Coverage-Discounted GRPO to jointly improve reference selection, phrase-level binding, distractor rejection, and cross-reference consistency while preserving general video-captioning ability. To support training, we construct a corpus containing 20,000 videos and 171,354 reference images. We further introduce MRVBench, a benchmark for evaluating caption factuality and multi-reference grounding on both real-world and AI-generated videos. Experiments show that RefCaptioner achieves the best overall performance among the open-source models while remaining competitive on standard video captioning benchmarks. Human evaluation further confirms that its captions are preferred by annotators and enable more source-faithful video reconstruction with both open-source and proprietary video generators.
