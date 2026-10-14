---
title: "MixLID: Token-Level Language Identification in Mixed-Language Text"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.16601"
authors: ["Seongtae Hong", "Youngjoon Jang", "Seungyoon Lee", "Jungseob Lee", "Heuiseok Lim"]
date: "2026-10-11T20:00:00.000Z"
score: ""
guid: "2610.16601"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.16601.png"
generated: "2026-10-14T19:00:21+05:30"
---

Processing multilingual text requires both identifying a broad range of languages and distinguishing the language of each token in inputs containing multiple languages. We introduce MixLID, a token-level language identification model supporting 111 language-script combinations. MixLID follows a two-stage training process: it first learns to distinguish individual languages using the language labels of monolingual examples, then continues training on mixed-language data. The second stage uses concatenated examples from existing code-switching data alongside augmented examples created through word substitution based on correspondences between English source words and loanwords. For monolingual identification, MixLID outperforms all baselines in both accuracy and macro F1 on four benchmarks within the language coverage shared with each baseline. For mixed-language identification, it outperforms the baselines in identifying the language of individual tokens on every evaluated language pair. MixLID achieves high performance across a broad range of languages in both monolingual and mixed-language settings. The model is publicly available at https://huggingface.co/nlpai-lab/MixLID.
