---
title: "Representation-Space MMD for Diffusion Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06648"
authors: ["Ilya Drobyshevskiy", "Ilia Sudakov", "Maksim Semenov", "Denis Kuznedelev", "Maksim Ignatov", "Pavel Temirchev", "Nikita Balagansky", "Viacheslav Meshchaninov", "Nikita Gushchin", "Dmitry Baranchuk"]
date: "2026-10-04T20:00:00.000Z"
score: 45
guid: "2610.06648"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06648.png"
generated: "2026-10-06T22:55:59+05:30"
---

We introduce a post-training method for diffusion language models (DLMs) that minimizes Maximum Mean Discrepancy (MMD) between generated and reference distributions in the feature space of a frozen pretrained DLM. To estimate MMD, we retain contextual features at individual token positions, obtaining multiple observations per sequence from a single extractor pass. We optimize this objective using policy gradients for discrete models and direct differentiation through generated latents for continuous models. In both cases, computing the loss directly from these features enables efficient post-training without full sampling trajectories or jointly trained auxiliary models. Experiments show lower generative perplexity at comparable entropy on OpenWebText and better accuracy-computation trade-offs on GSM8K. On 16B DMax-LLaDA2.0 models with hybrid masked-uniform diffusion, we increase decoding parallelism with similar or higher accuracy on math and code benchmarks.
