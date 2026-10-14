---
title: "Learning to See through Action: Predictive Curiosity for Robots"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14302"
authors: ["Stelios Zarifis, Panagiotis Filntisis, George Retsinas, Petros Maragos"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14302v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Humans and animals do not learn vision from a fixed set of data: they move, interact, and learn from the visual consequences of their actions. Motivated by this developmental view, we study whether robots can improve visual learning by actively collecting experience through curiosity-driven interaction. We introduce DySCOVER, a self-supervised framework for active robot visual learning. A robot observes RGB frames, learns a visual autoencoder that encodes and reconstructs them, and trains a recurrent world model to predict the next visual latent state conditioned on the current state and action. The agent's policy is trained only with intrinsic rewards: reconstruction error encourages visually novel observations, while the world model's error encourages transitions whose consequences are not yet predictable. This prediction error biases the policy toward more intricate trajectories that enrich the agent's set of experiences with observations beyond those encouraged by visual novelty alone. Our experiments conducted with robotic arms as the embodied agents show that adding predictive curiosity improves the vision model over using visual curiosity alone. Across variations in initial conditions, experience capacity, embodiment, and scene content, adding predictive curiosity consistently improved visual learning. These results show that predictive curiosity can improve active visual learning beyond reconstruction-based curiosity alone.
