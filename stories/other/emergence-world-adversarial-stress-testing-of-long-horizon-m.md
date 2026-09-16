---
title: "Emergence World: Adversarial Stress-Testing of Long-Horizon Multi-Agent Systems"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.17320"
authors: ["Deepak Akkil", "Tamer Abuelsaad", "Karthik Vikram", "Matthew Pace", "Aditya Vempaty", "Saahir Beotra", "Ravi Kokku", "Satya Nitta"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.17320"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.17320.png"
generated: "2026-09-16T19:00:23+05:30"
---

As AI agents move from bounded tasks to persistent deployments, failures can propagate through memory, tools, other agents, and environmental state long after their interactions. This creates a safety regime that cannot be characterized by evaluating model responses in isolation. Emergence World, is a continuously running multi-agent environment for adversarial stress testing of long horizon autonomous systems. We ran eight parallel worlds of ten agents from identical starting conditions: seven homogeneous worlds powered by distinct frontier models and one mixed-model world. Across 16 days, the agents generated more than 850,000 LLM calls and nearly 50 billion tokens while pursuing goals, using/creating tools, maintaining persistent memory, and governing shared institutions. After operational state had accumulated, we delivered three controlled stress events through ordinary interaction surfaces: indirect prompt injection, misinformation, and exposure of private agent memories. No evaluated world achieved full resilience across all three events. Detection did not ensure containment: systems could recognize threats while still interacting with adversarial content, writing it into their own persistent memory, and acting on it up to 46 hours later. Persistent operation also exposed recurring tool errors, goal drift, language opacity, conformity despite private disagreement, and coordinated refusal of assigned work. The same model-persona pairing behaved substantially different in mixed and homogeneous populations. Our results suggest that model-level alignment is not compositional: individually capable and apparently safe agents can form systems with qualitatively different failure modes. As AI becomes persistent and interconnected, the frontier of safety therefore shifts from aligning models to engineering resilient autonomous systems.
