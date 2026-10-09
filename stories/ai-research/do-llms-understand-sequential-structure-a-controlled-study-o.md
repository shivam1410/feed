---
title: "Do LLMs Understand Sequential Structure? A Controlled Study of Inference and Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04977"
authors: ["Jerry Wang", "Zhengxiang Wang", "Ting Yu Liu", "Hsin-Ling Hsu", "Yi-Cheng Lai", "Tengfei Ma"]
date: "2026-10-03T20:00:00.000Z"
score: 62
guid: "2610.04977"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04977.png"
generated: "2026-10-10T00:52:03+05:30"
---

Large language models (LLMs) are increasingly used as interactive agents and simulators, yet it remains unclear whether they can recover latent sequential structure beyond surface action frequencies. This distinction is critical for behavioral simulation, where actions are often shaped by prior context rather than marginal frequencies alone. We study this question using controlled two-player Rock--Paper--Scissors interactions and a one-player stochastic n-gram continuation task. Across these experiments, we test whether LLMs can identify latent strategies, follow simple Markov rules, and sustain higher-order conditional dependencies. Our framework separates distribution matching from conditional rule following. Results show that longer context does not improve identification, correct recognition does not ensure faithful simulation, and higher-order dependencies substantially degrade rule recovery. Apparent behavioral fidelity can therefore mask incorrect generative mechanisms.
