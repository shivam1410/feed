---
title: "Contextual Slate GLM Bandits with Limited Adaptivity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31449"
authors: ["Tanmay Goyal, Sukruta Prakash Midigeshi, Gaurav Sinha"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.31449v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31449v1 Announce Type: new Abstract: We investigate the contextual slate bandit problem with generalized linear rewards under limited adaptivity. At each round, the learner is presented with $N$ sets of items, where each item is represented by a $d$-dimensional feature vector. The learner then constructs a slate by selecting one item per set; the resulting slate yields a scalar reward sampled from a Generalized Linear Model (GLM). We propose algorithms under two limited-adaptivity settings: (a) Batched and (b) Rarely-Switching. For the batched setting, we introduce B-SlateGLinCB, which partitions the time horizon into $\mathcal{O}(\log\log T)$ batches such that each batch's policy relies only on data from previous batches. For the rarely-switching setting, we propose RS-SlateGLinCB, which adaptively performs only $\mathcal{O}(Nd\log T)$ parameter updates. Under a diversity assumption on the item sequences, we prove that B-SlateGLinCB and RS-SlateGLinCB achieve regret bounds of $\mathcal{O}(Nd^{3/2}\sqrt{T})$ and $\mathcal{O}(Nd\sqrt{T})$, respectively. Notably, both bounds are independent of the non-linearity parameter $\kappa$ that is typically found to scale the regret of GLM bandit algorithms. Our algorithms are computationally efficient, requiring only $\text{poly}(N)$ time per round despite $2^{\Omega(N)}$ possible slates. Simulations show our algorithms outperform existing baselines with limited adaptivity and remain competitive with Slate-GLM-OFU, a fully adaptive state-of-the-art algorithm. Notably, a slightly modified B-SlateGLinCB empirically matches this baseline. Finally, we demonstrate strong performance in a practical in-context example selection task for language models.
