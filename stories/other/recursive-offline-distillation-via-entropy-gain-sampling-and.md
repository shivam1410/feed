---
title: "Recursive Offline Distillation via Entropy Gain Sampling and Answer Mixing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20914"
authors: ["Andrey Goncharov, Daniil Vyazhev, Simon Epanov, Alexey Zaytsev"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20914v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Distillation of reasoning chains from Large Language Models (LLMs) into their smaller siblings is a standard training approach. Frequently, researchers do not have full access to a teacher model and its internal representations, which limits the resulting performance. We propose a recursive offline distillation method combining two components: entropy-based sampling for selective distillation and answer mixing. Specifically, for three open models (3-4B), at each epoch, we sample reasoning chains weighted by entropy difference with an auxiliary medium model (70-72B) and, next, supplement thinking traces with single-token ground truth answers. Our approach consistently outperforms naive distillation with comparable data budgets ($57.15 \pm 1.01$ vs 51.61 on average) and offers a much steeper learning curve. Additionally, we present a comparative analysis of methods to generate and normalize distillation traces.
