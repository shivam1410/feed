---
title: "Random Attention: Rethinking KV Cache Eviction for Efficient Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.03430"
authors: ["Heng Wang", "Jielin Qiu", "Wenting Zhao", "Cheng Qian", "Liangwei Yang", "Jiawei Han", "Heng Ji", "Silvio Savarese", "Shelby Heinecke", "Huan Wang"]
date: "2026-09-02T20:00:00.000Z"
score: 80
guid: "2609.03430"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.03430.png"
generated: "2026-09-04T23:32:20+05:30"
---

This research challenges the prevailing assumption that selective key-value (KV) cache compression during long-context reasoning requires sophisticated token importance scoring mechanisms. The study finds that randomly evicting reasoning tokens—without any scoring—performs comparably to selective compression approaches. The insight is that reasoning traces inherently contain redundancy and self-protect through repetition, making random forgetting viable. Preserving the original prompt ensures critical task context remains intact. This counterintuitive finding substantially simplifies long-context reasoning systems by eliminating computational overhead of attention scoring while maintaining output quality. The result enables more efficient extended inference runs with reduced memory and computational requirements.
