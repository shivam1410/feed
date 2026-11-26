---
title: "Can an Agent Trust Its Own Zoom? Cross-Magnification Provenance Verification for Whole-Slide Images"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.29150"
authors: ["Yan Wang", "Yiran Song", "Zizhuo Gong", "Jianxiang Qi", "Zhongxing Xu", "Lingfei Qian", "Minquan Lin"]
date: "2026-11-21T19:00:00.000Z"
score: 35
guid: "2611.29150"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.29150.png"
generated: "2026-11-26T13:13:26+05:30"
---

Visual agents navigate whole-slide images through magnified observations associated with claimed locations. However, a visually plausible observation does not necessarily originate from its claimed location, particularly across magnifications and in regions with similar tissue structures. We formulate cross-magnification provenance verification (CMPV) to evaluate whether visual evidence supports a claimed spatial association, recover the source when possible, and abstain when evidence is insufficient. We introduce PyraFault, a benchmark of 3.06 million coordinate-supervised examples from 2,200 cases across five TCGA cohorts, covering within-context substitutions, absent-source faults, and geometric perturbations. We further propose ZoomTrace, a claim-independent verifier that estimates the observation's source before evaluating its agreement with the claimed location. It combines physical-scale alignment, visual retrieval, geometric refinement, and reliability estimation using spatially disjoint competing matches. On 503,320 test examples, ZoomTrace achieves 0.969 AUPRC and 0.987 AUROC, compared with 0.789 and 0.903 for Efficient LoFTR. Further evaluations reveal trade-offs in reliability estimation and limitations in vision-language models, cross-dataset retrieval, and calibration. Integrating ZoomTrace into visual agent tool paths reduces exposure to corrupted observations and silent failures, while downstream accuracy improvements depend on the agent and verification threshold.
