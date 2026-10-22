---
title: "Offline Apprenticeship Learning for Human-Centric Environments"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28716"
authors: ["Md Mirajul Islam"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.28716v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Effective decision-making in human-centric environments such as Intelligent Tutoring Systems (ITSs) and clinical healthcare requires policies that are adaptive, data-efficient, and ethically deployable. Apprenticeship Learning (AL) infers policies directly from expert demonstrations by recovering the underlying reward structure, enabling strictly offline learning without environment interaction. This dissertation develops a progression of offline AL frameworks organized around two challenges: reward modeling and demonstration quality. For reward modeling, EM-EDM clusters demonstrations by latent reward functions and induces cluster-specific policies, and THEMES partitions trajectories into temporally coherent sub-trajectories guided by a hierarchically learned reward regulator; across one educational and three clinical datasets, THEMES outperforms flat and hierarchical AL baselines. For demonstration quality, HALIDE integrates continuous quality signals into hierarchical policy induction, enabling principled reuse of mixed-quality data under distribution shift. CCHAL further attributes quality to individual decisions via Bayesian credit assignment, dual-arm criticality scoring that contrasts expert and non-expert behavior, and a Bradley-Terry contrastive IRL objective over failure trajectories, outperforming baselines including HALIDE on three clinical EHR datasets and an ITS dataset. Finally, a real-world classroom evaluation of StuEDM, an EDM-induced policy that preserves student agency and intervenes only on disagreement, shows significant learning gains over an Expert baseline and a higher pretest-adjusted posttest score than a CQL policy trained on a far larger corpus, while overriding students less than half as often. Together, this work establishes offline AL as a practical, data-efficient, and ethically viable paradigm for human-centric environments.
