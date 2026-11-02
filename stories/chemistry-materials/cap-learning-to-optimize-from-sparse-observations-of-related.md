---
title: "CAP: Learning to Optimize from Sparse Observations of Related Tasks"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41173"
authors: ["Lin Fu, Siwei Fu, Dong Ni"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.41173v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

In experiment-driven black-box optimization, each evaluation can consume materials, equipment time, and other resources, limiting the number of experiments available for a new task. Records from completed related optimization campaigns could help, but learning a sequential query policy remains challenging when task-specific experience consists of only a few sparse histories. We propose CAP (Candidate Acquisition Policy), which models shared structure and task-specific variation in fixed historical records to sample interactive practice functions. On these functions, CAP learns a feedback-conditioned query policy aimed at final optimization performance under a fixed evaluation budget. At deployment, its parameters remain fixed while each new observation informs the next query. Across five synthetic task families spanning 6 and 20 dimensions and two engineering simulation benchmarks, BOPTEST and SU2, CAP attains the lowest median final-budget value among the reported methods on four synthetic families and both engineering benchmarks. These results indicate that sparse records from completed related tasks can support adaptive query decisions on new tasks, making more effective use of limited, costly experimental evaluations.
