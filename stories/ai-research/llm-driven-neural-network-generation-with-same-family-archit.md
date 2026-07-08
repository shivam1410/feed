---
title: "LLM-Driven Neural Network Generation with Same-Family Architecture Guidance: Disentangling Transfer and Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05704"
authors: ["Kabir Dev Paul Baghel, Radu Timofte, Dmitry Ignatov"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.05704v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05704v1 Announce Type: new Abstract: Large language models (LLMs) can generate neural-network modifications, but unrestricted generation is often invalid or harmful. This paper studies a narrower setting: improving a weak target model using a stronger same-family source model from a neural-network database. We propose a source-guided candidate-generation protocol with non-source controls, source-conditioned candidates, and a no-LLM hp_copy ablation under equal evaluation budgets. The protocol reports validity separately from accuracy and selects the best valid candidate only when it improves the target. On CIFAR-10, the strongest source-guided candidate reaches 0.5049 accuracy versus 0.2398 for the best non-source candidate, a +0.2651 advantage, while improving a weak target originally at 0.1254; a five-epoch check preserves the gain at 0.7686 versus 0.4839. On SVHN AlexNet with DeepSeek-Coder-6.7B, source-guided transfer reaches 0.7880 versus 0.2254, a +0.5626 advantage; a fresh repeat reaches 0.8069 versus 0.2509, a +0.5560 advantage. Direct source-recipe copy produces 0.1959 on SVHN AlexNet, matching the original target, while hp_transfer reaches 0.7880, showing that the LLM adapts rather than copies the source recipe. Family-level analysis shows the clearest positive signals for AlexNet, with 6/8 wins across SVHN, Imagenette, and CelebA-Gender, and alt_nn1, with 8/10 wins on CIFAR-10.
