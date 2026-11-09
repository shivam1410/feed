---
title: "Not All Misalignment Is Alike: A Decomposed Benchmark for Emergent Misalignment"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08569"
authors: ["Afonso Domingues, Mubashara Akhtar, Bhada Yun, Xin Chen, Lukas Fluri, Anna Hedstr\\\"om"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08569v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Emergent misalignment (EM), in which fine-tuning on a narrow task induces misaligned behaviour on unrelated prompts, has been demonstrated across a wide range of datasets, model families, and training setups. Yet, most studies continue to rely on the evaluation approach introduced in the original EM paper, producing rates that are sensitive to the small set of evaluation questions used, the choice of judge, and the thresholds applied. These evaluations can also conflate misalignment with capability loss and offer little insight into the specific ways misalignment manifests. Differences in datasets, models, and fine-tuning configurations further make findings difficult to compare across studies. We introduce EMERGE, a decomposed benchmark that tracks changes in eight distinct misaligned behaviours from base to fine-tuned models. It evaluates these behaviours on out-of-domain prompts against matched benign controls and tracks capability, coherence, and refusal to account for potential confounders. Applying EMERGE to 8 open-weight models and 13 fine-tuning datasets, we find that models with similar broad misalignment rates can exhibit very different behavioural profiles that a single score cannot capture. We hope EMERGE can help establish a shared and robust standard for measuring EM, making findings more comparable and helping move research from detecting the phenomenon towards understanding it.
