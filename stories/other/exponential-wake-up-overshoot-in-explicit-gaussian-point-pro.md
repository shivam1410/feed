---
title: "Exponential Wake-Up Overshoot in Explicit Gaussian Point-Process Filters"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35958"
authors: ["Hanwu Qin, Dianhai Wang"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35958v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

When events resume after a long silence, explicit Gaussian point-process filters amplify the first update exponentially in the silence duration. We give the exact distribution of this update and a computable index that predicts when it overshoots. For the explicit (single-scoring-step) filter and its implicit posterior-mode counterpart, we derive second-order silence expansions of the state variance with opposite-sign logarithmic corrections. The crossing index determines when the post-wake prediction exceeds the resumed rate, separating the bin width at which the amplification exponent reaches one from the larger width at which the true rate is overshot. At fixed bin width, the implicit filter's expected loss grows logarithmically with silence duration, whereas a continuous-time counterexample rules out a bound uniform in bin width and silence duration. Experimental evaluation confirms these predictions in all 73 crossing cells and on exchange trade data, while variance caps reduce explicit overshoot but mostly hurt the implicit filter.
