---
title: "Final Checkpoints Are Not Enough: Analyzing Latent Reasoning Faithfulness Along Training Trajectories"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06648"
authors: ["Hengyu Jin, Shu Yang, Di Wang"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.06648v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06648v1 Announce Type: new Abstract: Latent reasoning methods perform multi-step inference entirely in the model's continuous hidden states, promising more compact and efficient reasoning. However, these opaque hidden states raise a question of faithfulness: whether these latent reasoning steps causally drive the final answer. Prior work investigates this question at converged checkpoints and reports several unfaithful behaviors, such as latent reasoning steps that can be replaced without changing the answer, but leaves how these behaviors form during training unexamined. We instead track how faithfulness evolves across saved checkpoints for different latent reasoning paradigms, applying a verifiable counterfactual edit on the input and a noise-ablation activation patch on the latent reasoning steps. We find that (i) at the output level, latent reasoning methods can look similarly unfaithful at convergence under counterfactual edits while following qualitatively divergent trajectories; (ii) at the activation level, the causal contribution of latent reasoning steps to the final answer decays across training for both paradigms, with the examples that flip on the output side in (i) also being the examples on which this contribution decays; and (iii) the activation-level trajectory diverges by answer format, decaying on binary choice and rising on open-ended decoding. These findings highlight that latent reasoning faithfulness depends on training stage and answer format.
