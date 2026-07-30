---
title: "Uncovering Latent Reasoning Strategies in Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17674"
authors: ["Awni Altabaa", "John Lafferty"]
date: "2026-07-19T20:00:00.000Z"
score: 75
guid: "2607.17674"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17674.png"
generated: "2026-07-30T19:07:10+05:30"
---

A language model p_θ(y mid x) trained on reasoning tasks learns to solve problems via multiple distinct strategies, yet these strategies are implicit and entangled within the model's response distribution. We study the problem of decomposing the response distribution of a given pretrained language model into a structured, strategy-conditioned representation. Specifically, we learn a latent-variable factorization p_θ(y mid x) leadsto (r_ϕ(z mid x), g_ϕ(y mid x,z)), where a router r maps each input to a distribution over latent strategies z and a generator g produces the response conditioned on that strategy. A key challenge is that the generator, initialized from the base model, already represents p_θ(y mid x) without using z. Standard variational inference therefore gives the model no incentive to route information through z and can yield a severe form of posterior collapse. To address this, we propose a variational objective that measures fractional information gain relative to the base model's response loss and concentrates reconstruction pressure on tokens with high base model surprisal, encouraging z to encode strategy-relevant response variation. We introduce a benchmark of multi-strategy algorithmic tasks and show that this objective recovers latent codes aligned with distinct reference strategies while preserving the base model's response distribution.
