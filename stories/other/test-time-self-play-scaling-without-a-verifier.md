---
title: "Test-Time Self-Play: Scaling without a Verifier"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07367"
authors: ["Akira Yoshiyama, Akmal Ashirmatov, Jonas H\\\"ubotter, Ido Hakimi, Andreas Krause"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07367v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Test-time scaling methods spend additional compute at deployment to improve a large language model's performance on a hard target problem. Most methods rely on a verifier that scores candidate solutions for correctness, using it to select among or refine the model's outputs. In many deployment regimes, however, a strong verifier on the target problem is unavailable. We introduce Test-Time Self-Play (TTSP), an approach to test-time scaling using asymmetric self-play without reliance on a verifier. On a difficulty-calibrated subset of LiveCodeBench v6, TTSP is the best-performing method at every verifier strength we evaluate, and the gap to the strongest baseline widens as the verifier weakens; in the no-verifier limit, TTSP yields a 35\% absolute improvement in mean@8. The gains hold across a range of verifier strengths, except when the base policy has near-zero coverage of the correct answer.
