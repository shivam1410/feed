---
title: "AgentGFM: A Graph Foundation Model with Node-Agent Information-Flow Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26533"
authors: ["Jingbo Cui, Jitao Zhao, Di Jin, Dongxiao He"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2607.26533v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26533v1 Announce Type: new Abstract: Graph Foundation Models (GFMs) aim to learn transferable knowledge from multi-domain graphs and adapt to unseen scenarios. As a fundamental source of relational semantics in graphs, the transferability of topological patterns has long been central to GFM research. However, local structural patterns may vary across graphs and even among nodes within the same graph. Despite such structural variation, most existing GFMs rely on manually designed propagation schemes and apply them to new graphs largely unchanged. Such fixed schemes may not suit the diverse structural patterns of different nodes. This raises a key question: can each node autonomously determine how information should be propagated through the graph? We refer to this capability as information-flow control. Inspired by recent advances in agent technology, we formulate this problem as agent-based decision making and treat each node as an agent. Accordingly, we propose AgentGFM, in which all node agents follow a shared end-to-end trainable policy rather than using independent models. For adaptive information-flow control, each node interacts with the graph through a predict-act-observe-correct process. During the act stage, the node makes three decisions: source reception, signal-channel selection and gain-aware node-wise halting. The resulting observation is compared with the prediction and their discrepancy is used to correct the node state and guide subsequent interactions. Extensive experiments across node-level, graph-level and large-scale transfer scenarios demonstrate the effectiveness of AgentGFM across diverse graph topologies.
