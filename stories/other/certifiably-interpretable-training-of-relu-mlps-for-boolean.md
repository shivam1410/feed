---
title: "Certifiably Interpretable Training of ReLU-MLPs for Boolean Tasks with Guaranteed Truth-Table Generalization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13439"
authors: ["Hrad Ghoukasian, Anastasis Kratsios"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13439v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13439v1 Announce Type: new Abstract: As compute scales, models evolve, and training algorithms advance, our ability to explain the increasingly powerful AI systems they enable is eroding. To help safeguard interpretability, we introduce a specialized training algorithm (MACCHIATO) that jointly constructs (i) an explicitly structured $\operatorname{ReLU}$-MLP from partial truth-table observations and (ii) an explicit Boolean circuit over signed literals with $\{\operatorname{AND},\operatorname{OR},\operatorname{XOR}\}$ gates certifying what its subnetworks compute and how they compose. Intuitively, we iteratively project the residuals of a Boolean function onto low-dimensional $\{\operatorname{AND},\operatorname{OR},\operatorname{XOR}\}$-circuit classes and exactly compile the resulting circuit into a $\operatorname{ReLU}$-MLP; we combine $\operatorname{ReLU}$-MLP circuit compilation, ESPRESSO logic minimization, and influence-based variable selection. Roughly speaking, our interpretability certificate is complemented by a statistical guarantee: under the theorem's influence-recovery conditions, if each of the $m$ stage-wise residuals depends on at most $\log_2(B)$ bits, a sample-splitting variant of our algorithm trained on $T$ observations returns a six-layer $\operatorname{ReLU}$-MLP (counting the input layer) of width $\mathcal{O}(mB)$ with truth-table error $\mathcal{O}\bigl(\sqrt{m(B+\log(m/\delta))/T}\bigr)$. On synthetic random-junta tasks, our networks outperform depth- and hidden-width-matched Adam-trained MLPs in several data-sparse or projection-aligned regimes, while the trained ReLU-MLPs are stronger in others. Moreover, in our explicit PyEDA truth-table implementation, the iterative procedure completes in regimes where flat ambient-dimensional ESPRESSO exceeds the three-hour computational budget.
