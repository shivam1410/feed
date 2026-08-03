---
title: "Safeguards Based on Copyable Context Cannot Provide Reliable Safety for LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27951"
authors: ["Pingyu Wu", "Lingyao Zhu", "Weiming Zhang", "Nenghai Yu"]
date: "2026-07-29T20:00:00.000Z"
score: 70
guid: "2607.27951"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27951.png"
generated: "2026-08-03T19:06:42+05:30"
---

Large language model safeguards decide whether to answer before seeing how an answer will be used. This creates a basic problem for dual-use tasks: the same answer can help an authorized professional or an attacker, while an attacker can imitate a benign request and interaction history. We separate the capability released by the model from the evidence available about downstream use. When that evidence is copyable, we derive the exact worst-case floor on attacker assistance while preserving useful answers. The result yields a safety trilemma: Useful Capability, Reliable Safety, and Open Access cannot coexist. We then show how a trusted credential can complement existing safeguards by adding hard-to-copy information that predicts actual downstream use, and identify the stronger condition needed to eliminate the floor. Evidence from dual-use evaluations, adaptive attacks, and deployed trusted-access programs supports the practical relevance of these conditions.
