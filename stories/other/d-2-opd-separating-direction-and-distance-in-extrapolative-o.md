---
title: "$D^2$-OPD: Separating Direction and Distance in Extrapolative On-Policy Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07241"
authors: ["Bowen Fang (Columbia University), Dingmin Wang (AWS AI Lab), Hengzhi Pei (Amazon AGI)"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07241v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

On-policy distillation (OPD) trains a student model to match a teacher's next-token distributions on student-generated prefixes. Extrapolative OPD further extends the teacher's log-probability shift relative to a reference policy to construct stronger learning targets. However, existing methods couple extrapolation direction and distance, allowing the magnitude of the teacher's shift to dictate how far the target moves. We propose $D^2$-OPD, decoupling these two factors: a per-prefix hard KL constraint bounds the target's distance from the teacher, while an adaptive combination of the teacher's post-training shift and the initial student--teacher gap determines the extrapolation direction. We optimize the student toward this target using forward KL, providing learning signals even for low-probability tokens. We evaluate three settings: where standard OPD performs well, where it struggles with base-model initialization, and where no teacher reference is available. On mathematical reasoning benchmarks, $D^2$-OPD attains the highest score in all three settings, outperforming the strongest baseline by up to 9.45 points. Ablations validate the contributions of each component.
