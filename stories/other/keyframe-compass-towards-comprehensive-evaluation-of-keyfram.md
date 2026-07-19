---
title: "KeyFrame-Compass: Towards Comprehensive Evaluation of Keyframe-Conditioned Video Generation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14202"
authors: ["Yuqi Tang", "Tengfei Liu", "Yizheng Lai", "Yuran Wang", "Yang Shi", "Wanshun Su", "Zhuoran Zhang", "Qixun Wang", "Xiaohan Zhang", "Xinlei Yu", "Xuehai Bai", "Xuanyu Zhu", "Bohan Zeng", "Bozhou Li", "Shujie Li", "Yifan Dai", "Yujie Wei", "Shixuan Liu", "Haotian Wang", "Jialu Chen", "Yuanxing Zhang"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.14202"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14202.png"
generated: "2026-07-19T19:52:10+05:30"
---

Video generation increasingly relies on keyframe-based workflows, where creators specify a sequence of reference images to guide generation. Although recent models support multi-keyframe conditioning, it remains unclear whether they can faithfully reproduce the prescribed keyframes while maintaining overall video quality. We present KeyFrame-Compass, the first comprehensive benchmark for evaluating keyframe-conditioned video generation. The benchmark contains 386 carefully curated samples spanning three application domains, two video structures, two prompt granularities, two conditioning formats, and four keyframe densities, enabling controlled analysis under diverse generation settings. We further introduce an automated evaluation framework that jointly measures keyframe execution and overall video quality. Specifically, we decompose keyframe execution into six complementary metrics covering presence, fidelity, temporal ordering, localization, persistence, and uniqueness, while assessing overall video quality through evidence-grounded MLLM judgments augmented with specialized perception models. Experiments on nine representative video generation systems reveal several fundamental limitations. Current models exhibit a clear trade-off between faithful keyframe execution and natural video synthesis. Their performance further degrades as keyframe constraints become denser and most open-source models also fail to interpret storyboard-grid inputs as temporally ordered keyframe sequences.
