---
title: "Minimal Recurrent Behavioral Memory for Imitation under Partial Observability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25757"
authors: ["Xianyao Li, Fang Xu, Rui Min, Ruitong Tian, Jing Du"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25757v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25757v1 Announce Type: new Abstract: What is the least recurrent memory needed to reproduce a specified expert under partial observability? The instantaneous requirement is the conditional entropy of the expert's behavioral quotient, but recurrence must also preserve distinctions that future observations will not restore before use. We characterize this minimal recurrent behavioral memory by a compatibility relation: under transitivity its classes attain the exact minimum, while the general case is an entropy minimization over closed compatible state assignments, with exact certificates on finite instances. A sole-carrier measurement protocol separates behavioral sufficiency, excess code rate, and information carried by observations or other memory paths; experimental bit requirements refer to the induced symbolic behavioral model under the stated occupancy. Across manipulation tasks, learned code rates remain near zero- and two-bit requirements as hidden modes grow to $512$, and anticipatory memory follows a $2\to1\to0$ requirement despite zero instantaneous demand during waiting. Learning this representation remains difficult: event-agnostic future-behavior supervision yields $36/40$ sufficient seeds with one frozen configuration and improves the longest-horizon pixel setting from $0/8$ to $6/8$ sufficient held-out seeds (closed-loop success from $0.08$ to $0.57$). On unmodified community benchmarks, the protocol certifies delay-independent requirements, which sufficient codes match at mid-delay. The supervision aids commitment but can induce predictive surplus; annealing it lets imitation and rate training reduce that surplus, separating the information-theoretic target from the ability to learn it.
