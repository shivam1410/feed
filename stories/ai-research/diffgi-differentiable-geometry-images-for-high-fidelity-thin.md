---
title: "DiffGI: Differentiable Geometry Images for High-Fidelity Thin-Shell 3D Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13365"
authors: ["Eungjune Shim", "Hansol Lee", "Eunjung Ju"]
date: "2026-07-14T20:00:00.000Z"
score: 66
guid: "2607.13365"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13365.png"
generated: "2026-07-21T19:05:01+05:30"
---

Existing 3D generative models predominantly rely on implicit volumetric representations, which enforce watertight topology and struggle to represent thin-shell and non-manifold geometries such as garments. Geometry image-based approaches offer a surface-centric alternative, but existing methods rely on discrete binary occupancy maps whose resolution-dependent boundary encoding causes staircase artifacts and information loss upon downsampling, while surface reconstruction remains a non-differentiable post-processing step disconnected from the learning pipeline. To address this, we propose Differentiable Geometry Image (DiffGI), an end-to-end 3D-to-2D mapping framework that seamlessly integrates surface representation and geometric optimization. DiffGI replaces binary maps with a continuous 2D Truncated Signed Distance Function (TSDF), which encodes boundary position at subpixel precision within a fixed grid resolution, eliminating resolution-dependent staircase artifacts even under aggressive downsampling. Building on this continuous field, we introduce a differentiable Marching Squares algorithm based on analytical linear interpolation, allowing gradients from 3D surface losses to propagate back to the 2D latent space. Leveraging this differentiable pipeline, we train a DiffGI-VAE augmented with a geometry-aware normal rendering loss to compress complex 3D surfaces into an ultra-compact 32X32 latent space, and instantiate a transformer-based latent diffusion model with a flow-matching objective on top of this space for conditional 3D generation. Extensive experiments on garment and object datasets demonstrate that our method achieves superior reconstruction fidelity and boundary precision compared to prior geometry-image and voxel-based approaches, while requiring significantly fewer computational resources.
