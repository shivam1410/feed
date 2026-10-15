---
title: "Adaptive Computation with Conformal Certification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19189"
authors: ["Shehtab Zaman, Aneesh Rangnekar, Nancy Lee, Harini Veeraraghavan"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19189v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Scientific imaging data involving medical (e.g., 3D radiographic, microscopic images) and astronomical sensors pose different challenges from natural images. One key challenge is that these datasets are often orders of magnitude larger than natural images. Efficient training and inference on such data is challenging due to the increased hardware requirements, often needing bespoke solutions. Moreover, the relevant objects such as tumors and astronomical phenomena are sparsely distributed with respect to the background information. Standard efficiency techniques like quantization and pruning apply uniform scaling of all regions, potentially compromising the precision/fidelity of predictions. Thus, efficient methods that reduce computational requirements without losing resolution for relevant parts of the data and with uncertainty estimates on predictions are essential. We present \textit{Conformal Adaptation} with risk guarantees for uncertainty-aware sparse computations. Our formalism is general, spanning dense pixel-level classification and regression tasks where hierarchical models predict at low resolution, certify the signal using conformal risk control, and refine the certified predictions. We benchmark our method on multiple tasks such as 3D medical image segmentation, 2D galaxy flux prediction, and 1D calcium spike rate prediction, achieving $2.5$--$72\times$ wall-clock speedup across the various tasks, including on commodity CPUs.
