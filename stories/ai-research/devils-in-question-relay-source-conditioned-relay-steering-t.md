---
title: "Devils in Question Relay: Source-Conditioned Relay Steering to Mitigate Hallucinations in Audio-visual Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37568"
authors: ["Yu Zhang", "Pingrui Zhang", "Xuefeng Bai", "Pengfei Zhang", "Yang Xiang", "Kehai Chen"]
date: "2026-09-28T20:00:00.000Z"
score: 70
guid: "2609.37568"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37568.png"
generated: "2026-10-02T21:40:09+05:30"
---

Audio-visual large language models (AVLLMs) have made remarkable progress in multimodal understanding and reasoning through interactions among visual, auditory, and linguistic information. However, recent studies show that AVLLMs face a critical challenge: source-confused grounding hallucination, where cues from the unused modality induce responses that the required modality does not support, undermining reliability in real-world applications. Existing methods have made progress in mitigating this failure, yet how it arises from internal cross-modal interactions remains insufficiently understood. To address this gap, we conduct path-intervention and representation analyses, revealing a question-relay mechanism: question states carry interfering cues alongside required-source evidence, undermining grounding in required-modality evidence. Cutting pathways from interfering modality to question states yields greater correct-answer logit recovery than cutting those to the generation position. Motivated by these findings, we propose SECRET (SourcE-Conditioned RElay sTeering), a training-free method that mitigates cross-modal interference at the question relay. Using contrasting question representations elicited through different modality-pathway interventions, SECRET steers the original question states toward required-source evidence. Experiments on two widely adopted benchmarks CMM and AVHBench across three AVLLMs show that SECRET consistently outperforms prior training-free methods, substantially mitigating source-confused grounding hallucinations (e.g., up to +18.0 and +7.1 percentage points over base models). Modality-specific captioning further demonstrates its generalizability to open-ended generation.
