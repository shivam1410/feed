---
title: "The Handoff Tax: Continuing Non-Native Trajectories in LLM Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.24358"
authors: ["Roy Ganz", "Mor Shpigel Nacson", "Adi Kalyanpur", "Ron Litman"]
date: "2026-08-24T20:00:00.000Z"
score: 70
guid: "2608.24358"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.24358.png"
generated: "2026-08-31T03:16:07+05:30"
---

Coding agents perform long-running tasks spanning dozens of model calls, tool uses, and code edits. As these runs unfold, users face a practical cost-quality trade-off: escalating to a stronger model when a cheaper one struggles, or downshifting once the hard reasoning is complete. Each switch requires the receiver to continue a non-native trajectory produced by another model. We study how this handoff affects quality and cost, and how varying the trajectory information inherited by the receiver changes the outcome. Using pairs of low-cost, low-capability (LC) and high-cost, high-capability (HC) models from the Claude and GPT families, we vary handoff direction, timing, and interface, comparing full-trajectory transfer, compaction, and trajectory removal while preserving the repository state. Across both model families, full-trajectory escalation recovers less than half of the LC-to-HC quality gap while incurring a substantial cost premium. We term this cost-quality penalty the handoff tax. By contrast, downshift offers a favorable cost-quality point. Interestingly, the preferred interface also reverses with direction: reducing LC-model trajectory information improves escalation quality, whereas removing the HC-model trajectory reduces downshift quality.
