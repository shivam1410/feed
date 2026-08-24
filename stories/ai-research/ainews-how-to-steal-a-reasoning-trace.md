---
title: "[AINews] How to steal a Reasoning Trace"
category: "AI Research"
source: "Latent Space"
url: "https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace"
authors: []
date: "Wed, 12 Aug 2026 07:11:08 GMT"
score: 75
guid: "https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

A new paper demonstrates that encrypted reasoning traces from frontier reasoning models like OpenAI's o1 can be decoded and ported across different models, sessions, and users, bypassing cryptographic protections intended to prevent proprietary reasoning distillation. More alarmingly, researchers found security vulnerabilities: encrypted reasoning blobs shared in public Claude Code or Codex sessions can leak sensitive data. A preliminary scan of 7,000 public traces revealed 62 unique API keys, 33 email addresses, 33 passwords, and other credentials. Sixty-four instances of sensitive data appeared exclusively within encrypted reasoning blocks, invisible to users reviewing visible sessions. The findings raise both security and alignment concerns around reasoning model architectures and data protection practices.
