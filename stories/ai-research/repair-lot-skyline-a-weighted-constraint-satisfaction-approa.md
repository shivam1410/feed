---
title: "Repair Lot Skyline: A Weighted Constraint Satisfaction Approach to Pavement Repair Optimization from Geospatial Hazard Density"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06989"
authors: ["Takato Yasuno, Keita Kobayashi, Ryuta Sakaguchi, Takuya Okamoto"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.06989v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Pavement agencies must translate a spatially distributed distress inventory into a bounded, actionable repair-lot plan: accident-critical defects (potholes) must always be addressed, lower-risk defects (cracks) should be included only when their benefit justifies the repair cost, and historical patch locations signal re-degradation risk without themselves triggering repair. We formalize this as a Repair Lot Skyline problem: a Weighted Constraint Satisfaction Problem (WCSP) defined over chainage (distance along the road) rather than over time, so that it requires only a single-epoch distress survey and makes no claim about future deterioration. The WCSP identifies 143 candidate hazard clusters (61 hard, 82 soft), of which 106 are merged into a final repair plan totaling 1,997.4 m---83.7% of the 2,385.9 m that would be required if every soft candidate were included regardless of cost. This plan covers 100% of observed potholes (138/138) and 91.6% of observed cracks (404/441), capturing 93.6% (542/579) of the total hazard benefit available in the full candidate set. The skyline frontier shows pronounced diminishing returns beyond this point: the remaining 37 excluded soft candidates would add only 6.8% additional benefit for a 19.4% increase in repair length. We further formalize the minimum-lot-length $L_{\min}$ and historical-context radius $\kappa$ as a joint, four-objective hyperparameter search over this WCSP; on the same case study, the recommended configuration ($L_{\min} = 14.7$ m, $\kappa = 10$ m) reduces repair-crew mobilizations by 7.1% relative to an untuned default, at the cost of a 12.9% larger budget and a 1.1-percentage-point lower crack coverage.
