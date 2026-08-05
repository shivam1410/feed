---
title: "GPTQ-2D: Cubic-Time Two-Sided Adaptive Rounding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27042"
authors: ["Jiale Chen", "Torsten Hoefler", "Dan Alistarh"]
date: "2026-07-28T20:00:00.000Z"
score: 62
guid: "2607.27042"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27042.png"
generated: "2026-08-05T20:00:21+05:30"
---

Adaptive rounding methods such as GPTQ, or equivalently Babai's nearest plane algorithm, round a real matrix to integers under a quadratic metric. They process the entries in a fixed order, one at a time, propagating each rounding error to the entries not yet processed through a triangular feedback matrix. We study the two-sided version of this task, in which fixed nonsingular basis matrices act on both the left and the right of the residual; the familiar one-sided case is the special case of an identity right basis. Vectorizing the matrix turns the two-sided objective into a quadratic metric whose Gram matrix is a Kronecker product, so the one-dimensional algorithm applies verbatim, but takes quartic time in the matrix dimension. We present GPTQ-2D, which produces the identical rounded matrix in cubic time. It rounds the entries anti-diagonal by anti-diagonal; entries on the same anti-diagonal are independent and are rounded in parallel.
