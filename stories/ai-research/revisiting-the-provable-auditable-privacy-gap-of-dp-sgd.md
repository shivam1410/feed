---
title: "Revisiting the Provable-Auditable Privacy Gap of DP-SGD"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28934"
authors: ["Saloni Modi, Srivi Balaji, Yusong Zhu, Gautam Kamath, Kevin Tian"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.28934v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28934v1 Announce Type: new Abstract: Differential privacy (DP) has traditionally been used to provide theoretical upper bounds on an algorithm's stability to changing its training data. In modern private machine learning applications, achieving strong tradeoffs between utility and theoretical privacy is challenging, and thus one may optimistically hope that existing theoretical privacy analyses are loose. Recent work on privacy auditing has adopted a dual viewpoint, instead lower bounding the true privacy of an algorithm by constructing empirical distinguishing events. The auditing literature has thus far yielded a pessimistic outlook on the looseness of theoretical privacy bounds for DP-SGD, the de facto private training method in modern ML, as nearly-matching empirical lower bounds have been achieved under various threat models [NHSBTJCT23, AC24, CBP25]. In this work, we propose the empirical privacy lower bound of an algorithm as a concrete metric to optimize for, complementary to the theoretical upper bound. We give a lightweight defense framework that generically augments optimization methods in the ML pipeline to have significantly-improved empirical privacy on standard benchmarks. Moreover, we show that our framework comes at no theoretical privacy cost when augmenting DP-SGD, unlike previously-proposed defenses against membership inference attacks. We evaluate our defense against a broad range of audit constructions, models, and datasets to demonstrate its flexibility.
