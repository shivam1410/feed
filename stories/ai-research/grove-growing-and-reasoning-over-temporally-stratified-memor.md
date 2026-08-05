---
title: "GROVE: Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02392"
authors: ["Sitong Gong", "Caixin Kang", "Tianyu Yan", "Guo Chen", "Bo Zheng", "Kaipeng Zhang", "Yunzhi Zhuge", "Xiang Ruan", "Huchuan Lu", "Yifei Huang"]
date: "2026-08-02T20:00:00.000Z"
score: 70
guid: "2608.02392"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02392.png"
generated: "2026-08-05T20:00:21+05:30"
---

A wearable assistant should both answer questions about its visual history and recognize when that history is useful to the present situation. Existing video-memory systems primarily support question-conditioned recall, whereas proactive assistants typically use separate memory and control mechanisms. We introduce GROVE, a training-free framework that supports both behaviors with one memory grown causally from a continuous video stream. GROVE retains fine-grained perceptual evidence and incrementally consolidates it into time-stamped moments, coherent episodes, and recurring cross-day patterns. Each stratum is paired with a scale-native retrieval skill for locating an observation, replaying an activity, or traversing long-range regularities. Reactive QA and proactive assistance share this memory and access interface, differing in whether retrieval is initiated by a user query or the current situation. Across multiple benchmarks including the challenging MM-lifelong and EgoServe, GROVE achieves the best results among the compared methods. Controlled ablations show that the temporal strata and their access skills are complementary, with patterns providing the largest benefit when evidence spans multiple days. Code will be available at https://github.com/SitongGong/GROVE.
