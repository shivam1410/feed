---
title: "JEV-as-a-Judge: Accept When Confident, Escalate When Unsure"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.26550"
authors: ["Yubo Li", "Yidi Miao", "Ramayya Krishnan", "Rema Padman"]
date: "2026-09-21T20:00:00.000Z"
score: 55
guid: "2609.26550"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.26550.png"
generated: "2026-09-24T19:24:37+05:30"
---

LLM-as-a-judge enables evaluation across diverse tasks, but inference cost and confidence reliability become critical at scale. We study whether a decision-only judge can provide an economical first pass and identify when stronger evaluation is needed. Comparing jev-as-a-judge with sixteen generative and reward-model judges, with blinded human adjudication, we find it within three percentage points of a state-of-the-art LLM judge, our strongest comparator, on ordinary preference and evidence-grounded factuality at 0.36% of the comparator's fee. Larger gaps arise when judgments require checking a derivation or resisting an elaborately written wrong answer. On several benchmarks, JEV's gap to this comparator is concentrated in low-confidence decisions. A frozen cascade that accepts confident verdicts and escalates uncertain ones retains 99% of the comparator's accuracy at lower cost.
