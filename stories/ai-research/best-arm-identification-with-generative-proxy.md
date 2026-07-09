---
title: "Best-Arm Identification with Generative Proxy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06879"
authors: ["Tianyi Ma, Hanzhang Qin, Ruihao Zhu, Jierui Zuo"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.06879v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06879v1 Announce Type: new Abstract: Best-arm identification is a canonical model for data-driven decision-making, but in many applications each reward observation is costly. Motivated by the growing availability of cheap predictions from machine learning and large language models, we study fixed-confidence best-arm identification in which each costly reward pull is paired with a cheap but correlated proxy score. The marginal mean of the proxy can be estimated offline and is treated as known, whereas its correlation $\rho$ with the reward, which governs how much the proxy helps, is unknown and must be learned online in pair with real rewards. We show that a control-variate adjustment turns this model into a heteroscedastic identification problem whose oracle sample complexity improves by residual variance $1-\rho^2$. The central difficulty is that the correlation must be learned from the same costly samples that identification consumes online, and that a plug-in estimate of the residual variance is anti-conservative and can compromise correctness. We propose PROBE (PRoxy OLS for Best-arm Exploration), a phase-elimination algorithm that directly maintains an upper certificate on the residual variance with an ordinary least squares fit, whose exact chi-square law keeps the certificate valid regardless of the unknown correlation. We prove that PROBE is $\delta$-PAC and attains the known-correlation oracle sample complexity up to a constant multiplicative factor and a constant additive calibration cost. The guarantee extends to the $(\epsilon,\delta)$-PAC setting under minimal changes to the algorithm. Numerical experiments on synthetic instances and on an auto-loan pricing replay with large language model and tabular proxies confirm that the sample savings of PROBE scale with the strength of the reward-proxy correlation, exactly as the theory predicts.
