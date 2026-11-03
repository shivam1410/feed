---
title: "Beyond Blackwell: Constrained Data Processing Inequalities"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00510"
authors: ["Brendan van Rooyen"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 32
guid: "oai:arXiv.org:2611.00510v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

We study the comparison of statistical experiments from a decision-theoretic standpoint, working with Markov transitions as basis-free linear maps on dual spaces. Our starting observation is that the data-processing inequality, that adding noise to an experiment cannot lower its Bayes risk, is the functoriality of fibrewise minimisation over a presheaf of decision rules: the rules available after an experiment form a presheaf, garbling acts on it by precomposition, and a risk functional is a natural transformation from it to the ordered reals. The argument refers to neither probabilities nor expected values, and it survives replacing the decision presheaf by a sub-presheaf of admissible rules. Any constraint imposed on the strategy that a rule induces fairness, unbiasedness, is automatically of this form, and so yields a data-processing inequality with no counterpart in the unconstrained Blackwell theory. Our main result is their quantitative companion. For constraints closed under post-processing we define a constrained deficiency and prove a constrained randomization theorem: one experiment dominates another on every admissible decision problem exactly when the constrained deficiency is small. The classical theorem is the case of no constraint, where the identity is itself an admissible rule; in general it is not, and the constrained deficiency is an optimisation over the coarsenings of an experiment that render it compliant. Specialising to equalized odds, we exhibit a pair of experiments that unconstrained Bayes risk identifies at a given loss and prior but that the constrained risk separates, giving a one-line certificate of Blackwell-incomparability. We work throughout with finite sets.
