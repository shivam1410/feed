---
title: "Retroactive Advantage Correction: Closed-Form V-Trace Bias Correction for Delay-Aware RLHF"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27580"
authors: ["Arnav Raj"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27580v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27580v1 Announce Type: new Abstract: Reinforcement learning from human feedback (RLHF) in production does not always have a synchronous reward signal. Code-execution verifiers, slow judge ensembles, and queued human review can return several gradient steps after the rollout that produced them, breaking the synchronous-reward assumption underlying standard PPO. We address this gap with Retroactive Advantage Correction (RAC): each pending slow completion is queued, aged through a non-negative kernel, and reinjected as a clipped residual into the next optimiser step's advantage. We prove that under an unbiased clipped importance ratio, the cumulative RAC correction is exactly unbiased when the effective delay kernel reinjects all of its mass, and carries a bias linear in the unreinjected fraction otherwise; at the no-delay identity kernel it reduces to V-trace. On a tabular Markov decision process (MDP) proof-of-concept, RAC reduces the closed-form policy bias by up to 47.9x at the two-slow-channel configuration, beating wait-for-slow at lower wall-clock cost. RAC integrates with PPO and GRPO through a two-line reward-manager patch.
