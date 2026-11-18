---
title: "MillBill: A Machining Agent with Geometric Feedback"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.22565"
authors: ["Gennadii Savrasov", "Artem Slavin", "Soslan Kabisov", "Andrey Kuznetsov", "Anton Konushin", "Dmitrii Zhemchuzhnikov"]
date: "2026-11-16T19:00:00.000Z"
score: ""
guid: "2611.22565"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.22565.png"
generated: "2026-11-18T19:12:26+05:30"
---

Turning a CAD model into a machining program requires both process knowledge and geometric precision. Language models can generate such workflows by writing geometry and toolpath code for each part, but this makes numerical execution part of the model's task. We introduce MillBill, an agent that separates machining decisions from their geometric execution and verification. Given a boundary-representation part, stock, and material, a locally hosted, mid-sized open model proposes operations and cutting parameters for indexed three-axis machining. A geometric harness generates toolpaths, simulates material removal, and returns feedback for plan refinement. Setup planning accounts for what the available cutters can physically reach, rather than visibility alone. We evaluate the resulting programs by the fraction of the target surface area within the specified tolerance after simulated machining. With Qwen3.8-27B, MillBill outperforms frontier-model approaches that construct their own geometry and toolpath workflows on the evaluated machining tasks. Code: https://github.com/kulibinai/millbill
