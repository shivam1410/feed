---
title: "PALM: Point-in-Time Adaptation for Financial Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30316"
authors: ["Seunghan Lee, Jun Seo, Jaehoon Lee, Junhyeok Kang, Sangjun Han, Sungdong Yoo, Minjae Kim, Tae Yoon Lim, Dongwan Kang, Hwanil Choi, Soonyoung Lee, Wonbin Ahn"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.30316v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Language models used in financial backtests suffer from look-ahead bias, as a model trained on text published after the study period has already observed the outcomes it is asked to predict. To handle this issue, point-in-time (PIT) language models are pretrained on chronologically filtered corpora and released as one checkpoint per calendar year, each with a documented cutoff. However, each additional year costs a full pretraining run, and whether that run is necessary has never been tested. In this paper, we show that the annual pretraining run is not necessary. We instead compare each checkpoint against the newer one that replaced it, and find that the newer checkpoint scores no better on the same evaluation window. Motivated by this observation, we propose PALM (Point-in-time Adaptation for financial Language Models), a simple yet effective alternative to annual pretraining that fits a low-rank adapter on text published before the decision date without modifying any pretrained weight. We further find that a small adapter is enough to add a new period to the knowledge an old checkpoint already encodes, and that this outperforms continued pretraining. We validate PALM on a decade of financial news and on various families of PIT models, whose cutoffs span two decades and whose sizes range from 1.3 to 4.2B. Code is available at: https://github.com/seunghan96/palm.
