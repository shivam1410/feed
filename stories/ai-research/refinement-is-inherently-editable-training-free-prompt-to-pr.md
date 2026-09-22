---
title: "Refinement Is Inherently Editable: Training-Free Prompt-to-Prompt Image Editing with Generative Refinement Network"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.20633"
authors: ["Yulong Chen", "Ziqian Zhang", "Haoyu Zhang", "Ao He", "Senmao Li", "Kai Wang"]
date: "2026-09-16T20:00:00.000Z"
score: 72
guid: "2609.20633"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.20633.png"
generated: "2026-09-22T19:08:22+05:30"
---

Text-guided image editing must introduce the requested changes while preserving unrelated source content. Diffusion-based editors rely on spatial controls whose inaccuracies can leave edits incomplete or alter unrelated regions. Causal autoregressive editors face a further constraint: their fixed decoding order limits revision of earlier decisions. We introduce RefineEdit, a training-free prompt-to-prompt image editing framework built on a Generative Refinement Network. Our key idea is to couple edit localization with content generation through the global refinement of binary image codes, allowing editing evidence to be reassessed as the image evolves. RefineEdit initializes an editing branch from an intermediate source state, reusing the emerging layout. We compare the probabilities assigned by the two branches to the same source-sampled bits, using their signed differences to select editable positions and bits. Selected bits follow editing refinement, while the remaining bits copy the evolving source state. To stabilize editing across refinement steps, adaptive spatial freezing limits unnecessary mask expansion, while finite bit locking keeps recently selected bits editable. The framework requires no additional training, external masks, or attention control. Across nine editing categories of PIE-Bench, RefineEdit achieves the best background-preservation scores in PSNR, LPIPS, MSE and SSIM, together with the highest whole-image and edited-region CLIP scores among the evaluated methods.
