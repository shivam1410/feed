---
title: "In-Flight KV Cache with Clean Anchors for Faster Autoregressive Video Diffusion"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32540"
authors: ["Yikai Wang", "Xiao Han", "Mengmeng Xu", "Juan Camilo Perez", "Yiannis Douratsos", "Sen He", "Zijian Zhou", "Fei Zhang", "Zhaochong An", "Juan-Manuel Perez-Rua", "Chen Change Loy", "Tao Xiang"]
date: "2026-09-25T20:00:00.000Z"
score: 60
guid: "2609.32540"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32540.png"
generated: "2026-09-29T19:09:35+05:30"
---

Few-step autoregressive video diffusion generates a long video by splitting the video into temporal chunks and generating chunk-by-chunk, each through a short sequence of denoising stages. To memorize chunks that are already generated, previous methods reconstruct a clean or less-noisy key--value (KV) cache by additional forwards to build the cache without advancing an output latent. However, every denoising forward itself already computes the in-flight KV of the current chunk. We introduce FlashForward, which directly reuses this cache to avoid the heavy cache-update-only model forwards. After the current chunk completes one denoising stage, its stage-specific cache is already available for the next chunk. Assigning one GPU to each stage therefore lets different chunks occupy different stages concurrently. This early availability has a quality cost: the resulting stage-matched history is noisy, causing appearance and motion drift among chunks. To complement it, FlashForward produces sparse auxiliary clean anchor latents before the corresponding region is generated so the generation trajectories can be stabilized by this two-sided conditioning. The two memories operate at different temporal scales: sparse clean anchor KV supplies coarse, long-range two-sided structural guidance, while dense stage-matched history preserves fine, recent evolution. With up to four GPUs, FlashForward runs 1.16--1.69times faster than HiAR and 1.42--2.92times faster than Self-Forcing for 16 FPS videos of 20 seconds or longer across 1.3B and 14B backbone scales at 480p and 720p. On VBench, for the 1.3B model at 480p, it achieves higher scores and remains stable at longer durations, demonstrating that FlashForward generates high-quality and temporally consistent videos across durations of 20s, 35s and 65s at a much faster generation speed.
