---
title: "Continual Learning for Sequential Personalization of Small Language Models: A Stability Monitoring Analysis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27634"
authors: ["Thomas S. Paula, Lucas S. Kupssinsk\\\"u, Rodrigo C. Barros"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27634v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27634v1 Announce Type: new Abstract: Small Language Models (SLMs) are increasingly being considered for deployment on edge devices such as laptops, enabling private, low-latency, and locally personalized applications. However, personalization requires models to adapt over time to evolving user- or task-specific data, placing them in a continual learning setting. This creates the risk of catastrophic forgetting, where learning new information degrades performance on previously learned tasks or broader model capabilities. Recent benchmarks such as TRACE have shown that continual fine-tuning can significantly degrade the general abilities of aligned large language models. In this work, we present a study for sequential LoRA personalization of SLMs. We save model checkpoints after each adaptation stage and evaluate them on current tasks, previously seen tasks, and a fixed reference set. This checkpoint-level protocol enables us to monitor task performance, forgetting, and reference set drift over time. We show that lightweight reference set distributional diagnostics can reveal model-specific instability patterns during sequential LoRA personalization of SLMs, including cases where task-level metrics alone hide harmful adaptation. We hope this can highlight new research avenues for monitoring stability of SLMs in a continual learning setting.
