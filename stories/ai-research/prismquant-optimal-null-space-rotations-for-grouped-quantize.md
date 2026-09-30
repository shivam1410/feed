---
title: "PrismQuant: Optimal Null-Space Rotations for Grouped Quantizers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32429"
authors: ["Yanlong Chen", "Yining Chen", "Song Zhang", "Amirhossein Habibian", "Yawei Li"]
date: "2026-09-25T20:00:00.000Z"
score: 22
guid: "2609.32429"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32429.png"
generated: "2026-09-30T19:08:55+05:30"
---

Smaller activation outliers do not necessarily imply better low-bit quantization: their alignment with the quantizer matters. We introduce PrismQuant, a quantizer-aware rotation framework that aligns the leading activation eigenspace with the constant group subspace of asymmetric grouped INT4. The affine offsets represent the energy in this subspace without widening the range within the group. We formulate rotation design as a Ky Fan trace maximization and derive a closed-form solution that is provably optimal for this alignment objective. Compact Householder transformations and their compact-WY representation enable gradient-free construction and efficient application at both foldable and online sites. A predictive range law further connects unaligned activation energy and group size to quantization-relevant variation. Experiments on Llama, Qwen, and Mistral span dense models up to 70B parameters and a 30B mixture-of-experts model. Under W4A4KV4, PrismQuant sets the state of the art on Llama-3.2-3B among the compared methods in both perplexity and accuracy. On Llama-3.1-70B, it attains 3.85 perplexity and 72.46% average zero-shot accuracy, only 0.22 percentage points below full precision. In the deployment study on Llama-3.1-8B, our optimized implementation achieves 1.51x prefill and 1.22x CUDA Graph decode speedups over matched FP16 baselines, with 56.34% lower decode peak memory and only 2.35% additional Graph decode latency over Hadamard. Code is available at https://github.com/ForeverBlue816/PrismQuant.
