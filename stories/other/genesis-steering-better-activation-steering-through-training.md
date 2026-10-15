---
title: "Genesis Steering: Better Activation Steering Through Training Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19114"
authors: ["Tora Bodin, Eric Aubinais, Ilaria Torre, Chih-Hong Cheng"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19114v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Activation steering controls large language models at inference time, but its effectiveness depends on the choice of reference data. We introduce genesis steering, which derives a genesis vector from contrastive examples in the model's own fine-tuning data. When these data are unavailable, we draw on the membership inference literature to identify likely training examples and construct a proxy dataset. We establish two theoretical results on optimal displacement to the decision boundary and reduced proxy-estimation bias. We evaluate genesis steering and membership-based proxy construction on T\"ulu-3-8B, whose fine-tuning data are publicly available, and Llama-3.1-8B-Instruct as a control. We find that safety data from T\"ulu-3-8B's training mixture yield stronger steering than external datasets on both models. On T\"ulu-3-8B, membership scores largely agree in identifying training examples, and vectors built from top-ranked examples achieve competitive performance against random subsets of the same size. In contrast, the results on Llama-3.1-8B-Instruct hint that a MIA method will only have a positive effect if the mean direction shift with MIA-filtered in-distribution data is much less severe than the direction shift with OoD data.
