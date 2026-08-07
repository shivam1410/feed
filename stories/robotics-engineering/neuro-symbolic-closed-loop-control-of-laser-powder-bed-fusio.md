---
title: "Neuro-Symbolic Closed-Loop Control of Laser Powder Bed Fusion with an In-Loop Ontology"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.05773"
authors: ["Gisuk Hong, Jaebong Cho, Hyunbo Cho"]
date: "Fri, 07 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.05773v1"
image: ""
generated: "2026-08-07T19:04:45+05:30"
---

arXiv:2608.05773v1 Announce Type: new Abstract: A geometry-conditioned, neuro-symbolic closed-loop architecture is proposed for laser powder bed fusion, in which a standards-aligned ontology operates inside the control loop and couples symbolic reasoning with statistical learning to set the targets of a constraint-aware predictive controller. The ontology links the process objectives and constraints to the signals a controller can observe, and a description-logic reasoner converts them into the references and bounds enforced on each scan. The demonstrated case is overhang dross, a quality limit on the melt pool depth, which governs quality yet cannot be measured during the build, is mapped through a geometry- and power-dependent depth-to-width ratio onto a bound on the observable width, with the ratio and its calibrated uncertainty supplied by a Gaussian process. The reasoner classifies each upcoming feature and selects the active constraints-adding a lack-of-fusion floor at overhangs, a monotone guard beyond the calibrated range, and an energy-density cap where a process window is declared while running only on changes of geometric context and otherwise leaving a single small quadratic program on the per-scan path. In an Eagar-Tsai surrogate calibrated to the NIST AM-Bench benchmark for IN625, the architecture eliminates the dross produced by a geometry-blind controller, holds dross at zero with only a small residual lack-of-fusion under dual scoring, degrades gracefully under deliberate plant mismatch, and retargets to new alloys and constraints by editing ontology data rather than code. The results establish architectural feasibility, experimental calibration of the ratio is the principal next step.
