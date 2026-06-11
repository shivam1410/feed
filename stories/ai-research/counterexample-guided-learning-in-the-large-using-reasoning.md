---
title: "Counterexample Guided Learning in the Large using Reasoning Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11521"
authors: ["Hongyi Liu, Frederic Sala, Thomas Reps, Adithya Murali"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.11521v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11521v1 Announce Type: new Abstract: LLMs and LLM agents should improve when given feedback, but identifying when they are able to do so is difficult: feedback is heterogeneous, domain-specific, and difficult to control. We approach this challenge by asking LLMs to perform regular-expression induction, a classical symbolic learning problem where precise mechanisms for feedback exist in the form of counterexamples. In counterexample-guided learning, a learner (LLM) proposes candidate regular expressions from positive/negative-labeled strings, and the teacher (verifier) returns counterexamples showcasing the difference between the candidate and target languages. We identify novel counterexample-guided refinement strategies that enable effective regex learning, such as regularization and symbolic counterexample clusters. We also explore agentic strategies such as reflection and repair loops. Empirically, we find that verifier feedback substantially improves sample efficiency on challenging regex-induction tasks, reducing the number of labeled examples required and enabling learning of complex target expressions where standard prompting fails. For example, on the hardest task groups, our counterexample-guided framework improves success from 3.2% to 38.1% and from 38.9% to 74.1% on two different regex domains. These results suggest that LLMs can benefit from rich feedback beyond treating it as additional data, opening the door for robust verifier-guided methods for LLM-based program synthesis and formal reasoning.
