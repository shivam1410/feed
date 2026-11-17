---
title: "Minari: Infrastructure for Collaborative Reinforcement Learning Datasets"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18644"
authors: ["Omar G. Younis, Rodrigo Perez-Vicente, John U. Balis, Alex Davey, Will Dudley, Jordan K. Terry"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18644v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Offline reinforcement learning (RL) depends on shared datasets, but sharing them is still hard. Each benchmark ships its own format, documentation is thin, and most datasets cannot be regenerated once the environment code moves on. We introduce Minari, an open-source Python library for creating, sharing, and loading RL datasets. Its API follows Gymnasium, so recording a dataset means wrapping an environment and stepping through it as usual. From there, users can attach metadata, filter, combine, and shuffle datasets, and publish or download them with one command through the HuggingFace Hub. Every dataset stores the environment specification, seeds, applied wrappers, and pinned package requirements needed to rebuild the environment and regenerate the data. TorchRL, AgileRL, and d3rlpy already load Minari datasets natively, so switching datasets in those libraries takes one line of code. Minari also hosts 338 reproducible datasets (350K trajectories, 55M steps) covering robotic locomotion and manipulation, maze and grid navigation, language-conditioned instruction following, Atari, and web navigation, including a full regeneration of D4RL with public generation scripts. We report baseline scores for six offline RL algorithms on the regenerated D4RL and MuJoCo datasets.
