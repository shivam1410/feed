---
title: "Specification Oracles"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13415"
authors: ["Atticus Cull, Justin McCarthy"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13415v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13415v1 Announce Type: new Abstract: Specifications face a basic tradeoff: leave details out, and important questions go unanswered; record every detail separately, and the specification becomes large and prolix. We investigate whether a language model can serve as a compact, living specification oracle by learning facts about a target and answering questions about it directly. We compare two ways of storing the learned facts: external text notes and changes to the model's weights. Across four families of 596-fact worlds and two Qwen2.5 model sizes, weight-only oracles benefited substantially more from structure: with the 7B model, their accuracy integrated across storage capacities was 18.5 percentage points higher on structured than unstructured worlds, compared with 1.1 points for note-sheet oracles. This advantage came at a substantial storage cost, with the smallest adapter requiring approximately 175 KiB compared with a maximum note budget of 16 KiB. Adapted weights therefore exploited latent structure more successfully, while external notes required substantially less object-specific storage.
