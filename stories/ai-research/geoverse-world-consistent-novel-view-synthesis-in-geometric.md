---
title: "GeoVerse: World-Consistent Novel View Synthesis in Geometric Latent Space"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35734"
authors: ["Kerui Ren", "Tao Lu", "Linning Xu", "Changjian Jiang", "Mu Huang", "Chunhua Shen", "Mulin Yu", "Bo Dai"]
date: "2026-09-27T20:00:00.000Z"
score: 62
guid: "2609.35734"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35734.png"
generated: "2026-09-29T19:09:35+05:30"
---

Novel view synthesis from sparse images must reconcile faithful reconstruction of observed regions with plausible completion of unseen content, while maintaining world consistency across viewpoints. Existing geometry-based methods preserve observed scene structure but often struggle to complete unseen regions, whereas video generative models offer rich appearance priors but accumulate inconsistencies during sequential view generation. We propose GeoVerse, a framework that synthesizes world-consistent novel views by performing generation within the geometric latent space of a pretrained 3D foundation model and injecting appearance priors from a video generative model. Specifically, GeoVerse extracts multilevel features from Wan2.2 VACE and injects them into the geometric latent diffusion model via a ControlNet-style adapter, incorporating video-learned appearance priors to enhance structural completion. To enforce cross-view coherence, a global spatial memory continuously aggregates observed and synthesized content, reprojecting target-aligned guidance to anchor subsequent predictions to a shared scene representation. Extensive experiments across diverse datasets demonstrate improved visual quality and geometric consistency, with a 2.23 dB higher PSNR on DL3DV and 32.4% lower ATE on Mip-NeRF360 compared to GLD.
