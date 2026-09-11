---
title: "Measuring the Value of World-Model Updates: A Counterfactual Utility Protocol for Continual Adaptation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10954"
authors: ["Anqi Peter Li, Kaden Kim"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10954v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10954v1 Announce Type: new Abstract: Continual world models must decide whether new data justify changing the model. Fixed replay schedules and prediction-error triggers specify when to update, but neither reveals the value of an individual update: one deployment run cannot show how the same model would have performed at that moment had it held its parameters. We introduce the fork ledger, which branches a deployment stream at pre-registered decision points into matched update and hold continuations under common random numbers. It evaluates both continuations on the same episodes and records $\Delta R = R_{\mathrm{update}} - R_{\mathrm{hold}}$. Always applying one fixed update mechanism lowers return on all three simulated control tasks: CartPole ($-144.0$; checkpoint-bootstrap $95\%$ CI $[-185.4,-116.1]$, against a converged return near $650$), Walker ($-82.8$; $[-101.1,-61.7]$) and Cheetah ($-18.6$; $[-29.0,-6.6]$). Divergence is an outcome of applying the update, so the estimand counts every attempted fork; restricted to the $693$ of $720$ that did not collapse, CartPole and Walker are unchanged in sign ($-113.4$ and $-82.1$) and Cheetah becomes unresolved ($-3.9$; $[-17.5,+13.0]$). The task is the unit of inference: each contributes $240$ attempted forks over five pretrained checkpoints crossed with two drift directions. The ledger makes counterfactual utility observable for a fixed mechanism, allowing triggers to be judged by the updates they select rather than by surprise detection alone.
