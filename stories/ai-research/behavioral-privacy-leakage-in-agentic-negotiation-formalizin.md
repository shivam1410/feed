---
title: "Behavioral Privacy Leakage in Agentic Negotiation: Formalizing and Mitigating Inference Attacks via Randomized Policies"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.06815"
authors: ["Barkha Rani"]
date: "2026-07-06T20:00:00.000Z"
score: 68
guid: "2607.06815"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.06815.png"
generated: "2026-07-21T19:05:01+05:30"
---

Autonomous negotiation agents are increasingly deployed in high-stakes settings such as insurance and procurement. While cryptographic techniques protect explicitly disclosed constraint values, they fail to address a subtler threat: behavioral privacy leakage, where an adversary infers private constraints from observable negotiation dynamics such as concession trajectories, timing, and convergence patterns. This paper investigates behavioral differential privacy in multi-round negotiation protocols. We design an adaptive stochastic negotiation policy that jointly guarantees (varepsilon, δ)-differential privacy, almost-sure convergence of the offer sequence (reaching agreement when the counterparty's reservation value permits), and high negotiation utility. Evaluated on 3,000 synthetic bilateral negotiations, our mechanism reduces adversarial inference accuracy by 43-50% while maintaining a negotiation success rate and utility above 90%, demonstrating that strong privacy guarantees can be achieved without significant loss of performance.
