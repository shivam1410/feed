---
title: "RecGPT-V3 Technical Report"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15591"
authors: ["Bowen Zheng", "Chao Yi", "Dian Chen", "Gaoyang Guo", "Han Zhu", "Jiakai Tang", "Jian Wu", "Mao Zhang", "Wen Chen", "Yifan Lu", "Yujie Luo", "Yuning Jiang", "Zhujin Gao", "Bo Zheng", "Dixuan Wang", "Hao Fang", "Jiancai Liu", "Jing Yu", "Ke Chen", "Kewei Zhu", "Mingke Xu", "Wenjun Yang", "Xunke Xi", "Zile Zhou"]
date: "2026-07-16T20:00:00.000Z"
score: 60
guid: "2607.15591"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15591.png"
generated: "2026-07-20T19:05:49+05:30"
---

Large language models (LLMs) are transforming recommender systems from matching co-occurrence patterns in historical behavior toward reasoning about the intent that drives it. RecGPT-V1 pioneered this paradigm on Taobao by centering user understanding, and RecGPT-V2 scaled it via coordinated multi-agent reasoning; both are deployed in production with consistent gains in user experience and commercial outcomes. However, operating RecGPT at scale reveals three challenges: (1) stateless behavior modeling, where each request reprocesses full user history, wasting computation and discarding prior analysis; (2) a tag-to-item information bottleneck, where natural-language tags form a lossy channel between user understanding and item grounding; and (3) inefficient explicit reasoning, whose lengthy chain-of-thought incurs untenable latency and compute overhead.
  We present RecGPT-V3, a stateful, hybrid-modal recommender that reasons over natural language for open-world knowledge and Semantic IDs (SIDs) for concrete item grounding. A Memory Hub maintains structured, continually evolving user memory that distills long-horizon behavior into condensed units, cutting user-modeling computation by 55.8%. A Hybrid-modal Foundation Model allows the LLM jointly reason over text tags and SIDs, opening a high-bandwidth channel into the item space. Latent Intent Reasoning internalizes verbose rationales into compact learnable latent tokens that remain decodable into readable explanations, lowering output token cost by 200x. Deployed in Taobao's "Guess What You Like" feed, RecGPT-V3 achieves consistent gains in large-scale online A/B tests: IPV +1.28%, CTR +1.00%, TC +1.97%, GMV +3.97%, while cutting end-to-end serving resource consumption by 52.4%.
