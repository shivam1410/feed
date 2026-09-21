---
title: "REFINEPPO: Learning Continuous Control Policies by Iterative Action Refinement"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21108"
authors: ["Sachini Weerasekara, Sagar Kamarthi, Jacqueline Isaacs"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2609.21108v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21108v1 Announce Type: new Abstract: Deep reinforcement learning (DRL) has achieved strong performance across a wide range of continuous-control problems. These continuous-control policies, however, are often defined as direct mappings from an observed state to an action or action distribution, requiring a single feed-forward network to construct an optimal control decision in one pass. While effective, this formulation leaves little opportunity for the policy to reconsider or progressively improve an action once an initial prediction has been formed. In this work, we explore an alternative approach: rather than learning only to directly predict an action, can a policy learn to iteratively improve one, and can this iterative process provide advantages during policy learning? We introduce Iterative Action Refinement (IAR), an iterative action-construction method that constructs control actions through a sequence of learned residual corrections. Starting from an initial proposal, a shared refinement network repeatedly conditions on the observed state and the current action proposal, allowing each refinement step to revise the action constructed by preceding steps. The final refined proposal is then used to determine the action executed by the agent. We integrate this iterative action-construction mechanism with Proximal Policy Optimization (PPO), yielding REFINEPPO. We evaluate REFINEPPO across 14 benchmark control tasks, complemented by controlled ablations of refinement depth and update schedules and analyses aimed at understanding why iterative refinement is effective. Across these environments, REFINEPPO matches or exceeds the performance of standard PPO while demonstrating faster convergence on several tasks.
