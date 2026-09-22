---
title: "Calibrating Teacher--Student Discrepancy for On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.21619"
authors: ["Qiangqiang He", "Jin Li", "MingCai Chen"]
date: "2026-09-17T20:00:00.000Z"
score: 60
guid: "2609.21619"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.21619.png"
generated: "2026-09-22T19:08:22+05:30"
---

On-policy distillation (OPD) improves reasoning models by learning the token-level discrepancy between a stronger teacher and an on-policy student. However, this discrepancy does not purely reflect the capability gap between the teacher and the student: it also contains deviations arising from the teacher itself, which are consequently mixed into the observed teacher--student discrepancy and indiscriminately learned by standard OPD during training. This issue is further exacerbated by privileged OPD, where privileged information induces larger teacher-side likelihood shifts, thereby encouraging the student to learn more of the teacher's own deviation. We introduce Calibrated On-Policy Distillation (Cal-OPD), which estimates the teacher's self-deviation region through positive and negative privileged interventions and calibrates the original teacher--student discrepancy by retaining only the component that lies beyond this region. Experiments on mathematical reasoning benchmarks show that, while retaining only about 52--65\% of the original teacher--student discrepancy as the optimization signal, Cal-OPD consistently outperforms standard OPD and its variants across model scales.
