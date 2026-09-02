---
title: "EvoGenUI-Bench: Evaluating LLMs as Multi-Turn Generative UI Assistants"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.29387"
authors: ["Yue Peng", "Lanke Xia", "Zihan Wang", "Jiahao Ye", "Ke Ning", "Hongyi Wen"]
date: "2026-08-28T20:00:00.000Z"
score: 55
guid: "2608.29387"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.29387.png"
generated: "2026-09-02T19:06:18+05:30"
---

Large language models can generate interactive web interfaces, but reliable generative UI requires maintaining an executable artifact as user requests evolve. We introduce EvoGenUI-Bench, a benchmark for multi-turn interface maintenance comprising 150 five-turn tasks and 750 turns across three scenarios: information presentation, executable interaction, and tool-grounded external state. We execute generated artifacts in a browser and evaluate them using screenshots, source and DOM evidence, actor traces, and runtime logs. Beyond turn-level and episode-level success, we measure cross-turn retention with Adjacent Pass Retention. Across eight models, even the strongest achieves 74.9% Turn Pass while completing only 37.3% of five-turn episodes; APR further falls to 52.4% on tool-grounded tasks. Diagnostic analysis shows that presentation failures center on information architecture, interaction failures on derived-state propagation and affordance binding, and tool-grounded failures additionally involve external-state grounding and requirement decomposition. These results reframe generative UI evaluation from judging isolated outputs to testing whether interface behavior, derived state, external state, and assistant claims remain synchronized as the artifact evolves.
