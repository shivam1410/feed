---
title: "JevGPT: Thinking Fast and Slow in Autonomous Research"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18272"
authors: ["Yasheng Sun", "Yanning Dai", "Yimeng Chen", "Nanbo Li", "Firas Laakom", "Yifan Xu", "Piotr Piękos", "Mateusz Ostaszewski", "Wenyi Wang", "Cheng Luo", "Yuhui Wang", "Jürgen Schmidhuber"]
date: "2026-10-12T20:00:00.000Z"
score: ""
guid: "2610.18272"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18272.png"
generated: "2026-10-14T19:00:21+05:30"
---

Autonomous research agents must acquire and reason over evidence within a limited budget. Yet relevant sources can remain uninspected or unused, leaving a gap between retrieval coverage and the evidence that informs research. The challenge is to align fast local judgments with changing evidence needs and feed their findings back into research decisions. We introduce JevGPT, a dual-system architecture for autonomous research that couples fast evidence processing with deliberative research planning. System Two sets evidence objectives and integrates findings, while System One locates support, assesses relevance, and guides further inspection. Independent source judgments run in parallel; selected original passages inform the next research step. Experiments on fixed-corpus question answering and document ranking show that JevGPT achieves leading task performance, with faster completion and lower cost than comparably effective research agents. Evidence analysis shows broader source inspection and greater coverage of supporting documents in the research loop, highlighting efficient evidence processing as a route to more capable autonomous research.
