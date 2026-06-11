---
title: "Quantifying Subliminal Behavioral Transfer Ratios in Language Model Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11270"
authors: ["Uwe Konig, Hamza Kazmi, Ruizhe Li, Maheep Chaudhary"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.11270v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11270v1 Announce Type: new Abstract: Distillation of a language model intended to transfer benign behavior to a student model may also transfer undesirable characteristics, if they are present in the teacher model, a phenomenon known as subliminal learning. While qualitative evidence supports the existence of this effect, its magnitude has not been systematically characterized. This study quantifies subliminal behavioral transfer ratios by steering two teacher models (Llama-2-7B-Chat and Qwen2.5-7B-Instruct) at varying steering strengths and distilling student models using only benign data. Evaluation on 100 JailbreakBench prompts with GPT-4.1, serving as the evaluator, indicates that transfer is robust but exhibits distinct scaling behaviors. Llama-2 demonstrates a sharp threshold ($\tau = {0.25,0.32} \ \text{beyond} \ \alpha = -0.15$), whereas Qwen2.5 displays continuous and higher levels of transfer ($\tau$ up to $0.61$).
