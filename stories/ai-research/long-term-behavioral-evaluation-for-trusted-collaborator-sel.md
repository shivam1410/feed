---
title: "Long-Term Behavioral Evaluation for Trusted Collaborator Selection via Bidirectional Mamba"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25232"
authors: ["Botao Zhu, Xianbin Wang"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.25232v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25232v1 Announce Type: new Abstract: Effective selection of trustworthy collaborators is crucial to ensuring the successful completion of collaborative tasks, which requires accurate assessments of both long-term device behavior and short-term collaborative dynamics. Consistent device behavior patterns, which are learned from historical collaborations, can be used to predict their reliability in future collaborations. However, accurately assessing device behavior based on historical collaborations remains challenging. First, behavior assessment from limited historical collaborations captures only instantaneous past behavior, failing to represent the devices' true behavior. Second, due to the temporal dependencies of device behavior, a unidirectional evaluation that relies only on earlier collaborations loses the opportunity to learn from subsequent collaborations. Addressing these challenges requires evaluating device behavior based on long-term collaborations while considering both forward and backward temporal dependencies. To this end, this work proposes a bidirectional Mamba-enabled model (BM) for long-term behavioral evaluation. For each short time slot, a graph is constructed among devices based on historical collaborations, and device behavioral features within the slot are then aggregated accordingly. Subsequently, a bidirectional Mamba model integrates these short-term representations across all time intervals, producing a stable and reliable long-term behavior evaluation for each device. Experimental results demonstrate that BM achieves higher evaluation accuracy than baseline methods, thereby enabling the selection of collaborators that maximize the value of task completion.
