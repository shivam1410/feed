---
title: "seq2cause: One Autoregressive Backbone, Four Causal Discovery Tasks in Event Sequences"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31801"
authors: ["Hugo Math"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.31801v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Complex systems such as vehicles, patients, or genomes emit discrete event sequences whose operative question is causal, not predictive: which events cause which other events, and which cause higher-level outcomes such as failures or diseases? This question decomposes along two axes -- dependency type (event $\to$ event vs.\ event $\to$ outcome) and causal scope (single sequence vs.\ population) -- yielding four structurally distinct regimes with different identifiability conditions. No existing method addresses more than one, because all assume multi-stream structure with low vocabulary, and none scales beyond a few hundred event types. We present \textsc{Seq2Cause}, a unified framework that resolves all four regimes through a single shared primitive: a pretrained autoregressive model repurposed as an amortized conditional independence testing engine requiring no task-specific retraining. We establish a prediction--causality duality: the model's excess cross-entropy simultaneously bounds causal identification error across all four regimes, so that every improvement in next-token prediction tightens causal guarantees for free. On nonlinear SCMs (vocabularies up to $8{,}000$ types) and real-world vehicle diagnostic logs ($29$K event types, $474$ failure outcomes), \textsc{Seq2Cause} is the first method to populate all four regimes at scale with a single frozen backbone. Existing methods are either inapplicable, inaccurate, or computationally intractable in this setting.
