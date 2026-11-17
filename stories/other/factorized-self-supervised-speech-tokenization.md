---
title: "Factorized Self-Supervised Speech Tokenization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18898"
authors: ["Benjamin Van Niekerk, Jean-Philippe Letendre, Nicol Visser, Hugo Seute, Herman Kamper, Mirco Ravanelli"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18898v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Speech tokenizers convert audio into discrete units, enabling language models to process and generate speech. The goal is to learn compact, text-like representations while preserving enough detail to reconstruct a speaker's voice and delivery. We propose Facto: a factorized tokenizer that disentangles time-varying information (content and prosody) from static components (speaker identity and recording conditions). We build on a recent linear factorization method for self-supervised features, extending it to handle unseen speakers. Then, we cluster the factorized space and train a lightweight decoder to reconstruct audio from the resulting tokens. By removing the static components before clustering, our tokens are more robust to small noise perturbations. We validate this by testing token stability under various noise conditions. Next, we theoretically analyze Facto's convergence and scaling properties, quantifying how the factorization improves with the number of training speakers. Finally, we evaluate Facto on a range of downstream tasks. We show that greater token stability translates into improved text-to-speech performance and competitive results in voice conversion and spoken language modeling. Code and checkpoints at https://github.com/ubisoft/ubisoft-laforge-facto/ and demo page at https://ubisoft-laforge.github.io/speech/facto/.
