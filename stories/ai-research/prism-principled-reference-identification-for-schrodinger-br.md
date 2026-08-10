---
title: "PRISM: Principled Reference Identification for Schrodinger Bridge Model"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06893"
authors: ["Forouzan Fallah, Yezhou Yang"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.06893v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06893v1 Announce Type: new Abstract: Schr\"odinger bridge models restore a clean signal from a degraded observation by following the conditional bridges of a reference process, yet this reference is chosen heuristically, typically white noise with a hand-tuned schedule. We develop PRISM, a theory of bridge reference design. We characterize the time-varying Gaussian references that remain exactly tractable with per-mode schedules: precisely those whose instantaneous covariances commute. We then prove an invisibility principle: with the exact drift and unlimited solver steps, every admissible reference recovers the true posterior. The choice of reference therefore matters only under finite computational resources. For a fixed step budget, we derive the finite-step objective in closed form and prove that every optimal noise spectrum is proportional to Pk, the spectrum of information destroyed by the sensor, with a mode-independent constant x*(T) = (2 ln T)^-1/2 (1 + o(1)). The analysis shows that noise color and temporal scheduling are interchangeable, and regularization provably shifts the optimal reference toward white noise. Experiments in Gaussian settings confirm the predicted orderings and the closed-form loss floors. On FFHQ, the distortion-- perception trade-off and spectral localization transfer, but white noise outperforms the matched reference; a pre-registered study that changes the training regime refutes ridge whitening as the explanation. A 2x2 mechanism study then traces the inversion to the non-Gaussian per-mode statistics of real images. PRISM turns reference design from a hyperparameter sweep into a calculation in the Gaussian regime, and locates exactly where real images break it.
