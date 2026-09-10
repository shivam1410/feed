---
title: "Unthrottling the Tanh Jacobian in SAC: A Negative Result on Bang-Bang Control and MetaDrive"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09478"
authors: ["Faiq Shamass"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09478v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09478v1 Announce Type: new Abstract: Soft Actor-Critic (SAC) represents a continuous policy as an unbounded Gaussian that is squashed by tanh. The Jacobian of that map is $\partial a/\partial u = 1-a^2$, which vanishes as $|a|\to 1$. A natural concern is that this throttle starves the actor of critic signal exactly where extreme actions (full brake, full throttle) are optimal. We test a minimal intervention that restores the missing signal: one extra term in the actor loss whose gradient on the pre-tanh mean is the detached action-gradient of $Q$, with no gain parameter. On a minimum-time double integrator whose optimum is bang-bang at the action bounds, vanilla SAC already reaches near-optimal return ($-31.6$ vs. a calibrated optimum of $-30.3$) across ten paired seeds. An ungated bypass does saturate the policy (99% of eval steps with $|a|\ge 0.9$) and collapses return to $-195.5$. A gated bypass that fires only on the flat shoulder $|a|\in[0.9,0.999]$ also fails, and does so without leaving a saturated policy. Warm-started MetaDrive fine-tuning shows the same pattern: the bypass does not improve return, and where collision rate falls it is typically traded for out-of-road departures. Auto-tuned entropy coefficient rises against the bypass, which is a push toward the tails. The Jacobian effect is real. Treating it as a bug to be undone is not free, and on the tasks studied here it is not helpful. Saturating a bound is not the same as solving a problem whose optimum lives on that bound.
