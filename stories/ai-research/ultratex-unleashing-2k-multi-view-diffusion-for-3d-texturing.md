---
title: "UltraTex: Unleashing 2K Multi-View Diffusion for 3D Texturing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.23169"
authors: ["Yibo Zhang", "Ze Yuan", "Nan Cao", "Li Zhang", "Yan-Pei Cao", "Yuan-Chen Guo", "Rui Ma"]
date: "2026-09-18T20:00:00.000Z"
score: 60
guid: "2609.23169"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.23169.png"
generated: "2026-09-23T19:07:00+05:30"
---

High-quality texture generation is essential for creating realistic and production-ready 3D assets. Recent multi-view diffusion methods have shown promising results for image-guided 3D texturing, but they are typically constrained to low operating resolutions such as 512 or 768, making it difficult to preserve high-frequency details from high-resolution reference images. Scaling this paradigm to 2048 resolution is computationally prohibitive, as the unified multi-view sequence exceeds 212K tokens and incurs excessive memory and latency. In this paper, we present UltraTex, an efficient end-to-end framework for high-resolution multi-view diffusion-based 3D texturing. Our key observation is that object-centric multi-view renderings contain two major sources of redundancy: background-induced sequence redundancy and sparse token interactions within the foreground. To address them, we introduce Background Token Dropping, which removes background tokens before the DiT backbone, and Block-Sparse Attention, which reduces attention computation over the retained foreground sequence. To enable efficient foreground-only inference while avoiding reconstruction artifacts, we further design Foreground-Aware VAE Decoding to ensure the quality of the final high-resolution views. To satisfy the demanding data requirements of 2K-resolution multi-view diffusion training, we construct G-buffer TexVerse, a large-scale, ultra-high-resolution multi-view rendering dataset covering over 268,000 3D assets. Extensive experiments show that UltraTex generates visually faithful textures with rich fine-grained details, while substantially improving efficiency, achieving 20.6times--91.1times training speedup and 22.3times--74.6times end-to-end inference speedup over the baseline on common samples in our dataset. Code and data is at https://yiboz2001.github.io/UltraTex.
