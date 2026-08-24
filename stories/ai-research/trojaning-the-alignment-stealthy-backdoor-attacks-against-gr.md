---
title: "Trojaning the Alignment: Stealthy Backdoor Attacks against Graph Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20991"
authors: ["Minhua Lin, Zhicheng Gao, Yilong Wang, Hanqing Lu, Xiang Zhang, Suhang Wang"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.20991v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20991v1 Announce Type: new Abstract: Graph Foundation Models (GFMs) on text-attributed graphs (TAGs) align graph representations with language semantics to support transferable graph learning. Despite these advantages, the backdoor vulnerability of GFMs on TAGs remains insufficiently understood, especially under graph-language alignment, where graph and text representations are trained to constrain each other in a shared semantic space. Existing backdoor attacks mainly target either the graph side or the text side, treating the two modalities independently. This makes direct adaptation ineffective: graph-only triggers can be constrained by clean text semantics, while text-only triggers alter the language view but do not directly shift the graph representation being aligned and scored. TAGs also impose a stealth challenge because triggers are exposed as both node text and local graph structure, making incoherent trigger attributes or anomalous subgraphs easy to inspect or filter. In this paper, we propose STAG, a stealthy trojan attack framework designed for the graph-language alignment interface of GFMs on TAGs. STAG coordinates a graph-trigger generator with a text-side soft prompt so that trigger-attached graph representations and triggered text representations move toward the same target-class text region. To address TAG-specific stealthiness, STAG realizes trigger nodes as readable text through candidate retrieval and regularizes the trigger-attached subgraph so that its local structure remains close to the original subgraph. Extensive experiments on multiple TAG datasets and representative GFMs demonstrate the effectiveness and stealthiness of STAG. Our code is available at https://github.com/ventr1c/STAG.
