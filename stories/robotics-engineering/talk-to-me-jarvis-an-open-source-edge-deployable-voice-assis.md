---
title: "Talk to Me, Jarvis: An Open-Source Edge-Deployable Voice Assistant Framework for Autonomous Racecars"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21109"
authors: ["Daniel Henel, Frederik Werner, Alexander Langmann, Johannes Betz"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2609.21109v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21109v1 Announce Type: new Abstract: Recent advances in large language models have improved their effectiveness as back-end components for voice assistants, particularly in intent understanding and context-aware input classification. However, online-hosted models introduce network dependency and variable inference latency, limiting their suitability for time-critical autonomous driving applications. In this work, we address these issues by developing Jarvis, an offline voice assistant for high-level behavioral commands of autonomous vehicles. Its architecture integrates speech recognition and synthesis with natural language command classification into a lightweight, local framework. Jarvis core component is a text-to-command classifier, built using a domain-specific fine-tuning of the Mistral 7B model, demonstrating low-latency inference. Our experimental evaluation demonstrates that our solution outperforms larger online-hosted models, achieving 97.63 % intent recognition accuracy with an average processing latency of 1.39 s, making it well-suited for operations requiring quick response times. To support further research and fine-tuning, we provide an open-source implementation.
