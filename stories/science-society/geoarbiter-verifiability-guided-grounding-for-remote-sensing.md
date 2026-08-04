---
title: "GeoArbiter: Verifiability-Guided Grounding for Remote-Sensing Multimodal LLMs"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00877"
authors: ["Xuechen Li"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 69
guid: "oai:arXiv.org:2608.00877v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00877v1 Announce Type: new Abstract: Remote-sensing multimodal large language models (MLLMs) often assert facts that imagery cannot establish, such as a facility's identity or function. Coordinate-keyed geographic retrieval can supply this missing knowledge, improving fMoW land-use accuracy by 12.06--17.19 points across three open MLLMs. However, retrieved records can also contradict visible evidence, and we find that models frequently follow the records even when the image is decisive. We argue that source trust should therefore depend on \emph{cross-modal verifiability}: geographic records are most useful for attributes the image cannot verify and most dangerous when they dispute visually verifiable attributes. We introduce GeoArbiter, a training-free pipeline that operationalizes this principle by injecting only image-unverifiable geographic facts. Unlike arbitration prompts, which leak across attribute types and bias yes/no responses, content-level filtering preserves 84.69--87.15\% of the full-retrieval accuracy gain, reduces claim-level hallucination by 9.58--26.34\% under a source-blinded judge, and improves robustness to conflicting records across all three models. These results identify verifiability-guided content selection as a simple, effective mechanism for grounding remote-sensing MLLMs in fallible geographic knowledge.
