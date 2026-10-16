---
title: "CausalEvo: Causal Skill Self-Evolution for Health LLM Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.21016"
authors: ["Yuchen Zhang"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.21016v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Large language model (LLM) agents for health can accumulate reusable textual skills from task feedback, such as calculation criteria, measurement time points, and formula units. Deciding which skills to retain is consequential: useful rules improve later answers, while faulty generalizations propagate errors. We propose CausalEvo, a method for causal skill self-evolution that estimates the relative effects of deliberately changed skill sets while holding the model weights, feedback cases, and rule count fixed. At each evolution step, a frozen LLM proposes candidate rules, which are pooled with the incumbent skills so that the current skill set remains a feasible choice. Paired skill replacements against shared background rules are scored on the same feedback cases; least squares converts the score differences into relative skill values, and the top-ranked rules are retained, favoring incumbents on ties. A decision-loss bound separates candidate support, approximation, and estimation errors. On six MedCalc-Bench-Verified tasks with 120 held-out cases, CausalEvo achieves 60.00% accuracy, compared with 55.83% for SkillOpt and 51.67% without skills. Across the recorded training configurations, which use different optimization budgets, it consumes 55.6% fewer training tokens than SkillOpt. Gains concentrate in particular calculations alongside regressions on others, and paired accuracy intervals include zero. CausalEvo turns task feedback into controlled decisions about skill retention and replacement. Project repository: https://github.com/txbrook/CausalEvo
