---
title: "A Neurosymbolic Approach for Constructing Planning Domain Models from Clinical Narratives"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21186"
authors: ["Ranveer Singh, Saurabh Mathur, Michael Skinner, Prasad Tadepalli, Kristian Kersting, Sriraam Natarajan"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.21186v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21186v1 Announce Type: new Abstract: Surgical procedures such as laparoscopic appendectomy are complex, high-stakes processes, yet formalizing their workflows for decision support remains a significant challenge. Inducing probabilistic planning domain models in this setting is particularly difficult due to the lack of structured event data and the prevalence of implicit actions in clinical narratives, which neither empirical symbolic methods nor Large Language Models (LLMs) can adequately address on their own. We introduce NSPIN, a neurosymbolic framework for inducing probabilistic planning domain models from unstructured clinical narratives. Our method extracts and imputes structured event sequences from raw text using a pretrained LLM, then induces a PPDDL model and refines its preconditions with LLM-proposed revisions, guided by empirical validation. We evaluate the approach on 2,660 laparoscopic appendectomy notes written by 9 surgeons. NSPIN yields models that generalize to unseen notes, and expert clinical review indicates its induced knowledge is largely consistent with surgical practice.
