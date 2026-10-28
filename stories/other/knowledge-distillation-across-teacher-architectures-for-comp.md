---
title: "Knowledge distillation across teacher architectures for compact diabetic retinopathy grading"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35961"
authors: ["Mossa Manisa, Habiba Jahan Priya, A. K. M. Fakhrul Hossain"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35961v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Diabetic retinopathy grading from retinal fundus photographs is important but difficult to deploy on resource-constrained hardware. We conducted a controlled study of offline response-based knowledge distillation for five-class diabetic retinopathy grading on APTOS 2019, comparing ResNet-50, MobileNetV3-Large, and Swin Transformer-Tiny (Swin-T) teachers distilled into a MobileNetV3-Small student. A 3 x 4 x 2 grid of teacher, temperature, and hard-label weight was screened at one seed, while six configurations and the no-distillation baseline were evaluated across three seeds. The highest observed single-seed quadratic weighted kappa was 0.9093 (macro-F1 0.6851) for Swin-T at temperature 4 and hard-label weight 0.7; the corresponding three-seed mean was 0.9024, compared with 0.8804 for the baseline. The student used 1.52 M parameters and 5.94 MB, representing an 18.07x parameter reduction relative to Swin-T. Temperature and hard-label weight effects were teacher- and configuration-dependent, while small performance differences were sensitive to random seed. Knowledge distillation produced a compact student with competitive performance under the evaluated protocol, but independent external validation remains necessary.
