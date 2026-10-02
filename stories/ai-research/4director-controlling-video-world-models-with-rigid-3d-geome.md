---
title: "4Director: Controlling Video World Models with Rigid 3D Geometry"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02160"
authors: ["Wei Cao", "Hao Zhang", "Vikram Voleti", "Yuqun Wu", "Mallikarjun B R", "Shimon Vainer", "Mark Boss", "Yaoyao Liu"]
date: "2026-09-30T20:00:00.000Z"
score: 65
guid: "2610.02160"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02160.png"
generated: "2026-10-02T21:40:09+05:30"
---

Precise control over camera and object motion is essential for professional video production. Existing methods control objects only coarsely, through image-plane cues that are ambiguous in depth and rotation or through 3D tracks and blobs that lack complete geometry and lose consistency across viewpoint changes. We introduce 4Director, a video world model conditioned on an explicit 4D scene representation: each object is reconstructed once from the input image as a canonical mesh and moved by one prescribed rigid transformation per frame. This representation provides an intuitive 3D control interface and prevents unobserved geometry from being regenerated independently in every frame. We render the controlled scene as a depth video and introduce a Motion Adapter that transforms this geometric scaffold into video while synthesizing view-consistent appearance, illumination, and non-rigid dynamics. For training, we construct RealCOD-Rigid, a new dataset of 20,774 clips annotated with rigid 3D scenes by our automatic pipeline. We further introduce Identity-Gated IoU (IG-IoU), which jointly evaluates adherence to prescribed object motion and preservation of object identity. Experiments demonstrate that 4Director consistently outperforms prior methods in visual quality and in camera and object control.
