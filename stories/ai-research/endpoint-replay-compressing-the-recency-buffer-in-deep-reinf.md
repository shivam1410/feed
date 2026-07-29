---
title: "Endpoint Replay: Compressing the Recency Buffer in Deep Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25123"
authors: ["Parham Mohammad Panahi, Armin Ashrafi, Haoyu Du, Andrew Patterson, Martha White, Adam White"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.25123v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25123v1 Announce Type: new Abstract: Experience replay remains one of the most practical and useful algorithmic tools in the deep reinforcement learning (DRL) toolbox. Aside from the limited success of prioritized replay and specialized approaches for large asynchronous systems, most DRL algorithms make use of a large, uniformly sampled recency buffer---even the size, one million, remains unchanged. Could we store less data, reduce redundancy, or more effectively chain experience together to speed up value propagation and still retain the performance of large buffers? In this paper, we investigate a simple compression approach that stores representative transitions derived from the end-points of a chain of connected $n$-step sequences. By curating these end-points in a smaller recency buffer, our method maintains an effective memory horizon comparable to a standard large buffer while requiring an order of magnitude less storage. Through empirical evaluation, we demonstrate that this approach prevents the systematic bias inherent in naive compression strategies and matches the performance of traditional large buffers in the Pinball environment and the Atari 2600 benchmark.
