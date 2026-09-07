---
title: "Fast Surrogate Modeling of Excitable and Oscillatory FitzHugh-Nagumo Dynamics with Parametric Neural Operators"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04549"
authors: ["Andrew Franck, Justin Li"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.04549v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04549v1 Announce Type: new Abstract: The FitzHugh-Nagumo (FHN) system serves as a simplified model of neuronal voltage dynamics, capturing the activator-inhibitor structure behind both isolated action potentials and the rhythmic spiking seen across the brain. Exploring its 5D physiological parameter space is important for neuromodulation and mapping voltage recordings back to biophysics, yet classical finite-difference solvers make rapid parameter sweeps expensive. We train parameter-conditioned Fourier Neural Operators (FNOs) as fast, differentiable surrogates for the FHN voltage and recovery fields on a one-dimensional spatial domain, conditioning each Fourier layer on the parameter vector $\lambda = (D_u, D_v, a, b, \tau)$ via feature-wise linear modulation (FiLM). We apply a single bifurcation analysis that delimits the two distinct regimes the model spans, oscillatory (tonic firing) and excitable (action-potential propagation), and we train one operator in each. In the oscillatory regime the surrogate attains sub-$0.1\%$ relative $L^2$ error on both fields, runs nearly three orders of magnitude faster than the finite-difference baseline, generalizes uniformly across the parameter space, and extrapolates to low single-digit percentage errors outside of the training bounds. In the excitable regime the same operator accurately reproduces the firing threshold and the $c \propto \sqrt{D_u}$ conduction-velocity law and replicates full traveling pulses, fully capturing the excitable bifurcation structure rather than just smoothly interpolating fields.
