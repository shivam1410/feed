---
title: "Geo-Strat-RL: Learning Geological Event Reasoning from Verifiable Tasks"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.25000"
authors: ["Lukas Mosser"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.25000v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.25000v1 Announce Type: new Abstract: To evaluate whether vision-language models can reason about geological histories, it is necessary to construct observations for which the underlying process history is known. Furthermore, reasoning over geological histories is not just a question of recognizing visual patterns, but also of understanding temporal and structural relationships that may be only indirectly visible or highly ambiguous. When ground-truth event histories are not uniquely identifiable or are unavailable, it remains an open challenge to teach models capable of visual reasoning to produce valid geological reconstructions that are consistent with both observed evidence and geological principles. We therefore investigate whether defining a verifiable geological reasoning task can improve geological event reconstruction across observation domains through reinforcement learning with verifiable rewards (RLVR). To this end, we present Geo-Strat-RL, a synthetic environment that generates stratigraphic observations and compact visible-evidence event histories. The environment combines a geological generator with an executable verifier that scores chronology, event identity, deposition, and structural relationships. We show that RLVR improves geological reconstruction in vision-language models (VLMs), increasing geological content scores on held out stratigraphic diagrams. We further evaluate the same held-out geological histories in a synthetic seismic observation domain by converting the generated scenes into acoustic-impedance-derived amplitude sections. In this controlled paired-renderer setting, we present evidence that geological reasoning learned from stratigraphic diagram-domain RLVR training transfers to synthetic seismic representations without seismic-specific training examples, supporting the hypothesis that RLVR can teach reusable geological reasoning concepts across related observation formats.
