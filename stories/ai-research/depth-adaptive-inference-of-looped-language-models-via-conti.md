---
title: "Depth-adaptive Inference of Looped Language Models via Continuous Depth Batching"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.09444"
authors: ["Kristian Schwethelm", "Daniel Rueckert", "Georgios Kaissis"]
date: "2026-09-24T20:00:00.000Z"
score: 48
guid: "2608.09444"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.09444.png"
generated: "2026-09-28T20:49:59+05:30"
---

A main promise of looped language models is depth-adaptive inference. By looping a block of shared layers a variable number of times, the model can use less compute for "easy" tokens and more for "hard" ones. However, tokens with different numbers of loops cannot share a uniform forward pass and therefore cannot be handled by standard batching systems such as vLLM. The practical value of depth-adaptive inference thus hinges on whether batching can be made efficient. We introduce the first efficient method for depth-adaptive looped LMs via continuous depth batching (CDB), which forms new batches between loop steps. Our method dynamically schedules looped and non-looped parts of the architecture, manages looped KV-caching, and predicts which tokens will exit the loop in advance so it can prepare batches asynchronously. Experiments on Ouro 1.4B and Huginn 3.5B show that fully looped architectures are best suited to depth-adaptive inference, as large non-looped layers outside the recurrent core (e.g., token embedding, LM head, and unshared transformer blocks) slow down and complicate scheduling. Overall, CDB realizes up to 99% of the estimated maximum speedup available, leaving further gains primarily dependent on model architecture and exit behavior.
