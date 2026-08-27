---
title: "Why and When Neural Networks Improve Local Approximation in Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24963"
authors: ["Chengkuo Bian, Pengcheng Xie"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2608.24963v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.24963v1 Announce Type: new Abstract: Published experience with neural surrogates in derivative-free optimisation is contradictory: the same family of models that cuts the evaluation count of one solver leaves another unchanged, or makes it worse. We show that the contradiction dissolves once three factors are stated, and that these, rather than the fit accuracy a training curve reports, are what delimit when a learned local model pays. Role: a surrogate that proposes candidates the true objective must still approve helps, while one that replaces a gradient the solver depends on hurts. Radius: a model fitted to an optimisation path is reliable only inside a bounded neighbourhood, and its error neither vanishes as that neighbourhood shrinks nor survives its growth. Room: a surrogate can only accelerate progress the base method is still able to make. We formalise radius-aware local generalisation, relate it to the classical fully linear condition, and test each factor with the surrogate class, training pipeline and base method held fixed. Over 117 benchmark instances safeguarded assistance raises the instances solved to high accuracy from 67 to 84 while gradient replacement lowers them to 65; removing the gradient term from the training loss cuts surrogate acceptance from 0.703 to 0.148; and 1000 paired comparisons over ten noise levels show no noise threshold, only a base method that stops early. The same factors bound the gain: a model-based trust-region solver, which leaves little room, drops from 88 to 86 when the identical surrogate is attached, and released interpolation software stays ahead at 103, and on a Monte-Carlo inventory model repairing the acceptance interface is worth 10.40 cost units against 0.00 for the surrogate.
