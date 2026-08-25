---
title: "Bounded Precision-Geometry Scaling for Robust Multi-Task Learning under Loss Scale Mismatch"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21653"
authors: ["Krishna Subedi"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21653v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21653v1 Announce Type: new Abstract: Multi-task learning often combines losses that span several orders of magnitude, causing homoscedastic uncertainty weighting to degrade severely. We propose Bounded Precision-Geometry Scaling (BPGS), a method that maps each task's log-variance through a bounded sigmoid parameterisation anchored to detached batch loss statistics, and decouples network optimisation from uncertainty optimisation. Its normalised task weights are provably invariant to uniform rescaling under non-degenerate loss scales. We evaluate BPGS on synthetic stress tests and three real-world benchmarks: NYUv2 dense prediction, Yeast multi-label classification, and RF1 multi-target regression. Under pure loss rescaling from $\times 1$ to $\times 1000$, its macro score changes from 0.777 to 0.778, whereas Kendall weighting drops from 0.780 to 0.637; $\ell_1$-normalising Kendall's weights does not close the gap. On NYUv2, BPGS records the lowest depth absolute relative error (0.223), depth RMSE (0.790), and total loss (1.891) among all compared methods, including Nash-MTL. Sensitivity studies on batch size and calibration show small variation across the tested ranges, and runtime overhead relative to Kendall is under 1%. BPGS posts the highest Yeast micro-F1 (0.616) and is competitive on RF1, though PCGrad leads RMSE and MAE there. These findings establish BPGS as a scale-robust alternative to homoscedastic uncertainty weighting, notably effective when loss-scale disparities dominate multi-task optimisation.
