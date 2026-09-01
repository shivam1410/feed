---
title: "Does Latent Planning Survive Point Clouds? Action-Conditioned JEPA World Models for Geometric Observations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29434"
authors: ["Fabio F. Oberweger, Michael Schwingshackl"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.29434v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29434v1 Announce Type: new Abstract: JEPA world models make latent-space planning a practical route to control, but they are built almost exclusively on images. Whether latent prediction survives geometric observations is unclear: point clouds are sparse, unordered, and self-occluded, and with 0.3-15% of scene points moving, the slow-feature optimum of latent prediction compounds with the geometric shortcut of 3D self-supervision. We lift three canonical JEPA designs to point clouds, frozen-encoder, distribution-prior, and action-sensitive, and re-sense the stable-worldmodel benchmark so that only the observation differs from the image baselines. All three plan without collapse: the distribution-prior model is statistically equivalent to its re-evaluated image counterpart on every benchmark, and the action-sensitive model attains the strongest result in our controlled comparison where the most geometry moves. Probing explains why: object positions are almost perfectly linearly decodable and attention falls on the few moving points. Planning withstands heavy dropout never seen in training, though range noise defeats the thinnest scene. Geometry finally makes a commanded 3D target a natural goal interface: we construct the goal latent from the target and the current latent, at no cost in success rate, without a goal observation.
