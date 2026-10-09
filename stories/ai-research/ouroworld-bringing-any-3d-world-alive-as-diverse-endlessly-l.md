---
title: "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12461"
authors: ["You-Zhe Xie", "Ting-Wei Chou", "Yu-Hsuan Li", "Kaipeng Zhang", "Zhixiang Wang", "Yu-Lun Liu"]
date: "2026-10-07T20:00:00.000Z"
score: 48
guid: "2610.12461"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12461.png"
generated: "2026-10-10T00:52:03+05:30"
---

Recent 3D world models generate photorealistic, explorable scenes that remain frozen in time. OuroWorld is a mask-free framework that turns any static 3D Gaussian Splatting scene into a 3D cinemagraph: a dynamic scene with vivid, diverse motion looping seamlessly from any viewpoint. A vision-language model infers plausible dynamics and guides a video model to synthesize a reference video, which we lift and complete into multi-view videos. To learn from this imperfect supervision, we propose Inconsistency-Robust Periodic 4DGS: a Fourier-series deformation field guarantees looping by construction, while a Grounded Drift Field anchored at the reference view absorbs cross-view inconsistency. Unlike prior Eulerian methods limited to fluid-like motion, we capture general deformation, object motion, and illumination change. We introduce a ground-truth-free evaluation covering vividness, naturalness, loop seam coherence, and scene quality. On 39 reconstructed and generated scenes, OuroWorld outperforms all baselines and wins 70.8%-99.0% of user-study comparisons. Project page: https://ouroworld.userwei.com
