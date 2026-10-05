---
title: "Persona Dosing: Calibrated Activation Steering for Graded Trait Control"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36388"
authors: ["Zehao Jin", "Junran Wang", "Ruixuan Deng", "Jiahao Chen", "Jingyuan Zhang", "Yuxuan Zhang", "Xinjie Shen"]
date: "2026-09-27T20:00:00.000Z"
score: 54
guid: "2609.36388"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36388.png"
generated: "2026-10-05T19:10:08+05:30"
---

An activation-steering coefficient sets intervention strength, but requesting a particular degree of persona expression requires a behavioral scale. We study persona dosing: controlling a language model through a trait description and a requested mean intensity. PersonaDose specializes a shared, description-conditioned FLAS controller on persona responses, then calibrates its flow time against measured trait expression. Training responses are not paired with requested target intensities. Across Llama-3.1-8B, Qwen3-8B, and Gemma-3-4B, PersonaDose raises core-trait expression at the Persona Vectors coherence floor of 75 by 33.2, 18.3, and 17.8 points over contrastive activation addition. Calibration-selected settings retain an expression advantage on held-out questions, although the coherence floor does not hold for every trait there. Across seven trained traits, calibrated requests yield mean targeting errors of 4.7-6.2 points over 14-22 calibration-reachable targets out of 28 per model. These results separate the behavioral range learned by a controller from the accuracy of requests within that range.
