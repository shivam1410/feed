---
title: "On Repulsive and Attractive Teachers: Separating Correctness from Behavior in Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21561"
authors: ["Anton Baumann, Akmal Ashirmatov, Leo Schmidt-Traub, Frederike L\\\"ubeck, Jonas H\\\"ubotter, Thomas Kleine Buening, Andreas Krause"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 59
guid: "oai:arXiv.org:2609.21561v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21561v1 Announce Type: new Abstract: On-policy self-distillation provides dense, token-level supervision by conditioning a model on privileged information and distilling the resulting teacher distribution back into the model. However, privileged information can change not only what the teacher knows, but also how it behaves, entangling correctness-relevant learning signals with unintended behavioral shifts. We study this effect in reasoning tasks by contrasting attractive self-distillation, which moves the model toward a privileged teacher, with repulsive self-distillation, which moves it away from a privileged teacher. We find that both objectives can induce strong and opposing behavioral shifts: attraction suppresses exploratory reasoning and promotes shorter, more confident responses, whereas repulsion increases response length, can trigger unintended switches into a model's latent thinking mode, and ultimately becomes unstable. Motivated by these observations, we study contrastive self-distillation, which combines attraction toward a correct-solution-conditioned teacher with repulsion from an incorrect-solution-conditioned teacher. In contrast to prior work that combines such distillation signals with a GRPO objective, we isolate the self-distillation objective and study its behavior on its own. We find that the shared behavioral shifts of the two teachers largely cancel, leaving a token-level signal that more directly reflects correctness. Across non-thinking, instruct-only, and already-thinking models, this contrastive objective improves reasoning performance while maintaining stable response lengths.
