---
title: "Two-Stage Fine-Tuning for Protein Sequence Generation with Targeted Amino-Acid Composition"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27939"
authors: ["Violeta Basten-Romero, Rub\\'en Mu\\~noz-Tafalla, Anna Mar\\'ia D\\'iaz-Rovira, Bertran Miquel-Oliver, Isaac Filella-Merce, V\\'ictor Guallar"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27939v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27939v1 Announce Type: new Abstract: Protein language models are standard priors for biological sequence generation, but steering them toward explicit distributional design targets remains largely unexplored. We study a constrained protein generation problem in which sequences must match a desired amino-acid (AA) composition profile while preserving plausible sequence statistics and diversity. The motivating application is synthetic feed protein design, where the AA composition of dietary proteins directly determines their nutritional value. We propose a two-stage pipeline in which domain-adaptive fine-tuning (FT) on an in-domain protein dataset is followed by iterative reward-weighted FT via reinforcement learning (RL) anchored against the FT model as a frozen reference. We evaluate the pipeline on two AA compositions and find that FT brings the average composition close to the target, while the subsequent RL enforces specific sequence constraints that FT alone cannot satisfy. We additionally evaluate the design choices of the proposed composition reward term against two baselines and an ablated variant, isolate the contribution of each training stage, and verify that AA composition alignment is achieved without degrading sequence quality.
