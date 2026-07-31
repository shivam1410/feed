---
title: "Looped Transformers with Source-Centered State Evolution"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27656"
authors: ["Bum Jun Kim, Kohei Hayashi, Shunsuke Kamiya, Masanori Koyama, Yusuke Iwasawa, Yutaka Matsuo"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.27656v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27656v1 Announce Type: new Abstract: Looped Transformers create a useful train- and test-time compute axis by reusing the same Transformer block over recurrent depth, increasing effective depth at a fixed parameter count. However, that shared block must then govern an entire trajectory of varying hidden states over trained and extrapolated depths. Furthermore, in additive-injection looped Transformers, an input-conditioned signal is reintroduced at every recurrent step, so applying the shared transition at an input-conditioned reference can still move the hidden state. In this paper, we propose Source-Centered State Evolution (SCSE), which is designed to reconcile input conditioning with reference-preserving shared recurrence. Specifically, SCSE retains input dependence through its learned anchor and initial deviation, allows nonzero deviations to drive recurrent computation while mapping zero deviation to zero, and guarantees exact anchor invariance through its zero-deviation mask. The designated anchor is thereby a one-step fixed point by construction. The zero-deviation forcing bias is the next deviation produced from the anchor itself and vanishes in SCSE, while nonzero deviations remain active and support state-dependent recurrent computation. Our theory shows that the zero-deviation forcing bias is a design degree of freedom whose task effect can be harmful, neutral, or beneficial; SCSE resolves this choice in favor of exact anchor invariance by setting the bias to zero. Across WikiText-2, WikiText-103, direct web-corpus pretraining, held-out web-text transfer, and LAMBADA completion, SCSE improves the controlled recurrent quality frontier. Ablation studies identify the learned anchor and the anchor-coordinate deviation recurrence as the primary contributors to the gain, and a trained-model case study grounds the anchor-response diagnostic in observed recurrent motion.
