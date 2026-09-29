---
title: "TT-VidT: Decoupling the Temporal Axis for Efficient Motion-Centric Video Pretraining"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33419"
authors: ["Shih-Ying Yeh", "Daniel Z. Kaplan", "Xuehai Wang", "Fu-En Yang", "Min-Hung Chen", "Shang-Hong Lai"]
date: "2026-09-26T20:00:00.000Z"
score: 62
guid: "2609.33419"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33419.png"
generated: "2026-09-29T19:09:35+05:30"
---

Comparisons in video self-supervised learning often evaluate complete training recipes rather than isolating the method itself: architecture, objective, data exposure, schedule, scale, and decoder capacity can all vary at once. This makes it hard to identify which choices yield motion-prioritized representations, whose gains concentrate on frame-to-frame change while retaining useful appearance. We address this with a matched 4 times 6 = 24 architecture-objective study at roughly 170M ~ 190M encoder scale on sim1.7M OpenVid and Moments-in-Time v2 clips for 8 epochs, and propose TT-VidT. TT-VidT combines a DINOv3-initialized ViT-B/16 per-frame spatial path with a compact Temporal Transfer Layer, trained by Diff Compression to reconstruct target frames from a first-frame appearance anchor and frame-specific motion tokens. The sweep shows that TT3D with Diff Compression, not either component alone, enters the strongest motion-sensitive regime, and decoder ablations favor a compact video-pretrained decoder. In final comparison, TT-VidT leads Jester, Something-Something V2, ARID, and Diving48 fine-tuning simultaneously, improving over the strongest non-TT row by 54% ~ 121%, while using 48% fewer encoder FLOPs than DisMo and 55% fewer than VideoMAE or V-JEPA2. HMDB51, IARD, and EPIC-Kitchens bound the claim.
