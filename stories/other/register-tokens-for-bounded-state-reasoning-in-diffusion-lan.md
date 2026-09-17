---
title: "Register Tokens for Bounded-State Reasoning in Diffusion Language Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16372"
authors: ["Albert Ge", "Chandan Singh", "Yufan Zhuang", "Xiaodong Liu", "Jianfeng Gao", "Frederic Sala"]
date: "2026-09-13T20:00:00.000Z"
score: ""
guid: "2609.16372"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16372.png"
generated: "2026-09-17T19:00:24+05:30"
---

Masked diffusion language models (dLLMs) generate text by iteratively denoising masked tokens with bidirectional attention. Extending reasoning across generation chunks normally requires keeping earlier generated text in context. We ask whether a dLLM can instead continue reasoning after that text is cleared, using only a fixed-size carried state. We implement this state as a small number of register tokens: dedicated fixed-position tokens whose continuous hidden states are trained to carry reasoning progress across generation chunks. We post-train dLLMs to decode a chunk of text, clear it while preserving the register values, and continue decoding from the prompt and carried state. In our main comparisons on LLaDA and Dream, registers outperform discrete-text carry on every benchmark, with gains of up to 8.5 points on math and 19.5 points on code. Registers are especially effective for bounded code generation, where correct programs usually span several chunks. Finally, registers can be further refined with reinforcement learning on long-horizon reasoning tasks.
