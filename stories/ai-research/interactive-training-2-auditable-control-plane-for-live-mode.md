---
title: "Interactive Training 2: Auditable Control Plane for Live Model Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18314"
authors: ["Wentao Zhang", "Xuanhe Pan", "Han Zhou", "Yang Lu", "Yuntian Deng"]
date: "2026-07-16T20:00:00.000Z"
score: 60
guid: "2607.18314"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18314.png"
generated: "2026-07-28T19:07:22+05:30"
---

Experiment trackers show how training is progressing, but changing a live run still usually requires trainer-specific code. We present Interactive Training 2, an open-source control plane for steering training through a shared protocol. Training applications declare which settings and actions they expose, humans and automated controllers submit requests through the same interface, and the training loop validates and applies them at safe control points. A customized Aim workspace combines live metrics and controls with a chronological record of requests and outcomes. We demonstrate the system across five NLP and reinforcement-learning workflows. The released code and traces provide a reusable foundation for auditable human- and agent-guided training.
