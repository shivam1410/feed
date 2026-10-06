---
title: "ASCENT: Online Test-Time Training of Long-Horizon Agents via Self-Distillation of Verified Experience"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05303"
authors: ["Haodong Lu", "Dong Gong"]
date: "2026-10-03T20:00:00.000Z"
score: 80
guid: "2610.05303"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05303.png"
generated: "2026-10-06T22:55:59+05:30"
---

An agent improves by distilling its own execution history during live deployment. ASCENT trains using a frozen copy as its teacher, with the verified trajectory as the only learning signal for weight updates. The agent processes each task once and learns persistent LoRA weights without external references or stronger teachers needed. By filtering invalid actions, it distills accumulated experience efficiently across ongoing task streams.
