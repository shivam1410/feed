---
title: "REBASE: Reference-Background Subspace Elimination for Training-Free In-Context Segmentation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.09082"
authors: ["Mantha Sai Gopal", "Jaison Saji Chacko", "Harsh Nandwana", "Sandesh Hegde", "Debarshi Banerjee", "Uma Mahesh"]
date: "2026-07-09T20:00:00.000Z"
score: 64
guid: "2607.09082"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.09082.png"
generated: "2026-07-21T19:05:01+05:30"
---

Training-free in-context segmentation enables new object categories to be introduced at inference time from a single annotated reference image, eliminating the retraining and memory overhead of class-incremental learning. Recent approaches achieve this by combining vision foundation models for semantic correspondence with promptable segmentation networks like SAM. However, their performance is fundamentally limited by the quality of the cross-image similarity map; shared contextual backgrounds between the reference and query systematically elevate similarity in non-target regions, degrading prompt localization. We present REBASE, a training-free framework that explicitly suppresses these spurious contextual correspondences. Our method identifies the low-rank background feature subspace from the reference image and project the reference and query features onto its orthogonal complement in closed form, yielding cleaner semantic matching. We then generate positive point prompts using similarity-weighted farthest-point sampling, paired with a refined dense similarity prior. Without any training or parameter updates, our approach establishes a new state of the art among training-free methods on PACO-Part, FSS-1000, and cross-domain datasets such as ISIC2018, demonstrating that explicit background subspace removal is a highly effective principle for one-shot localization.
