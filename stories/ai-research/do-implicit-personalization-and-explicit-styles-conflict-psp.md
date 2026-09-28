---
title: "Do Implicit Personalization and Explicit Styles Conflict? PsPLUG: A Lightweight Plug-in for Balancing Personalization and Style in Customized LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2601.06362"
authors: ["Yutong Song", "Jiang Wu", "Shaofan Yuan", "Chengze Shen", "Jian Wang", "Yu Wang", "Nikil Dutt", "Amir M. Rahmani"]
date: "2026-09-19T20:00:00.000Z"
score: 44
guid: "2601.06362"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2601.06362.png"
generated: "2026-09-28T20:49:59+05:30"
---

Personalized large language models are often expected to follow explicit style instructions, yet we find that such instructions can undermine the user-specific characteristics that personalization methods aim to preserve. We call this failure mode personalization collapse: explicit style control can conflict with implicit user preferences. To address this challenge, we propose PsPLUG, a lightweight plug-in that learns a user-specific residual after accounting for the requested style. PsPLUG also allows us to tune personalization strength at inference time. Our experiments show that explicit style instructions can diminish personalization in existing methods, whereas PsPLUG better preserves user preferences while providing precise control over the balance between personalization and style adherence.
