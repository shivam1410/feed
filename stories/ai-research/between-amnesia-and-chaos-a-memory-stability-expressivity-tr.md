---
title: "Between Amnesia and Chaos: A Memory Stability Expressivity Trilemma for Trainable Dissipative Oscillator Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09929"
authors: ["Caleb Munigety"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.09929v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09929v1 Announce Type: new Abstract: Physical reservoir computing harnesses nonlinear mechanical dynamics but, by convention, freezes the substrate and trains only a linear readout, presuming the substrate is not usefully trainable. We revisit that premise for networks of nonlinear oscillators whose mass, damping, and stiffness are learned end-to-end through a symplectic integrator. Our central result is a trilemma: memory horizon, gradient stability, and dynamical expressivity cannot be simultaneously maximized, because all three are governed by the damping. The backward gradient decays at a rate set by the damping, capping how far back credit can propagate, while forward sensitivities grow exponentially in the largest Lyapunov exponent, so usable gradients require damping above a stability floor. Since the Lyapunov exponent falls as damping rises while the memory ceiling falls as the horizon grows, stable training is confined to a band that contracts with horizon and closes at a critical point. We test every step on a twenty-oscillator network. A damping sweep finds the largest Lyapunov exponent monotone and crossing zero at a well-defined stability floor, confirming the theorem's key assumption. A compute-matched comparison of learned versus frozen substrate on delayed recall across nine horizons shows the learned substrate dominating at short horizons and the advantage closing and reversing near a horizon of eleven steps, the predicted signature of band closure; trained models settle near the stability floor, seeking the edge of chaos unprompted. The analytic ceiling overestimates the empirical crossover roughly fivefold, a gap between detectable and learnable gradient that we report rather than tune away. The contribution is a confirmed account of when training a physical substrate beats freezing it.
