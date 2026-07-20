---
title: "Do Generative Models Keep Time? A Time-Aware Evaluation of Synthetic Sequential Tabular Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15606"
authors: ["Kiwan Kwon, Kangmin Kim, Hojin Lee, Yeseong Jung, Hyeongwoo Kong, Vamsi K. Potluru, Saerom Park, Yongjae Lee"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.15606v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15606v1 Announce Type: new Abstract: Synthetic sequential tabular data are increasingly used for privacy-preserving data sharing, yet a generator can reproduce every marginal and every foreign-key relationship while emitting timestamps that run backwards or repeat, and while sending entities along paths that no real entity followed. Conventional tabular evaluation, which pools records into static distributions, is blind to such failures. We present a taxonomy-guided evaluation protocol for temporal fidelity, in which the applicable measurements are determined by the data rather than fixed in advance. Each dataset is first characterized along four properties: how time is represented, whether observations are regularly sampled, whether trajectories are mutually dependent, and how the schema links entities to their histories. These properties determine which evaluation dimensions are meaningful. The protocol then measures timestamp validity, cross-sectional structure at aligned time points, within-entity dynamics, and time-varying relational structure, and recasts utility and privacy evaluation over trajectories rather than isolated rows. We apply the protocol to eight generative models across thirteen datasets spanning six domains. Rankings under conventional evaluation disagree substantially with those obtained under temporal evaluation, and the resulting failures are architecture-coherent rather than random. Temporal fidelity must therefore be measured on the time axis itself, rather than inferred from pooled record distributions.
