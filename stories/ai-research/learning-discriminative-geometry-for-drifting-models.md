---
title: "Learning Discriminative Geometry for Drifting Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04703"
authors: ["Doudou Zhang", "Wenwen Hou", "Yilin Chen", "Qi Chen"]
date: "2026-10-02T20:00:00.000Z"
score: 40
guid: "2610.04703"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04703.png"
generated: "2026-10-07T19:11:01+05:30"
---

Recently proposed Drifting Models shift iterative distribution refinement from inference to training, enabling effective one-step generation. However, their performance on complex image datasets depends strongly on the representation used to construct the drifting field: pixel-space drifting performs poorly, whereas pretrained feature spaces substantially improve sample quality for reasons that remain unclear. We trace this gap to the discriminative geometry of the representation, which determines sample weighting in kernel density estimation (KDE) and, consequently drift. We introduce persistent representation learning, which continuously learns a more discriminative representation geometry as the generator evolves across batches. We further establish a current-step gradient equivalence between the KDE ratio loss and drift regression loss under matched conditions, connecting density-ratio-based generator optimization to empirical drifting and motivating direct control of the drifting velocity. Across multiple datasets, our method learns effective discriminative representations directly from pixels and reduces FID by approximately 82-95% over the original pixel-space Drifting Models, without pretrained encoders. Adapting pretrained representations and applying velocity clipping provide further gains.
