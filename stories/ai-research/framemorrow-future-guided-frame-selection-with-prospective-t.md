---
title: "FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.38839"
authors: ["Bo Yin", "Xiaobin Hu", "Jiaqi Zhao", "Shuicheng Yan"]
date: "2026-09-29T20:00:00.000Z"
score: 58
guid: "2609.38839"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.38839.png"
generated: "2026-10-05T19:10:08+05:30"
---

Long-horizon video generation requires models to effectively leverage an increasingly long generation history. As the generated history grows, retaining all previous content becomes increasingly expensive and redundant, making effective historical selection essential. Existing approaches often determine historical relevance based on the current content. However, information relevant to the present is not necessarily useful for future generation, while seemingly less relevant history may become important later. Our key insight is that historical information should be selected according to its relevance to future information needs. Capturing these needs does not require generating the full future; instead, a compact representation of what becomes important next is sufficient to guide historical selection. Building on this insight, we propose FrameMorrow, a prospective frame selector that predicts a small set of prospective tokens representing future information needs and uses them to identify relevant information from history. FrameMorrow selects explicit historical frames rather than model-specific internal states, enabling plug-and-play integration across diverse generators, including closed-source models, with little additional inference cost. We evaluate FrameMorrow across five benchmarks and 11 generative models spanning long-video generation, interactive generation, and action-conditioned world models. Extensive experiments demonstrate consistent improvements in long-range consistency, visual quality, and action alignment across diverse generation settings.
