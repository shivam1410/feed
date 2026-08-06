---
title: "UniWorld-View: Large-Baseline View Synthesis via Video Diffusion Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.04701"
authors: ["Haiyang Zhou", "Wangbo Yu", "Chaoran Feng", "Xunyu Zhou", "Yonghong Tian", "Li Yuan"]
date: "2026-08-04T20:00:00.000Z"
score: 65
guid: "2608.04701"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.04701.png"
generated: "2026-08-06T19:05:18+05:30"
---

The abundance of casually captured monocular videos and images on social media provides a valuable source for immersive content creation, where generating novel views from such sparse observations can greatly enhance user experiences. However, producing photorealistic and geometrically consistent views with precise camera control remains challenging when input coverage is extremely limited. Reconstruction-based approaches such as NeRF and 3D Gaussian Splatting (3DGS) deteriorate severely under sparse inputs and fail to explicitly handle occlusions. Generative methods ease data requirements but still struggle with large-baseline view synthesis due to inaccurate or implicit geometric guidance. To overcome these limitations, we introduce UniWorld-View, a unified framework for controllable large-baseline novel view synthesis from monocular inputs. UniWorld-View integrates explicit 3D guidance with generative diffusion modeling to enable precise camera control and geometrically consistent view generation. The geometric guidance is obtained through an occlusion-aware point cloud rendering strategy that resolves visibility ambiguities and provides accurate priors for diffusion-based synthesis. By coupling this rendering strategy with powerful video diffusion backbones, UniWorld-View achieves high-fidelity novel view generation even under extreme camera motions and wide-baseline changes, and can further provide multi-view videos for downstream dynamic 3DGS reconstruction. Experiments on the WorldScore benchmark and zero-shot NVS benchmarks demonstrate the effectiveness of UniWorld-View in controllability, geometric consistency, and visual fidelity.
