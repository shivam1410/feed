---
title: "Computational Identifiability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19361"
authors: ["Lucius E. J. Bynum, Rajesh Ranganath, Kyunghyun Cho"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19361v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19361v1 Announce Type: new Abstract: Identification conditions describe the computability of a target query or parameter of interest as a function of the type and amount of information available. In causal identification, this information is often expressed in the form of a causal graph, and data are observed or collected for some subset of variables in the graph. Target queries may be for a single effect alone or for a class of effects in a given model. The derivation of an identification algorithm then defines mathematically the process by which the desired causal effect(s) can be uniquely determined, theoretically, in expectation. Identifiability in expectation, or 'theoretical identifiability,' generally assumes asymptotic properties, infinite data, or other mathematically idealized conditions. In this paper, we explore a fundamental distinction between this theoretical, idealized notion of identifiability and a proposed alternative that is computation-bound. The framework we propose - 'computational identifiability' - is to instead define a finite computational search procedure for an empirical estimator. If this process finds an estimator empirically, within a desired error tolerance, then identifiability is satisfied, conditional on the specified assumptions of the search (i.e., a prior distribution over the parameters) and conditional on the search procedure itself. Through several experiments, we demonstrate how this framework allows us to answer fine-grained, practical identification questions, such as identification with small finite samples, with ambiguous graphical criteria, with mixed observational-interventional data, and across counterfactual data and estimands. Code is available at https://github.com/lbynum/metadentify.
