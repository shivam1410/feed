---
title: "ARCHead: Activation-Metric Residual Correction for Large Language Model Output Heads"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02703"
authors: ["Şuayp Talha Kocabay", "Talha Rüzgar Akkuş", "Kamer Ali Yuksel"]
date: "2026-08-02T20:00:00.000Z"
score: 60
guid: "2608.02703"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02703.png"
generated: "2026-08-06T19:05:18+05:30"
---

Weight-only quantization substantially reduces the storage of large language model (LLM) transformer blocks, but practical backends often retain the final language-modeling head (LM-head) in BF16 or FP16. Quantizing this projection naively can strongly perturb the vocabulary-logit distribution. We present ARCHead, a packed LM-head compressor that combines a quantized low-rank core, group-wise INT4 residuals, and a low-rank correction fitted in an activation-derived metric. ARCHead stores no dense BF16 head and reduces persistent LM-head storage by 3.7-3.9x. On Qwen3-8B-Base, it uses 25.6% of BF16 head storage while attaining 1.007 relative perplexity; storage-matched naive INT4 yields 1.14-1.16. Replacing the BF16 head left by AWQ or bitsandbytes adds only 0.006-0.007 cross-entropy, with less than 2% throughput change in our measurements. ARCHead therefore complements block quantizers by compressing the large output projection they can leave untouched. Code is available at https://github.com/suayptalha/archead.
