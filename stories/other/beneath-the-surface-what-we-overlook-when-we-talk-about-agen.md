---
title: "Beneath the Surface: What We Overlook When We Talk About Agent Evolution"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.07624"
authors: ["Xiaobo Wang", "Zimu Wang", "Siyu Ye", "Jiaqi Li", "Min Tang", "Jun Bai", "Yuling Shi", "Ruobing Wang", "Jingjing Zhang", "Chaofan Wang", "Kai Wu", "Mengnan Qi", "Kai Cai", "Xiaodong Gu", "Qi Liu", "Zilong Zheng"]
date: "2026-11-04T19:00:00.000Z"
score: ""
guid: "2611.07624"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.07624.png"
generated: "2026-11-09T20:33:26+05:30"
---

Agent harness evolution enables recursive self-improvement (RSI) without updating model weights. We examine whether higher benchmark scores yield reliable, efficient, and transferable improvement. We evaluate four methods across harnesses, general and coding tasks. Repeated evaluations, controlled agent expansion, component interventions, and admission replays reveal recurring patterns. All sixteen evolved agents gain previously uncovered tasks while losing previously covered ones. In one general-task case, reliability rises by 5.2 points despite losing ten previously covered tasks. Most reliability gains also increase deployment cost. Specific changes usually outperform generic reminders, but their benefits can change when combined. The highest-scoring agent does not yield the largest mean improvement in any of our four pools, and stricter admission can discard useful alternatives. Transfer selectively preserves gains: coverage usually falls on the general-task target across both harness types and paradigms, but rises on the coding target with the outer-layer-only harness. These findings motivate preservation-aware evaluation, tested decision rules, and explicit applicability conditions. As a constructive follow-up, EvoAudit turns these diagnostics into revisions of select, analyze, mutate, and gate, achieving the best performance.
