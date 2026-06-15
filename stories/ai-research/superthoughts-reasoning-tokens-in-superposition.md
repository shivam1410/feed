---
title: "SuperThoughts: Reasoning Tokens in Superposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13862"
authors: ["Zheyang Xiong, Shivam Garg, Max Yu, Vaishnavi Shrivastava, Haoyu Zhao, Anastasios Kyrillidis, Dimitris Papailiopoulos"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2606.13862v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13862v1 Announce Type: new Abstract: Long Chain-of-Thought (CoT) reasoning improves LLM problem-solving but is computationally expensive due to sequential token generation. While recent works explore reasoning in continuous latent spaces to bypass discrete token generation, they often struggle with training stability and fail to scale to complex, long-horizon tasks due to lack of supervision signal. We propose SuperThoughts, which compresses pairs of consecutive CoT tokens into single latent representations and decodes two tokens per step via a lightweight Multi-Token Prediction (MTP) module. This preserves discrete token supervision at training time while doubling throughput at inference time. We finetune Qwen2.5-Math-1.5B-Instruct, Qwen2.5-Math-7B-Instruct, Qwen2.5-Math-14B-Instruct, and evaluate on MATH500, AMC, OlympiadBench, and GPQA-Diamond. With a confidence-based adaptive mechanism that falls back to standard decoding when uncertain, SuperThoughts achieves $\sim$20--30\% CoT length reduction while maintaining accuracy with minimal degradation (1-2 points accuracy drop on most tasks).
