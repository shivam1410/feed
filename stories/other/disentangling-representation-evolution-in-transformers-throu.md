---
title: "Disentangling Representation Evolution in Transformers through Directional Decomposition"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15975"
authors: ["Shwai He", "Haichao Zhang", "Shen Yan"]
date: "2026-09-13T20:00:00.000Z"
score: ""
guid: "2609.15975"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15975.png"
generated: "2026-09-16T19:00:23+05:30"
---

Transformer representations evolve through learned additive transformations that either preserve their current direction or redirect it. We study this evolution as a functional geometry, decomposing learned updates into parallel and perpendicular components. Across pretrained models, we find substantial parallel components beyond the residual identity path. We then apply the decomposition in two spaces: to attention and MLP updates relative to the hidden state, and to attention value aggregation relative to the current token's value. Targeted edits reveal a strongly space-dependent asymmetry: exclude-self value-space parallel manipulation is markedly more robust than residual-space and perpendicular counterparts, preserving the direct self message while scaling only the non-self aggregate. The same decomposition gives a component-resolved description of compression-induced update error: perpendicular error separates compression methods more clearly than parallel error. Extensive experiments further demonstrate that full-aggregate parallel suppression during from-scratch pretraining lowers validation-loss trajectories and improves downstream averages, with the value-space variant strongest. Together, these results connect representation geometry to editing robustness, compression diagnosis, and training-time intervention. Code is available in the https://github.com/Shwai-He/Transformer-Geometry{project repository}.
