---
title: "When Do Conservation Laws Survive Learned Representations? Certified Horizons for Latent World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24945"
authors: ["Hongbo Wang"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.24945v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24945v1 Announce Type: new Abstract: We ask a representation-learning question about physical world models: when does a conservation law remain certifiable after a model learns a latent representation? A certified horizon bounds -- in advance, from measurable model defects -- how many steps a rollout provably stays on a physical invariant's level set. The key design choice is what is certified: not a learned latent Hamiltonian or a learned scalar witness (a model can conserve either while drifting in true energy), but the decoded physical invariant obtained by decoding the latent state and evaluating the known invariant. Around this object we derive shell-horizon certificates whose budget decomposes into representation, readout, and latent-dynamics defects, with a monotone alignment bridge through which a soft learned witness yields a certified horizon for the decoded invariant, and test them across state, learned-lift, and pixel observations on conservative systems. Conservation certificates can survive learned representation, but not all geometric priors survive equally: hard canonical symplectic structure yields the longest horizons in known phase coordinates yet does not cross a learned chart, whereas a controlled-Lipschitz-aligned soft invariant survives in the learned-representation settings we test; pixel certification is recovered on a readout-stable sub-tube; and the Kepler problem exposes a geometric boundary. The central object is therefore not a latent Hamiltonian, but a decoded physical invariant whose robustness to representation learning can be measured, certified, and falsified.
