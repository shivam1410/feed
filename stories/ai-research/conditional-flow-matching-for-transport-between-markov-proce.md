---
title: "Conditional Flow Matching for Transport Between Markov Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07229"
authors: ["Syamantak Kumar, Dheeraj Nagaraj, Saptarshi Roy, Purnamrita Sarkar"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.07229v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Motivated by sequence-to-sequence transport in the context time-series domain adaptation, we study the problem of transportation between trajectories of Markov processes. Given a limited number of trajectories from source distribution and the target distribution, we formulate a flow matching based algorithm which learns a transport map from the source to target trajectory distribution, while preserving the Markov structure. We show that this is consistent in the population limit and derive finite-sample error bounds under mixing time assumptions, following the analysis of classical statistical problems including regression (Nagaraj et al., 2020), principal component analysis (Kumar and Sarkar, 2023), and matrix concentration (Neeman et al., 2024) in the Markov setting. We complement that with a lower-bound construction showing that a mixing-time dependent sample complexity is unavoidable even with regular Gaussian conditional transitions. We evaluate on synthetic and real-world data. For image retrieval from electroencephalography (EEG) on THINGS-EEG2 (Gifford et al., 2022), the task is to identify the viewed image from EEG signals captured from human subjects, which suffers from high inter subject variability. We augment the ENIGMA decoder (Kneeland et al., 2026) with a conditional flow before its subject-specific temporal map. This improves mean top-5 retrieval accuracy from 43.87% to 49.05%, an 11.82% relative improvement.
