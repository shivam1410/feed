---
title: "Antidistillation is Cheap: Lightweight Distillation-Resistance via Stylistic Corruption"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17772"
authors: ["Anh Tu Ngo, Anupam Chattopadhyay"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17772v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Knowledge distillation (KD) is a highly effective paradigm for transferring capabilities from large language models (LLMs) to smaller, more specialized student models. In commercial deployment where frontier models are restricted behind black-box APIs, sequence-level distillation remains a potent vector for competitors to clone proprietary capabilities at a fraction of the development cost. Existing defenses mostly rely on surrogate models to manipulate next-token sampling, which increases computational overhead and real-time inference latency. In this work, we propose a lightweight defense that dynamically injects style-steering vectors into the teacher model's activations upon malicious queries. This framework offers exceptional flexibility, allowing hosts to customize target defensive styles and dynamically blend them to maximize stylistic variance. Crucially, this inference-time intervention preserves semantic utility and fluency during malicious queries, misleading adversaries into believing that they are extracting pristine teacher outputs, while standard consumers continue to receive original, unmodified responses. Our experiments demonstrate that this framework successfully disrupts student learning, achieving substantial anti-distillation performance while incurring negligible overhead and preserving text naturalness. Our code is available at https://anonymous.4open.science/r/distill-resist-38C6/.
