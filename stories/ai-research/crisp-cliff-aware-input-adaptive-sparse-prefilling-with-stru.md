---
title: "CRISP: Cliff-awaRe Input-adaptive Sparse Prefilling with Structural-Mass-Motivated Routing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01925"
authors: ["Huu Huy Nguyen, Chien Van Nguyen, Franck Dernoncourt, Ryan A. Rossi, Linh Ngo Van, Jieyang Chen, Thien Huu Nguyen"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.01925v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01925v1 Announce Type: new Abstract: The attention prefilling phase of long-context LLM inference scales quadratically, making self-attention a severe computational bottleneck. Traditional sparse attention methods mitigate this through fixed patterns or offline profiling, but lack the flexibility to adapt to input-dependent attention structure. Recent dynamic methods address this by routing heads to sparse patterns in real-time, but rely on indirect routing proxies with overhead and budget allocation mechanisms that overlook the post-softmax mass hierarchy. We present CRISP (Cliff-awaRe Input-adaptive Sparse Prefilling), which identifies and addresses two structural challenges in this dynamic routing paradigm. First, we show that the routing decision can be read directly off the structure of the proxy attention map. We replace the Jensen-Shannon Divergence (JSD) routing with C_struct, a structural proxy that measures mass at Vertical-Slash compatible positions and reproduces JSD's routing decisions while eliminating both the pooled matmul and subsequent KL divergence overhead. Second, we formalize the post-softmax mass cliff and demonstrate theoretically that strictly cumulative coverage thresholds accumulate O(n) background noise at long contexts. CRISP navigates this via a sink-aware threshold grounded in the noise floor. Empirically, across InfiniteBench, RULER and LongBench on two model families, CRISP is the strongest sparse method overall and matches or exceeds exact dense attention on retrieval-heavy benchmarks, recovering up to +28.0 pp on retrieval tasks over baselines and achieving up to a 5.30x attention speedup at 512k tokens, driven primarily by our O(n) noise elimination during selection while preserving structural integrity.
