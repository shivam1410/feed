---
title: "PixelDense: Dense Prediction as Representation Alignment for Pixel Diffusion"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.00483"
authors: ["Lehan Yang", "Daiqing Qi", "Wenhao Zhang", "Avery Li", "Yiqing Yang", "Yifan Li", "Yu Kong", "Haitian Zheng", "Zhifei Zhang", "Zhe Lin", "Varun Jampani", "Sheng Li"]
date: "2026-09-29T20:00:00.000Z"
score: 62
guid: "2610.00483"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.00483.png"
generated: "2026-10-02T21:40:09+05:30"
---

Representation alignment (REPA) accelerates diffusion transformer training, but its alignment targets are almost exclusively semantic encoders such as DINOv2 and CLIP. Recent analysis points to spatial structure, not global semantics, as the carrier of the alignment effect, yet dense-prediction foundation models trained to predict that structure remain overlooked as REPA targets. In pixel-space diffusion, SAM2, Depth Anything v2, and Metric3D v2 each outperform the DINOv2-only GenEval baseline, with the two geometric teachers leading the segmentation teacher. A flat sum of all four teachers, however, lands below the best single geometric teacher, as semantic and geometric gradients compete for one denoiser projection. We introduce PixelDense, which routes DINOv2 and SAM2 through a semantic projection stream, routes Depth Anything v2 and Metric3D v2 through a geometric projection stream, and adds a weight-space orthogonality penalty that keeps the two streams in disjoint subspaces. All four teachers are frozen during training and dropped at inference. Applied to PixelGen and DeCo with a single recipe, PixelDense improves GenEval, DPG-Bench, and HPS v2.1, raises PixelGen-XXL's GenEval Overall from 0.7927 to 0.8093, and beats every single-teacher and unfactored multi-teacher variant. In partial-noise reconstruction, independent panoptic, depth, and surface-normal probes show up to 53.1% PQ gain and 36.0% depth AbsRel reduction at τ=0.5 across COCO and Flickr30K. From random initialization, PixelDense also reaches the baseline's peak GenEval 1.23x faster. In SDEdit editing on PIE-Bench, PixelDense keeps more of the source background and layout at every edit strength, raising background PSNR by up to 2.2 dB.
