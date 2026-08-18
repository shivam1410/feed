---
title: "WANDR: A Benchmark for Wide and Deep Research"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14747"
authors: ["Vitaliy Polshkov, Marcin Pitera, Jeremy Yang, Kirill Priemko, Maksim Gaiduk, Aleksandr Nikolenko, Denis Bykov, Clare Southern, Denis Yarats, Jerry Ma"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.14747v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14747v1 Announce Type: new Abstract: WANDR (Wide ANd Deep Research) is a benchmark of 500 realistic, challenging data-collection tasks for research agents. Each task requires a system to discover a large set of entities that satisfy specified criteria (breadth), investigate each entity through multiple coordinated web searches (depth), and return independently verifiable records with supporting sources and excerpts. Tasks are represented as qualification key hierarchies that specify the entities, relationships, evidence, and required count at each level; a hierarchy with n companies, m employees per company, and k sources per employee requires n x m x k records. This structure supports diverse workflows such as market mapping, due diligence, literature review, product comparison, and talent sourcing, with targets ranging from dozens to thousands of records. WANDR replaces static gold answer sets with task-specific judges that refetch cited pages and verify each record against its evidence, allowing evaluation of current and changing facts. Record verdicts are aggregated into soft and hard precision, recall, and F1 scores that distinguish factual quality, coverage, and hierarchical completeness. The tasks are derived from de-identified product-usage logs and produced through a semi-automated pipeline with automated checks, empirical audits, and human review where needed. We evaluate six production research systems and find that the benchmark is far from saturated: at high effort, the strongest system reaches only 0.363 soft F1 and 0.133 hard F1. Performance degrades as target volume and hierarchy depth increase, with incomplete discovery, missing enrichment, and incomplete evidence construction remaining major bottlenecks. The benchmark and evaluation harness are available at https://github.com/perplexityai/wandr.
