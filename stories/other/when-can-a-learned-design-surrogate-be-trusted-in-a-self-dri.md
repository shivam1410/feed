---
title: "When Can a Learned Design Surrogate Be Trusted in a Self-Driving Microfluidics Laboratory? An Offline Closed-Loop Framework Built and Tested on Six Public Tables"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36395"
authors: ["Zhiyuan Zhang"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36395v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Self-driving laboratories couple a learned design surrogate to an instrument, and on every new target domain it must answer four questions: when it can be trusted, how many target measurements it needs, which to make first, and when to stop adapting, switch models or escalate. We state a framework making each measurable (a competence ratio, a budget $k^*(\varepsilon)$, a time-to-target and a priced decision) and instantiate it without wet experiments on six public droplet-microfluidic and liposome tables as offline laboratories: 107 leave-one-group tiers whose rows are hidden labels. A sealed, pre-registered programme (two sealed negative validations and a pre-registered test on three more tables) and seven frozen closed-loop protocols, each run twice, yield 23 findings. Shift cost is stratified by shift type; no label-free statistic certifies individual candidates; random-split model-family rankings predicted neither the sealed nor the loop rankings. Warm-start residual boosting returns a surrogate to $1.25\times$ its development reference within 20 target rows in 94% of chemistry tiers (27% under a strict noise-floor reading), 90% of laboratory and 40% of device tiers, and a budget planned from the shift type on other tables is not measurably worse on a new one. In the loop, one gain survives drift and shuffled-label controls on all tiers, carried by the sparsely sampled ones: proposing at once and warm-starting on every measurement reaches a 10% target in 2.80 measurements against 3.31 for the reference, and in 5.72 against 11.35 for random proposals on 301 hard units at a 3% tolerance. No label-free acquisition rule survives the shuffled-label control, no interval-aware proposal or other model family does better, and no threshold rule on the tested diagnostics beats always continuing once escalation is priced. No wet-lab validation is claimed.
