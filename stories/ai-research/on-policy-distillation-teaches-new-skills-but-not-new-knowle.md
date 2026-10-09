---
title: "On-Policy Distillation Teaches New Skills but Not New Knowledge"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.09639"
authors: ["Yixuan Tang", "Yi Yang"]
date: "2026-10-06T20:00:00.000Z"
score: 58
guid: "2610.09639"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.09639.png"
generated: "2026-10-10T00:52:03+05:30"
---

On-policy distillation (OPD) strengthens language-model reasoning, yet whether students acquire new factual knowledge or compositional skill for multi-step reasoning remains unknown. We separate these capabilities using a controlled synthetic framework that measures the student's initial capabilities and independently controls the teacher's additional facts, compositional skill, or both. Across four models from three families, reverse-KL OPD reliably transfers compositional skill across unseen reasoning structures, but transfers minimal factual knowledge. Decoupling the distillation recipe reveals the source of this asymmetry: replacing reverse KL with forward KL restores factual transfer, whereas student rollouts specifically improve the execution of multi-step reasoning. Experiments on recent factual QA and competition mathematics show a similar asymmetry under reverse-KL OPD, yielding notable reasoning gains without factual memory expansion. Together, these results demonstrate that on-policy distillation does not expand a model's parametric knowledge, but instead teaches it to organize and compose the knowledge it already possesses.
