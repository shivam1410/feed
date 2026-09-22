---
title: "Contrastive World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22175"
authors: ["Bonnie Li"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22175v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22175v1 Announce Type: new Abstract: World models trained via pixel reconstruction can struggle in visually complex environments, where irrelevant information dominates the objective and distract the model from information relevant to planning and control. We present Contrastive World Models, an approach for learning latent dynamics models without pixel reconstruction. Building on Dreamer, we replace observation reconstruction in the standard world model objective with a Deep InfoMax-like lower bound that maximizes the mutual information between state-action sequences and local patch features of future observations, encouraging state representations to retain information that is predictive of the future without requiring the model to reconstruct visually irrelevant details. We evaluate our approach in small-scale experiments across three settings of increasing visual complexity. Our method matches Dreamer and a momentum prediction baseline in the default setting, and substantially outperforms both once distractors or natural video backgrounds are introduced, while also training more efficiently by removing the pixel decoder entirely. Our approach is general and makes minimal assumptions beyond access to state-action sequences and future observations. These results suggest that contrastive, infomax-based objectives are a principled and promising direction for building world models that are robust to visual nuisance factors, a property particularly relevant for transferring model-based RL agents to the real world.
