---
title: "Reliability Scales Inversely: Bigger Models Compound Mistakes Faster via a Hidden Auto-Regressive Risk Regime"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18292"
authors: ["Kushal Chakrabarti"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18292v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18292v1 Announce Type: new Abstract: As language models scale, answers start truer but degrade faster: scaling buys capability but erodes reliability. The knowledge-gap account - more data, retrieval, or scale - misses an auto-regressive risk residual that scale sharpens: the model commits to a low-probability token, conditions on it as established, and snowballs. We track this through per-position disagreement $\delta = \log p_M - \log p_O$ against a stronger same-family oracle, whose second moment splits exactly into bias$^2$ $\mathrm{KL}(p_M \,\|\, p_O)^2$ and risk $\mathrm{Var}[\delta]$. We present four findings: (i) under scaling, the knowledge gap falls $\approx$$6\times$ while knowledge degradation grows $11$-$39\times$; (ii) at a fabrication, felt uncertainty $H(p_M)$ relaxes quickly while oracle-referenced risk persists up to $17\times$ longer, leaving a confident-but-precarious risk regime that bridges consecutive fabrications ($+69\%$ at $14$B); (iii) this regime is causal - an on-policy, fixed-$\mathrm{KL}$ variance contraction cuts web-verified hallucination by $35$-$74\%$ across three model families; and, (iv) it structurally evades self-monitoring, with $p_M$-only detectors (e.g. semantic entropy) firing $\approx$$30\%$ less ($p<10^{-16}$) on the risky branch holding nearly $4\times$ more fabrications. Bigger models snowball mistakes faster, through a failure mode that is dominant, self-perpetuating, causal and invisible to the model itself.
