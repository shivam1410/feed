---
title: "You Changed Your Mind, The Model Didn't: Demystifying Intent in Multi-Turn Dialogue"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06496"
authors: ["Junle Chen", "Wei Chen", "Zhengjun Huang", "Zhoujin Tian", "Yuxuan Liu", "Kai Wang", "Rui Chen", "Xiaofang Zhou"]
date: "2026-10-04T20:00:00.000Z"
score: 52
guid: "2610.06496"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06496.png"
generated: "2026-10-10T00:52:03+05:30"
---

When a large language model handles a multi-turn task and a user proposes a change but ultimately rejects it, the model should continue as if nothing changed. We find a surprising failure: merely mentioning a rejected change can derail task execution, even when the user's final intent remains unchanged. To systematically study language model behavior under evolving user intent, we introduce Intent-Eval, a controlled benchmark spanning tool actions, code, databases, and mathematics. Across diverse tasks, models are vulnerable to both rejected proposals and superseded requirements, consistent with mentioned-as-in-effect confusion: conversational content is treated as active requirements even after it has been rejected or replaced. Accuracy degradation can deepen or persist as interaction continues, highlighting the need to distinguish what has been mentioned from what remains in effect. Building on this insight, we propose Intent-OPSD, a decision-conditioned on-policy self-distillation framework with Teacher and Student initialized from the same model. The frozen Teacher provides active-intent supervision from the complete task matching the user's decision, training the Student on the full dialogue to follow active requirements reflecting user intent.
