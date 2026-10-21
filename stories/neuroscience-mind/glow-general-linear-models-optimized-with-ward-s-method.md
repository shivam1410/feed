---
title: "GLOW: General Linear Models Optimized with Ward's Method"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24085"
authors: ["Matt Higger"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.24085v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Neuroimaging seeks brain regions whose imaging features correlate with variables of interest (e.g., diagnosis, age), usually via the General Linear Model (GLM). Region-Based Analysis dilutes or splits any effect that does not fill exactly one atlas region. Voxel-Based Analysis, with Cluster Extent Thresholding and Threshold-Free Cluster Enhancement built on it, fits a GLM per voxel and groups adjacent significant voxels. But neighboring voxels can share a statistic without sharing a GLM, which a per-voxel statistic cannot detect. GLOW (General Linear Models Optimized with Ward's method) instead builds a hierarchy of nested regions by greedily minimizing GLM error (provably a special case of Ward's clustering). Maximum-statistic (Westfall-Young) permutation controls family-wise error over all regions. Significance spreads to an effect's nested fragments and the regions containing it; a final pruning step seeks whole, pure effect extents. We plant synthetic effects of known extent and varying strength in Human Connectome Project (HCP) diffusion images and in white noise. Pruning delivers wholeness: GLOW returns a spatially consistent effect as one region on 57% of HCP trials, the best baseline on 35%; baselines recover comparable volume, but in many pure pieces. The cost is positive predictive value (PPV): GLOW is more sensitive (by up to 0.29), but its regions overrun the effect, mostly because no hierarchy region isolates it, not because of pruning. On HCP, GLOW's mean Dice gains 0.059 over the best baseline at weaker effects and gives back 0.005 at stronger ones. On white noise, GLOW trails by up to 0.61 Dice: its hierarchy holds the effect, but its permutation test does not certify it. Runtime grows roughly linearly with voxel count, about 4.5 times the voxel-wise methods' on the full HCP volume. The PPV loss may trace to the assumption of spatially independent residuals.
