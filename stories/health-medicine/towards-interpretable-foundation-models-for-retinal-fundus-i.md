---
title: "Towards Interpretable Foundation Models for Retinal Fundus Images"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2603.18846"
authors: ["Samuel Ofosu Mensah", "Camila Roa", "Kerol Djoumessi", "Philipp Berens"]
date: "2026-08-03T20:00:00.000Z"
score: 70
guid: "2603.18846"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2603.18846.png"
generated: "2026-08-10T19:05:52+05:30"
---

Foundation models are used to extract transferable representations from large amounts of unlabeled data, typically via self-supervised learning (SSL). However, many of these models rely on architectures that offer limited interpretability, a critical issue in high-stakes domains such as medical imaging. We propose DualIFM, a foundation model that is interpretable-by-design via a BagNet backbone whose small receptive fields generate class evidence maps that are faithful to the model's decision-making process. Additionally, DualIFM incorporates a 2D projection layer during pretraining that enables direct visualization of the representation space, providing a dataset-level view of the learned structure including meaningful clinical clusters as well as potential spurious correlations. We trained DualIFM on over 800,000 color fundus photographs from various sources to learn generalizable representations for different downstream tasks. Our model achieves performance comparable to RETFound, which has 16times more parameters, while providing interpretable predictions on out-of-distribution data. These results suggest that large-scale SSL pretraining paired with inherent interpretability can lead to robust representations for retinal imaging. Code and pretrained models are available at github.com/berenslab/interpretable_FM.
