---
title: "Entropy Regularization: A Free Correction to Cross-Entropy for Verified Demonstrations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30572"
authors: ["Mihir Dhanakshirur, Adam Ousherovitch, Ambuj Tewari"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.30572v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Large language models are often post-trained on expert demonstrations using cross-entropy (CE), even when the downstream objective is not to imitate the demonstrated solution but to produce any output accepted by a verifier. This mismatch is seen in verifiable domains with multiple correct solutions, such as mathematical reasoning and code generation, where training data may contain only one expert solution per problem. We show that minimizing cross-entropy can be misaligned with minimizing verifier risk; two policies can assign identical likelihood to the observed demonstrations while placing different probability mass on incorrect outputs. This is formalized through a learning-theoretic counterexample in which CE minimization selects a suboptimal policy. We identify that controlling the support of the learned policy can solve this problem by preventing probability mass from spreading to unsupported outputs. Since support size is non-differentiable and computationally intractable, we propose entropy-regularized cross-entropy (ER-CE), using token-level Shannon entropy as a tractable proxy. Finally, across mathematical reasoning and code-generation benchmarks, we find that entropy-regularized training consistently improves verifier accuracy over standard cross-entropy. Our results identify a simple failure mode of imitation-based post-training in verifiable tasks and provide a practical objective that is better aligned with producing correct outputs.
