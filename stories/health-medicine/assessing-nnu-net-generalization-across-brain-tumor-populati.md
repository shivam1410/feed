---
title: "Assessing nnU-Net Generalization across Brain Tumor Populations in BraTS-GoAT 2026"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15524"
authors: ["Tristan Kirscher", "Vivian Metzger", "Philippe Meyer", "Xavier Coubez"]
date: "2026-09-13T20:00:00.000Z"
score: 65
guid: "2609.15524"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15524.png"
generated: "2026-09-19T19:06:02+05:30"
---

BraTS-GoAT evaluates tumor segmentation across heterogeneous populations. We trained a conventional 3D nnU-Net on 1,351 labeled cases using five-fold cross-validation and 1,000 epochs per fold. The final predictor averaged all folds and applied test-time mirroring. On pooled official validation, global DSC values were 0.7805, 0.8288, and 0.8854 for enhancing tumor (ET), tumor core (TC), and whole tumor (WT). Under matched fold-0 inference, mean regional Dice decreased from 0.9058 on source out-of-fold (OOF) cases to 0.8310 on pooled validation (difference--0.0747). Mirroring gave small single-fold gains but no clear ensemble benefit; a residual-encoder alternative reached 0.8282 mean Dice. In labeled OOF predictions, failure cases had substantially smaller reference ET volumes; after adjustment for ET and WT volume, lower Dice remained associated with more disconnected ET components and a smaller fraction of ET contained in the largest component.
