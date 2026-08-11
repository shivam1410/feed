---
title: "SkillConsist: Detecting Inconsistencies in Agent Skills via Bidirectional Graph Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07639"
authors: ["Chaofan Meng, Yuhang Zheng, Yingnan Zhou, Sihan Xu"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.07639v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07639v1 Announce Type: new Abstract: Agent Skills provide reusable capabilities to LLM agents. Agent Skill inconsistencies can expose undisclosed dangerous behavior or cause wrong Skill selection. Recent Agent Skill research has increasingly examined Agent Skill consistency detection. Existing methods evaluate behaviors or security-property graphs against predefined categories or declared scopes. More recently, PL-HCL uses an LLM-based model to learn consistency across metadata, instructions, and resources. However, declaration and implementation behavior can be mixed across text and code, and a concise declaration can correspond to multiple connected implementation steps. We present SkillConsist to address both challenges. An LLM separates declaration and implementation content into behavior records on the implementation and declaration sides, while static analysis supplements implementation records. These records form declaration and implementation behavior graphs, respectively. Starting from a behavior record on either side, bidirectional graph alignment searches the other graph for a candidate subgraph and expands it along behavior relations until it completely expresses the source-side behavior. Graph differencing identifies conflicts between aligned subgraphs and outputs the detection results. We construct a 633-Skill benchmark from ClawHub's 500 most-downloaded public Skills and 133 Skill-Inject packages. The benchmark contains 319 inconsistent and 314 consistent Skills and 442 localized inconsistency annotations. On this benchmark, SkillConsist achieves 86.85% precision, 89.03% recall, and 87.93% F1 for package-level detection, improving F1 over the best baseline by 20.43 percentage points. For localization, it achieves 67.60% precision, 58.14% recall, and 62.52% F1.
