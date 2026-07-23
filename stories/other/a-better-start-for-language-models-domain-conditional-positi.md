---
title: "A Better Start for Language Models: Domain-Conditional Position Offsets"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18302"
authors: ["Ye Qiao"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18302v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18302v1 Announce Type: new Abstract: Autoregressive language models are least accurate at the beginning of a sequence, where little context forces reliance on a generic pretraining prior. We show that this cold-start penalty is domain dependent and reduce it with a domain-conditional position offset: a single learned vector added to the embedding activation at the first sequence positions while all model weights remain frozen. The offset trains in minutes on roughly one hundred documents, switches between domains without added sequence state, and has no measurable latency overhead. Across eight Mamba, GPT-NeoX, and Llama models spanning 410M to 8B parameters, it reduces held-out in-domain perplexity by up to 27%; the effect persists at 70B, and one position captures most of the benefit. A matched, converged direct logit-bias correction reaches at most only 7.9% and leaves later-token loss unchanged, showing that the offset propagates through model state rather than merely recalibrating the output prior. A tuned LoRA reaches lower perplexity but uses two to three orders of magnitude more parameters and an active low-rank weight path, while soft prompts add sequence positions. With wrong-domain controls, offsets improve retrieval reranking and domain classification when decisions depend on early in-domain tokens, For the few-shot reasoning whose signal occurs later, the results maintains unchanged. Position-aware prefill application also help generation tasks, whereas naive application at every cached decoding step causes repetition. The offset is therefore not the strongest adapter, but a lightweight, hot switchable tool for short in-domain scoring and calibration.
