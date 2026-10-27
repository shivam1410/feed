---
title: "Sharp Bounds on the Winner's Bias under Independent and Nonnegatively Correlated Noise"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31948"
authors: ["Ivan Viakhirev, Kirill Borodin, Grach Mkrtchian"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31948v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Reporting the best of $M$ noisy, unbiased scores overstates the winner's value by up to $c\sqrt{V}$, where $V$ is the total noise variance and the sharp constant $c$ depends on how the noise is dependent. It was known only at the two extremes, arbitrary dependence ($\sqrt{(M-1)/M}$) and i.i.d. noise. We determine it for two classes in between: for independent, not identically distributed noise it is $\sqrt{(M-1)/(2M)}$, and for pairwise nonnegatively correlated noise it is $(M-1)/M$; for uncorrelated noise this answers the maximum version of an open question about the expected range. Explicit finite constructions attain both. As a corollary, the bias of the cross-validation estimator is bounded sharply within each class. All theorems are formally verified in Lean 4. Across 448 language-model and classifier selection pipelines, designs with per-candidate items realize a median 0.75 of the independent-class ceiling. At a fixed item budget, scoring all candidates on shared items is markedly less optimistic than giving each candidate its own items.
