---
title: "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16540"
authors: ["William L. Tong, Aryo Lotfi, Emmanuel Abbe, Kostas Vaggelakos, Vishnu Banna, Etai Littwin, Josh Susskind, Cengiz Pehlevan, Eran Malach"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16540v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16540v1 Announce Type: new Abstract: State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent networks. Specifically, we show through theory and experiments that this gating mechanism causes SSMs to first learn an in-weights "memorization" solution, while delaying, or even preventing, convergence to a correct in-context learning solution. Importantly, this happens even in cases where there are no fundamental limitations due to the architecture or its memory capacity. On the other hand, we find that gating is often beneficial for improving generalization to long sequence lengths. Our results illuminate the crucial role of the gating mechanism in shaping both the training dynamics and generalization of SSMs, and provide a basis for understanding and improving linear-time models.
