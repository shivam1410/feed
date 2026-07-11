---
title: "PAST-TIDE: Prototype-Anchored Statement Tuning with Topic-Invariant Normalization for Stance Detection"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.04690"
authors: ["Md. Shakhoyat Rahman Shujon", "MD Jahid Hasan Jim", "Md. Milon Islam", "Md Rezwanul Haque", "Fakhri Karray"]
date: "2026-07-05T20:00:00.000Z"
score: 60
guid: "2607.04690"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.04690.png"
generated: "2026-07-11T21:29:29+05:30"
---

We introduce PAST-TIDE, our stance detection system addressing both subtasks of the StanceNakba Shared Task at NakbaNLP@LREC-COLING 2026. The main idea is statement tuning. We redefine stance as cloze-style masked language modeling (MLM), letting a verbalizer map label words to stance categories through the pre-trained MLM head rather than appending a randomly initialized classification head. We complement this with prototypical contrastive learning, which uses learnable class prototypes for batch-size independent contrastive training, and topic-conditional layer normalization for cross-topic Arabic stance detection. PAST-TIDE achieves macro-F1 scores of 0.75 for Subtask A and 0.74 for Subtask B on the official leaderboard, indicating that minimal architectural additions to a pre-trained model can remain competitive in low-resource settings.
