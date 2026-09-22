---
title: "Multiple latent orderings better predict language model preferences"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22170"
authors: ["Aviral Chawla, William H. W. Thompson, Jean-Gabriel Young"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.22170v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22170v1 Announce Type: new Abstract: Language models are frequently employed in settings where they are asked to make value judgments and choices. These observed choices often exhibit intransitivity: A model may prefer item $A$ to $B$ and $B$ to $C$, while also preferring $C$ to $A$. Existing work that models LLM preferences treats such inconsistencies as sampling noise around a single latent ordering. We instead propose that intransitivity reflects the aggregation of multiple latent, internally consistent orderings. We first show that observed inconsistencies cannot be explained by a single ordering under any monotone link function. We then introduce a noise-augmented mixture Bradley-Terry (MBT) model that infers latent preference components from repeated pairwise comparisons. Across seven models and four tasks, a mixture of orderings often explains structural inconsistencies better than single-utility models. We find that aggregate preferences often hide underlying preference heterogeneity. A case study on Moral Machine dilemmas shows that models which disagree on aggregate orderings can still share latent components. Together, these results suggest that LLMs reflect plural preferences. Alignment and evaluation pipelines that treat LLM preferences as a single function, therefore, risk averaging over coherent orderings that different users may endorse differently.
