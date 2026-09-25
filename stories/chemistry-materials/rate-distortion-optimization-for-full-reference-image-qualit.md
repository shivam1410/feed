---
title: "Rate-distortion optimization for full-reference image quality metrics via stochastic Hessian estimates"
category: "Chemistry & Materials"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.30077"
authors: ["Samuel Fernández-Menduiña", "Eduardo Pavez", "Antonio Ortega"]
date: "2026-09-23T20:00:00.000Z"
score: 30
guid: "2609.30077"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.30077.png"
generated: "2026-09-25T23:24:50+05:30"
---

Block-based video codecs select coding parameters based on the input by optimizing a rate-distortion trade-off. The conventional distortion choice, the sum of squared errors (SSE), simplifies parameter selection: the SSE is the sum of block-wise SSEs, so rate-distortion optimization (RDO) can treat blocks independently. Alternatively, full-reference image quality assessment (FR-IQA) metrics such as MS-SSIM or LPIPS often align better with the human visual system than SSE, but they cannot be used in-loop: they do not decompose block-wise and typically require the fully decoded image as input. Building on existing results in metric quadratization, we approximate a broad class of FR-IQA metrics by an input-dependent quadratic distortion (IDQD), whose quadratic form matrix is derived from the Hessian of the metric evaluated at the source video. To make the distortion computable block-wise, we propose two approximations of the Hessian matrix: 1) keeping the block-diagonal, and 2) keeping only its diagonal. We propose estimators for both that require only matrix-vector products with the Hessian obtained by automatic differentiation. Across five metrics for Kodak and CLIC in VVC, IDQD-RDO achieves 14.2-36.7 % BD-rate savings under the target metric with no decoder changes and incurs 10-30 % encoding complexity overhead.
