---
title: "Removing the NEEDLE in the Haystack: Backdoor Removal in LLMs via Weight Orthogonalisation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.00348"
authors: ["Minoo Kim", "Vasileios Lampos", "George Drayson"]
date: "2026-09-28T20:00:00.000Z"
score: 58
guid: "2610.00348"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.00348.png"
generated: "2026-10-04T19:07:43+05:30"
---

Backdoor attacks can be implanted in Large Language Models (LLMs) during training, causing unwanted behaviour when a trigger appears in the input. Existing backdoor defences for LLMs attempt to remove the backdoor but inadvertently shift the model's output distribution to benign prompts, which can result in degraded model performance and safety. We propose NEEDLE, a training-free method for targeted backdoor removal. Once a trigger has been identified, our method estimates a backdoor direction and a refusal subspace through activation vectors, then applies sequential weight orthogonalisation to suppress the backdoor while preventing changes in refusal-related representations. NEEDLE requires neither a clean reference model nor the original poisoned training data. Evaluation is conducted across multiple model families and attack types. NEEDLE achieves the lowest mean Attack Success Rate (ASR) among the evaluated defences, including 0% on challenging code injection attacks, while resulting in the lowest KL divergence and minimal changes in capability and safety.
