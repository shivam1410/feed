---
title: "HarmoHOI: Harmonizing Appearance and 3D Motion for Multi-view Hand-Object Interaction Synthesis"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17097"
authors: ["Lingwei Dang", "Juntong Li", "Zonghan Li", "Hongwen Zhang", "Liang An", "Wei Min", "Yebin Liu", "Qingyao Wu"]
date: "2026-07-18T20:00:00.000Z"
score: ""
guid: "2607.17097"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17097.png"
generated: "2026-07-23T04:03:36+05:30"
---

Hand-Object Interaction (HOI) synthesis is a cornerstone for animation production and embodied AI. Despite the strong priors of video foundation models, multi-view consistent HOI synthesis remains challenging due to complex hand motions and occlusions. We present HarmoHOI, a unified diffusion framework that jointly and harmoniously generates synchronized multi-view HOI videos and globally aligned 3D point tracks. Our core insight is that robust multi-view consistency fundamentally requires globally aligned 3D geometry and motion. To this end, we propose a Mixture of Multi-view Diffusion Transformer that co-models RGB videos and 3D point tracks. By representing point tracks as pseudo-videos, we align 3D geometric signals with the 2D latent space of foundation models, thereby minimizing the domain gap and easing adaptation of priors. To further ensure geometry consistency, we introduce Global Motion Aligning Diffusion, which refines coarse point tracks into metric-scale, globally aligned 3D trajectories. HarmoHOI enables on-the-fly co-evolution of 2D appearance and 3D motion during denoising. To overcome the scarcity of multi-view HOI data, we employ a hybrid data curriculum learning strategy that successfully transfers generic priors from single-view data to synchronized multi-view generation. Experimental results show that HarmoHOI achieves state-of-the-art performance in visual quality, motion plausibility, and multi-view geometric consistency. Project page available at https://droliven.github.io/HarmoHOI_project.
