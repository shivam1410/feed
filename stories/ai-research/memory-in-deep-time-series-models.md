---
title: "Memory in Deep Time-Series Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06006"
authors: ["Minh Hoang Nguyen, Huu Hiep Nguyen, Manh Nguyen, Van Dai Do, Dung Nguyen, Hung Le"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.06006v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06006v1 Announce Type: new Abstract: Deep learning for time series has progressed through successive architectural paradigms, from recurrent networks and transformers to structured state-space models, retrieval-augmented predictors, foundation models, and tool-using agents. These developments are typically studied in isolation, organized by architecture or modeling era. We argue that they can instead be viewed through a common question of \emph{how does a time-series model retain and access information beyond its immediate input?} This question is motivated by a fundamental limitation of conventional time-series modeling: information relevant to a prediction may lie far beyond a feasible input window, while compressing history into a fixed-size state can discard information that may become useful later. We formulate this challenge as a \emph{memory} problem and organize existing time-series methods along a spectrum from internal memory, encoded in parameters and fixed-size states, to external memory that is addressable, retrievable, and increasingly maintained by agents. We then develop a unified taxonomy of memory mechanisms and review three classes of external memory, including explicit modules, retrieval augmentation, and agentic stores, under a common framework for what is retained, how it is written and accessed, and how it persists. A cross-cutting analysis maps these mechanisms to time-series tasks and identifies gaps in both methods and evaluation. We conclude by outlining open problems in building memory systems that can selectively retain, retrieve, revise, and forget information as temporal environments evolve. The result is a framework for studying memory as a first-class dimension of time series modeling, independent of the underlying backbone.
