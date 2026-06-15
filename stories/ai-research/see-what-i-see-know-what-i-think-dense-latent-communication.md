---
title: "See What I See, Know What I Think: Dense Latent Communication Across Heterogeneous Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.13594"
authors: ["Siyi Chen", "Xiaoyan Zhang", "Meng Wu", "Jonathan Tremblay", "Valts Blukis", "Stan Birchfield", "Rene Vidal", "Alvaro Velasquez", "Sijia Liu", "Qing Qu"]
date: "2026-06-10T20:00:00.000Z"
score: 82
guid: "2606.13594"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.13594.png"
generated: "2026-06-15T19:06:44+05:30"
---

Heterogeneous multi-agent systems—teams containing different types of agents with varying architectures—can effectively share knowledge and coordinate through aligned KV-cache communication rather than text-based message passing. This latent-space communication outperforms text-based approaches while reducing computational overhead significantly. KV-caches are internal attention representations used by language models, so aligning these representations between diverse agents enables direct transfer of learned information. This finding is valuable for scaling multi-agent systems that must coordinate across different model architectures and sizes, a practical requirement in many real-world deployments.
