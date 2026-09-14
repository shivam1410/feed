---
title: "Certified AI Triage of ICU Alarms"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12365"
authors: ["Mohammed Sameer Syed, Rozhin Yasaei"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12365v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12365v1 Announce Type: new Abstract: In the VTaC benchmark 71% of ventricular-tachycardia alarms are false, but silencing a real one can delay recognition of a dangerous arrhythmia. We reframe alarm reduction as three-way triage (retain, suppress, or defer) and bound the decision this analysis treats as harmful: among suppressed alarms, the fraction that were genuine stays below a user-set budget with 95% confidence, under i.i.d. event sampling. Alarms sharing a waveform record are dependent, so the clustered analysis is a sensitivity check. On the official split a 5% budget certifies in all three seeds, suppressing 74.8% of false alarms while silencing 1.5% of genuine ones, at AUROC 0.953 and Challenge Score 83.33, numerically comparable to the strongest of the eleven published systems. Our central finding measures what multiplicity costs: the correction charges for every candidate, so a finer grid can certify strictly less. Under held-out calibration the 885-cell grid we declared certifies 1 of 15 fold-runs, while choosing the grid on a separate selection partition certifies 8. We project the calibration volume each budget needs, making an uncertifiable budget a design parameter. Finally, adding a learned reliability dimension to the policy grid did not sharpen the certified frontier.
