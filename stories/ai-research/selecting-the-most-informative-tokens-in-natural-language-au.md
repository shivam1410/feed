---
title: "Selecting The Most Informative Tokens in Natural Language Autoencoders"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37040"
authors: ["Federico Torrielli", "Gianluca Barmina", "Andrea Blasi Núñez", "Amon Rapp", "Luigi Di Caro", "Peter Schneider-Kamp", "Lukas Galke Poech"]
date: "2026-09-28T20:00:00.000Z"
score: 35
guid: "2609.37040"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37040.png"
generated: "2026-09-30T19:08:55+05:30"
---

Natural language autoencoders translate a language model's internal activations into readable explanations. Explaining every token position is costly. Which positions should an auditor inspect to understand a potential threat? We study this question across 4.7 million explanations on prompt injection and concealment. We compare signals from model computation with a ranker trained only on chat structure. Chat structure usually selects more relevant explanations than the computational signals, without requiring a model forward pass for position selection. On three of four datasets, explaining just 5% of positions retains nearly all of the success rate from explaining every position, where success means obtaining an explanation about the threat. The benefit varies with the audit task. We also show that pretrained verbalizers recover words that models have learned to conceal through fine-tuning, without additional verbalizer training. These results identify where auditors can concentrate explanation generation and show that useful explanations can extend beyond the model a verbalizer was trained to describe.
