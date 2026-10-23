---
title: "Towards Faithful Data Selection: Statistical Limits and Scalable Algorithms"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30442"
authors: ["Ahmed Mehdi Inane, Mahdi Haghifam, Gintare Karolina Dziugaite, Ioannis Mitliagkas"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.30442v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

What does it mean to have an optimal data selection algorithm? Optimality is conventionally framed as finding a subset that minimizes the population error of the classifier trained only on that subset. Our starting point in this work is first to show that this goal is information-theoretically impossible unless the data selection algorithm has access to a validation set order-wise larger than the training set. This impossibility result motivates shifting from unverifiable population risk minimization to a one-sided guarantee that we refer to as faithfulness: for any candidate subset, we provide an estimable proxy that upper-bounds the difference between training on the full training data and on only the subset. We model training with the Unadjusted Langevin Algorithm and bound the Kullback--Leibler divergence between subset-trained and full-data-trained parameter distributions by the trajectory-accumulated gradient discrepancy. Minimizing this discrepancy gives a principled way to select a subset. Even though the resulting problem is NP-hard, we propose a swap-based local search that decreases the bound at every accepted step. It can therefore refine the output of any selector without worsening its bound. Finally, we provide experimental results on CIFAR10 and CIFAR100 showing that it matches existing data selection baselines. Implementation of our algorithm and the code for reproducing the results are available at: https://github.com/Mehdi-Inane/data_selection_swap.
