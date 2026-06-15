---
title: "Beyond LoRA: Is Sparsity-Induced Adaptation Better?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13767"
authors: ["Elijah Cadenhead, Cristian McGee, Xin Li, El Houcine Bergou, Aritra Dutta"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.13767v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13767v1 Announce Type: new Abstract: Low-rank adaptation (LoRA) and its variants provide a memory- and compute-efficient alternative to full fine-tuning of pre-trained models. However, questions remain about the comparative generalizability of these approaches and how the structural restrictions on low-rank updates preserve effective adaptation performance. We present a historical framing, covering the past (full fine-tuning and original LoRA), the present (different variants of LoRA), and propose simpler, cheaper, parameter-efficient extensions by inducing sparsity within existing LoRA variants: Cheap LoRA (cLA), training a single low-rank factor with the other fixed (deterministically or, in its randomized variant, stochastically), and the chained circulant variant, ${c}^3$LA. We frame cLA as a structured instance of asymmetric LoRA, serving as a controlled column-subspace restriction of full fine-tuning. We derive information-theoretic generalization error bounds for these variants, marking one of the first endeavors in this area. Empirically, we evaluate 11 fine-tuning methods across 10 pre-trained models and 14 datasets, analyzing the fine-tuned models' performance and generalization using tools such as loss landscapes and spectral analysis. Despite the sensitivity of fine-tuned models to the pre-trained model, datasets, and other factors, our study suggests that restricting LoRA-based PEFT methods' adaptation to a sparse, structured column space remains competitive across tasks with their parameter-matched baselines while reducing up to 10% training time and peak GPU memory up to 15%, even with a na\"ive, non-optimized, sparse implementation. Our theoretical and empirical generalization measures provide a more consistent and principled approach to their cost-effective adaptation than commonly used analytical tools. Overview and code are available at: https://elicaden.github.io/Beyond_LoRA/.
