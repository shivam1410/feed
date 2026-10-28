---
title: "From Slices to Volumes: Comparing 2D, 2.5D, and 3D Residual Networks for Pulmonary Nodule Malignancy-Risk Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35960"
authors: ["Bahodir Nazarov, Zineb Gharib, Fatima Zazoul"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35960v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Purpose: To compare 2D, 2.5D, and 3D residual networks for pulmonary nodule malignancy-risk classification and evaluate momentum-contrast pretraining, mild augmentation, and exclusion of indeterminate ratings. Methods: A retrospectively prepared LIDC-IDRI cohort contained 2,654 nodules labeled benign, indeterminate, or malignant using median radiologist ratings. Patient-disjoint splits comprised 1,876 training, 382 validation, and 396 test nodules. Representations included one axial slice, five neighboring slices, and a local CT volume. Each track evaluated a randomly initialized baseline, momentum-contrast pretraining followed by fine-tuning, and supervised training with mild augmentation. Checkpoints were selected by validation Macro-F1. The 2D experiments used three seeds; 2.5D and 3D results were single-run estimates. A separate binary experiment excluded indeterminate nodules. Results: Augmented models achieved test Macro-F1 values of $0.6134\pm0.0075$ for 2D, $0.6537$ for 2.5D, and $0.5403$ for 3D; the 2D uncertainty denotes population standard deviation across seeds. Corresponding accuracies were $0.6128$, $0.6869$, and $0.5455$. Augmentation improved Macro-F1 within every track, whereas the tested pretraining recipes reduced it. Binary Macro-F1 values were $0.8227$, $0.8664$, and $0.7554$, respectively. Conclusion: Augmented 2.5D achieved the highest observed performance. Differences in preprocessing, optimization, capacity, and replication limit attribution to dimensionality. Labels reflect radiologist-assessed malignancy risk rather than pathology-confirmed cancer. Code and experimental results are available at https://github.com/CT-DeepLearning-Team/CT-2D-2.5D-3D-DeepLearning.
