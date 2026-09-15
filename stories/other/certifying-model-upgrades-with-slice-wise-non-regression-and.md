---
title: "Certifying Model Upgrades with Slice-Wise Non-Regression and Incumbent Fallback"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13714"
authors: ["Shengwei Zhang, Tao Wu, Fei Qian"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13714v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13714v1 Announce Type: new Abstract: An updated model can improve an aggregate metric while degrading a slice that matters to a downstream user. We study checkpoint selection subject to non-regression tolerances relative to a retained incumbent. The central distinction is between failing to detect harm and certifying non-inferiority: the former can release harmful updates with high probability when evaluation is noisy. We give a reproducible release procedure that separates candidate search from independent, paired evaluation and returns the exact incumbent when certification fails. Applying established intersection-union and Learn-then-Test principles, we state finite-sample guarantees for one frozen candidate, a finite candidate library, and a prespecified testing order. A joint release decision does not require a slice-count Bonferroni penalty, although certification power can still decrease with the number of slices. In bounded-score simulations, a no-detected-harm gate releases a harmful candidate in 99.7% of trials in one 32-slice setting, compared with 2.6% for an exact non-inferiority gate at a 5% target. A constructed two-block family yields larger certified utility than a scalar path under matched candidate counts. Public digits experiments, including a subsequent continuation that improves average aggregate accuracy, return the incumbent in every run because certification is underpowered. These results establish an auditable protocol and its limitations; they do not establish benefits on foundation-model or multilingual translation upgrades.
