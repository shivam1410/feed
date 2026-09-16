---
title: "Autonomous Droplet Navigation via Model-Based Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16369"
authors: ["Rajneesh Anand, Mayuresh V. Kothare"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16369v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16369v1 Announce Type: new Abstract: Precise manipulation of liquid droplets underpins lab-on-a-chip platforms for diagnostics, chemical synthesis, and biological assays. Yet autonomous droplet transport through confined geometries of varying complexity remains an open challenge. Droplets exhibit contact-angle hysteresis, deformability, and capillary pinning, which make their response to actuation nonlinear and history dependent, that classical controllers and pre-programmed trajectories cannot cope in multi-turn environments. Here we demonstrate autonomous navigation of a liquid droplet through geometries of increasing complexity on a gravity driven (Labyrinth) platform using model-based reinforcement learning. A thin silicone oil film reduces contact-line pinning while two-axis tilt supplies the gravitational driving force, and an overhead camera tracks the droplet in real time. An offline-trained policy discovers effective tilt strategies from limited physical interaction data, without simulation or analytical droplet models. The system operates under partial observability, as oil-film thickness, instantaneous contact angle, and droplet deformation state remain hidden from the controller. Despite these challenges, the learned policy achieves reliable navigation across straight, right-angle, and curved-arc paths, including outside-corner geometries. We further demonstrate that a policy trained on a simpler geometry transfers to complex ones, succeeding zero-shot on right-angle and staircase paths and reaching full success on a curved arc with a fifth of the training data. The findings suggest promising avenues for enabling droplet based microfluidic systems to serve as intelligent chemical laboratories.
