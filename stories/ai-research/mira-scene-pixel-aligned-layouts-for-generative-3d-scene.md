---
title: "Mira-Scene: Pixel-Aligned Layouts for Generative 3D Scene"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.23796"
authors: ["Yang-Tian Sun", "Tianjia Liu", "Zehuan Huang", "Yi-Hua Huang", "Xiaoyang Lyu", "Ziyi Yang", "Zi-Xin Zou", "Yuan-Chen Guo", "Yan-Pei Cao", "Xiaojuan Qi"]
date: "2026-09-19T20:00:00.000Z"
score: 72
guid: "2609.23796"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.23796.png"
generated: "2026-09-22T19:08:22+05:30"
---

Single-image 3D object generation can now produce high-fidelity assets, yet accurately placing them into a coherent scene layout remains an open challenge. A central difficulty lies in how object layout is represented. Holistic methods absorb placement into a scene-level generation process, sacrificing object-level detail. Compositional methods preserve object fidelity by decoupling geometry from layout, but typically parameterize layout as sparse, unbounded pose variables that are difficult to learn and generalize poorly under scarce scene-level supervision.We present Mira-Scene, a compositional 3D scene reconstruction framework that replaces sparse pose regression with dense, bounded correspondence recovery. At its core is the Canonical Coordinate Map (CCM), a pixel-aligned field that maps each visible object pixel to a surface coordinate in the object's bounded canonical space. When paired with a scene-space Point Cloud Map (PCM) from monocular geometry estimation, CCM induces dense canonical-to-scene correspondences from which object transformations are recovered through robust geometric alignment. Because CCM operates in bounded canonical space, it provides a stable prediction target that can be trained from scalable object-level 3D data without requiring scene-level layout annotations. Mira-Scene further introduces a multimodal diffusion transformer that jointly generates object geometry and CCMs, using modality-specific expert streams with shared attention and positional encoding to promote geometry-layout consistency. Experiments on indoor, outdoor, synthetic, and in-the-wild scenes show that Mira-Scene substantially outperforms strong baselines in layout accuracy, achieving relative gains of 39.8% in 3D-IoU and 16.5% in 2D-IoU over SAM3D, using limited open-source training data.
