---
title: "Distilled Continuous Diffusion Language Models Can Write Code in Few Steps---or One"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04531"
authors: ["Fred Zhangzhi Peng, Kaiwen Zheng, Anru R. Zhang"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.04531v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04531v1 Announce Type: new Abstract: Language generation is almost universally treated as a sequential process: autoregressive models emit one token at a time, while diffusion language models replace token-level seriality with a long trajectory of iterative refinement. In this work, we introduce PlaidQ, a 0.7B continuous diffusion language model for code generation, and show that its trajectory can be aggressively distilled into only a few denoising steps---or even one, enabling efficient code generation. PlaidQ repurposes a pretrained autoregressive model as a bidirectional denoiser over continuous token embeddings. We distill PlaidQ with distribution matching for few-step generation and paired-trajectory supervision for one-step generation. At matched model scale, PlaidQ is competitive with discrete diffusion language models on code generation. Distillation then shifts the quality--compute frontier: a 16-step student reaches 31.78 and 40.49 pass@10 on HumanEval and MBPP+, surpassing the same PlaidQ teacher sampled for 512 steps. At the extreme, paired-trajectory distillation achieves 7.07 pass@1 on HumanEval with a single denoising step, producing functionally correct programs. Together, these results establish continuous diffusion as a viable path to few-step and one-step code generation. Broadly, continuous diffusion is not merely another representation for language: it provides an interface through which language models can inherit the acceleration and distillation machinery of continuous diffusion modeling. Training and inference code and model checkpoints are available at https://github.com/pengzhangzhi/plaidq.
