---
title: "SpaceFlow: Locally Controllable 3D Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12399"
authors: ["Neil De La Fuente", "Joan Lafuente", "Mukhammadali Sayfiddinov", "Felicia Scharitzer", "Marc Pollefeys", "Ata Celen", "Sayan Deb Sarkar", "Elisabetta Fedele"]
date: "2026-10-07T20:00:00.000Z"
score: 48
guid: "2610.12399"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12399.png"
generated: "2026-10-10T00:52:03+05:30"
---

Current 3D generation methods lack explicit local control: geometric adherence is often defined by a global control strength, and appearance cannot be specified locally. We present SpaceFlow, a training-free pipeline for locally controllable 3D generation from text descriptions and a collection of geometric primitives. Each primitive serves as a proxy for an object part and is assigned a local control level, enabling users to specify whether regions should strictly follow the input shape or allow generative completion. During structure generation, we enforce these spatial constraints within the generative flow process. For appearance synthesis, the generated structure is segmented and matched to the primitives. Each generated part is conditioned only on its assigned text or image cue, thereby limiting cross-part leakage. Regional geometry metrics demonstrate that SpaceFlow preserves the specified geometry in high-control regions and enables plausible shape variation in low-control areas. A user study further indicates that the resulting balance between geometric fidelity and generative freedom remains competitive in overall quality. When evaluating appearance on fixed geometry, text-conditioned routing achieves state-of-the-art prompt faithfulness and color/material accuracy. Qualitative results additionally show localized routing of image cues. The project page is available at SpaceFlow3D.github.io.
