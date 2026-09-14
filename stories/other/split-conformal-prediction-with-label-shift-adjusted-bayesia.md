---
title: "Split Conformal Prediction with Label-Shift-Adjusted Bayesian Scores"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12386"
authors: ["Hyeonsu Lee, Juyeon Kim, Erkhembayar Jadamba, Seungjin Choi, Hyunjin Shin"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12386v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12386v1 Announce Type: new Abstract: Conformal prediction provides distribution-free uncertainty quantification under exchangeability. However, this assumption is violated by label shift, where the marginal distribution of labels changes while the conditional distribution of inputs given labels remains stable. Under such shifts, standard conformal procedures no longer maintain their intended coverage behavior. Existing approaches address this via importance weighting. They pair the reweighting with residual-based nonconformity scores that ignore predictive uncertainty. The resulting intervals have uniform width. Bayesian conformal methods produce adaptive intervals by leveraging predictive distributions. They evaluate conformity under the source predictive, which is misaligned with the target domain under label shift. We propose the \emph{Label-Shift-Adjusted Bayesian Score} (LSA score), a nonconformity score derived from a posterior predictive tilting identity. This identity shows that the target predictive is an importance-weighted transformation of the source predictive. We use it to derive a direct correction to the Bayesian score. We evaluate the method on molecular property prediction under controlled label shift. The LSA score consistently yields shorter intervals than residual-based and source-based Bayesian scores. Coverage in the target domain remains comparable. Under stronger shift, all methods incur some coverage loss due to pseudo-label-based density-ratio estimation. The LSA score is defined for any source predictive with a tractable log-density. We instantiate it with Bayesian Ridge Regression, where the correction admits a closed form.
