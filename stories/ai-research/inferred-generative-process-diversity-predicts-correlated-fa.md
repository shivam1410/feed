---
title: "Inferred Generative-Process Diversity Predicts Correlated Failure Across Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03422"
authors: ["Ross Tieman, Evan Markou"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.03422v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03422v1 Announce Type: new Abstract: Diversity is a widely observed factor in the resilient function of collective systems, yet the type of diversity that matters depends on the properties and failure modes of the system. This distinction is important for systems composed of multiple language models. Different models may be treated as independent components even when their behaviour and failures remain strongly correlated. Assessments of language-model populations using semantic similarity demonstrate limited semantic diversity, but this captures only differences in the meaning of observed outputs. We argue that a more fundamental notion of model diversity is generative-process diversity, the differences between processes capable of generating the observed outputs. Drawing from Algorithmic Information Theory, we use Normalised Compression Distance between raw model outputs, residualised against a permutation control, as a measure of inferred generative-process diversity. Across 38 language models, this measure identifies population structure missed by semantic similarity and predicts cross-task variation in chance-corrected correlated failure among model pairs across ten disjoint benchmark families, beyond semantic similarity and model-pair capability. The cross-benchmark partial rank association is $-0.216$ with a 95% interval of $[-0.309,-0.122]$, and the estimate is negative on all ten benchmarks. These results indicate that increased generative-process diversity is associated with reduced correlated failure in model pairs that is not attributable to semantic similarity or capability. Inferred generative-process diversity offers a novel and practical approach for investigating diversity of multi-model systems in safety-relevant contexts.
